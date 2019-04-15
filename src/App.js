import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import FaceRecogination from "./components/FaceRecogination/FaceRecogination";
import Signin from "./components/Signin/Signin";
import { particleConfig } from "./particles-config.js";
import Clarifai from "clarifai";
import "./App.css";
import Register from "./components/Register/Register";

const faceDetect = new Clarifai.App({
  apiKey: "518de9ff41e64128b7db09934edd355f"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {},
      route: "signin",
      isSignin: false
    };
  }

  changeRoute = (newRoute) => 
  {
    if(newRoute === 'signout'){
      this.setState({isSignin:false})}
      else if(newRoute === 'home'){
        this.setState({isSignin:true})}   
    this.setState({route:newRoute });
  }
  faceBoxCalulations = response => {
    const boundary =
      response.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(boundary);
    const image = document.getElementById("faceImages");
    const width = Number(image.width);
    console.log(width);
    const height = Number(image.height);
    return {
      leftCol: boundary.left_col * width,
      rightCol: width - boundary.right_col * width,
      topRow: boundary.top_row * height,
      bottomRow: height - boundary.bottom_row * height
    };
  };

  onFaceBox = box => {
    this.setState({ box: box });
  };
  onInputChange = event => {
    this.setState({ input: event.target.value });
  };
  onSubmitClick = () => {
    faceDetect.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.onFaceBox(this.faceBoxCalulations(response)))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        {/*<Particles className="particles" params={particleConfig} />*/}
        <Navigation changeRoute={this.changeRoute} isSignin={this.state.isSignin}  />
        {this.state.route === 'home' ?
        <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmitClick={this.onSubmitClick}
            />
            <FaceRecogination
              imageURL={this.state.input}
              box={this.state.box}
            />
          </div>
          :(this.state.route === 'signin' ? 
          <Signin changeRoute={this.changeRoute} />
          :<Register changeRoute={this.changeRoute} /> )
    }
      </div>
    );
  }
}

export default App;
