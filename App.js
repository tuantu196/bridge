import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { ToastModule } from "./ToastExample";
// import { ImageView } from "./ImageView";
// import { NativeModules } from "react-native";
// const { ToastModule } = NativeModules;
import CircularProgressButton from "./CircularProgressButton";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: -1,
    };
  }

  onClick = () => {
    if (this.state.progress == -1) {
      this.setState({
        progress: 0,
      });
    } else if (this.state.progress == 0) {
      this.setState({
        progress: 100,
      });
    } else if (this.state.progress == 100) {
      this.setState({
        progress: 0,
      });
    }
  };

  onClickToast() {
    ToastModule.show("Toast", ToastModule.SHORT);
  }
  render() {
    return (
      <View>
        <Button onPress={this.onClickToast} title="asdfasf">
          asdfasdfas
        </Button>
        <Button onPress={this.onClick} title="asdfasf">
          asdfasdfas
        </Button>
        {/* <ImageView src={"./94fyggH.jpg"} style={{ width: 100, height: 100 }} /> */}
        <CircularProgressButton
          style={{ height: 100, width: 100 }}
          text="text"
          completeText="Done"
          errorText="Error"
          idleText="idleText"
          progress={this.state.progress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
