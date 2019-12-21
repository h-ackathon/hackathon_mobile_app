import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Input, CardSection, Card, IconButton, } from './common';
import { connect } from 'react-redux';
import {
  inputChange,
  login
} from "../actions";
import { Actions } from 'react-native-router-flux';

class LoginForm extends React.Component {


  login = () => {
    this.props.login(this.props.email, this.props.password);
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@user.com"
            value={this.props.email}
            onChangeText={value => this.props.inputChange({ prop: 'email', value: value.toLowerCase() })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="Password"
            secureTextEntry
            value={this.props.password}
            onChangeText={value => this.props.inputChange({ prop: 'password', value })}
          />
        </CardSection>
        <CardSection>
          <IconButton
            text="Login"
            textColor="#fff"
            background="#37003C"
            iconName="login"
            onPress={this.login}
            showText
          />
        </CardSection>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItmes: 'center',
          marginVertical: 8,
        }}>
          <Text>Not a member?</Text>
          <TouchableOpacity onPress={() => Actions.register()}>
            <Text style={{
              paddingHorizontal: 10,
              textDecorationLine: 'underline',
              color: 'blue',
            }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

const mapStateToProps = state => {
  const { email, password } = state.auth;
  return {
    email, password,
  };
}

export default connect(mapStateToProps, { inputChange, login })(LoginForm);