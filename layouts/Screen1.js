import React from 'react';
import {
  Platform,
  ToastAndroid,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import Communications from 'react-native-communications';

//this is global function
callMe = () => {
  Communications.phonecall(numberToCall, true);
}

const instructions = Platform.select({
  ios: 'from iOS',
  android: 'from Android',
});
let btnStr = "Call Me :)";
let numberToCall = "";

let stringToShow="Hello on Screen 1";
const Screen1 = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{stringToShow} {instructions}</Text>
    <TextInput
        style={{height: 40}}
        placeholder="Type number here"
        onChangeText={
          (text) => numberToCall=text
        }
    />
    <Button
      title={btnStr}
      onPress={() =>
        callMe()
      }
    />
  </View>
);
export default Screen1;
