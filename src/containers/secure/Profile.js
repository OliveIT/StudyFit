import * as React from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from "react-redux";
import DefaultPreference from 'react-native-default-preference';

import styles from '../../styles';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProcessing: false
    };
  }

  componentDidMount() {
    console.log("props", this.props);
  }

  alert(message) {
    Alert.alert(
      "StudyFit",
      message,
      [{text: 'OK', onPress: () => {}}],
      {cancelable: false},
    );
  }

  onChangePwd() {
    const oldPwd = this.refs.inputOldPwd._lastNativeText;
    const newPwd = this.refs.inputNewPwd._lastNativeText;
    const conPwd = this.refs.inputConPwd._lastNativeText;

    if (oldPwd == "") { this.alert("Please input Old Password"); return; }
    if (newPwd == "") { this.alert("Please input New Password"); return; }
    if (conPwd == "") { this.alert("Please input Confirm Password"); return; }

    if (newPwd != conPwd) {
      this.alert("Please check your confirm password");
      return;
    }

    this.setState({ isProcessing: true });
    const {email} = this.props.data.user;
    const credential = firebase.auth.EmailAuthProvider.credential(email, oldPwd);
    firebase
    .auth()
    .currentUser
    .reauthenticateWithCredential(credential)
    .then((result) => {
      firebase
      .auth()
      .currentUser.updatePassword(newPwd)
      .then(() => {
        this.alert("Password is changed successfully.");
      })
      .catch((error) => {
        this.alert(error.message);
      })
      .finally(() => {
        this.setState({ isProcessing: false });
      });
    })
    .catch(error => {
      this.alert(error.message);
      this.setState({ isProcessing: false });
    })
  }

  onSignOut() {
    firebase
    .auth()
    .signOut();
    DefaultPreference.set("key", null);
    this.props.route.navigation.pop();
  }

  render() {
    const {firstName, lastName, email, coins} = this.props.data.user;
    return (
      <View style={styles.fullSize}>
        <View style={styles.page.header.container}>
          <Text style={styles.page.header.title}>Profile</Text>
        </View>
        <View style={styles.page.innerContent}>
          <View style={styles.Profile.data.group}>
            <Text style={styles.Profile.data.label}>First Name:</Text>
            <Text style={styles.Profile.data.content}>{firstName}</Text>
          </View>
          
          <View style={styles.Profile.data.group}>
            <Text style={styles.Profile.data.label}>Last Name:</Text>
            <Text style={styles.Profile.data.content}>{lastName}</Text>
          </View>
          
          <View style={styles.Profile.data.group}>
            <Text style={styles.Profile.data.label}>Email:</Text>
            <Text style={styles.Profile.data.content}>{email}</Text>
          </View>
          
          <View style={[styles.Profile.data.group, {marginBottom: 20}]}>
            <Text style={styles.Profile.data.label}>Coins:</Text>
            <Text style={styles.Profile.data.content}>{coins}</Text>
          </View>

          <TextInput secureTextEntry={true} placeholder="Old Password" style={styles.Profile.input} ref="inputOldPwd"/>
          <TextInput secureTextEntry={true} placeholder="Password" style={styles.Profile.input} ref="inputNewPwd"/>
          <TextInput secureTextEntry={true} placeholder="Confirm Password" style={styles.Profile.input} ref="inputConPwd"/>

          <TouchableOpacity style={styles.Profile.btn.container} onPress={this.onChangePwd.bind(this)} disabled={this.state.isProcessing}>
            <Text style={styles.Profile.btn.text}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Profile.btn.container} onPress={this.onSignOut.bind(this)} disabled={this.state.isProcessing}>
            <Text style={styles.Profile.btn.text}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);