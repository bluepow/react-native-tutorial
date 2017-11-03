import React, {Component} from 'react';
import {Alert,AppRegistry,Button,Text,StyleSheet,View, TextInput} from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton(){
    Alert.alert('You tapped the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title= "Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="Ok!"
            color="#841584"
          />
        </View>
      </View>
    );
  //     <View style = {{padding:10}}>
  //       <TextInput
  //           style={{height: 40}}
  //           placeholder="Type here to translate!"
  //           onChangeText={(text)=> this.setState({text})}
  //       />
  //       <Text style ={{padding: 10, fontSize: 42}}>
  //           {this.state.text.split('').map((word) => word && '🍕').join('')}
  //       </Text>
  //     </View>
  //     // <View style= {{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
  //     //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  //     //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
  //     //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
  //     // </View>
  //   );
  //
      }
    }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
