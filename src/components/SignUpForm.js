import React from 'react';
// import { Text, View } from 'react-native';
import { Input, CardSection, Card, Button } from './common';
import { connect } from 'react-redux';
import {
  inputChange
} from "../actions";

class SignUpForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane Doe"
            value={this.props.name}
            onChangeText={value => this.props.inputChange({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@user.com"
            value={this.props.email}
            onChangeText={value => this.props.inputChange({ prop: 'email', value })}
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
          <Input
            label="Phone"
            placeholder="111-222-333"
            value={this.props.phone}
            onChangeText={value => this.props.inputChange({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection>
          <Button
            text="Register"
            background="#37003C"
            textColor='#fff'
          />
        </CardSection>
      </Card>
    );
  };
}

const mapStateToProps = state => {
  const { name, email, password, phone } = state.auth;
  return {
    name, email, password, phone,
  };
}

export default connect(mapStateToProps, { inputChange })(SignUpForm);