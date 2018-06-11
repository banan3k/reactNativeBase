import React from 'react';
import {
  ToastAndroid,
  View,
  Text,
  Button
} from 'react-native';

let stringToShow="Welcome Home";
let goToNextBtnStr="Next Screen";
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: 'Welcome Home'
    };
  }
  btnClicked = () => {
    this.setState({btnText:"Clicked"});
    ToastAndroid.show("nice!", ToastAndroid.SHORT);
  }
  nextScreen = (navigate) => {
    goToNextBtnStr="Refreshed name";
    homeButtonClicked(navigate)
  }
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {
      navigate
    } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          title={this.state.btnText}
          onPress={() =>
            this.btnClicked()
          }
        />
        <Button
          title={goToNextBtnStr}
          onPress={() =>
            this.nextScreen(navigate)
          }
        />
      </View>
    );
  }
}
export default HomeScreen;
