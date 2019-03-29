import { Dimensions, Platform } from 'react-native';
const {width, height} = Dimensions.get("window");

const safeAreaHeight = 24;

const styles = {
  fullSize: {
    width: width,
    flexDirection: 'column',
    flex: 1
  },
  bold: {
    fontWeight: 'bold'
  },
  spacer: {
    flex: 1,
    minHeight: width * 0.05
  },

  Presentation: {
    mainLogo: {
      color: '#800080',
      textAlign: 'center',
      fontSize: width * 0.15,
      fontWeight: 'bold',
      marginTop: width * 0.1
    },
    logoDescription: {
      color: '#9864ff',
      textAlign: 'center',
      fontSize: width * 0.06,
      fontWeight: 'bold',
      paddingLeft: width * 0.05,
      paddingRight: width * 0.05,
      marginTop: width * 0.05
    },
    image: {
      marginBottom: width * 0.05
    },
    imgBook: {
      width: width * 0.4,
      height: width * 0.6,
      alignSelf: 'center'
    },
    imgLifter: {
      width: width * 0.8,
      height: width * 0.3,
      alignSelf: 'center'
    }
  },

  SignIn: {
    logo: {
      color: '#fff',
      textAlign: 'center',
      fontSize: width * 0.1,
      fontWeight: 'bold',
      marginBottom: width * 0.1
    },
    input: {
      backgroundColor: '#ffffff3f',
      width: width * 0.9,
      alignSelf: 'center',
      color: '#fff',
      paddingLeft: width * 0.03,
      paddingRight: width * 0.03,
      marginBottom: width * 0.05,
      borderRadius: 5
    },
    mainBtn: {
      container: {
        borderColor: '#ffffff3f',
        borderWidth: 1,
        borderRadius: 5,
        width: width * 0.9,
        alignSelf: 'center',
      },
      text: {
        padding: width * 0.04,
        alignSelf: 'center',
        color: '#ffffff',
        fontWeight: 'bold'
      }
    },
    btnForgotPwd: {
      container: {
        alignSelf: 'center',
        marginTop: width * 0.05
      },
      text: {
        color: '#ffffffaf',
      }
    },
    signUpContainer: {
      backgroundColor: '#ffffff1f',
      padding: width * 0.03,
      borderTopWidth: 1,
      borderTopColor: '#ffffff1f',
      alignItems: 'center',
    },
    signUpContainerView: {
      flexDirection: 'row'
    },
    signUp: {
      description: {
        color: '#ffffffaf'
      },
      btnContainer: {
        marginLeft: width * 0.03
      },
      btnText: {
        color: '#ffffff',
        fontWeight: 'bold'
      }
    }
  }
};

export default styles;
