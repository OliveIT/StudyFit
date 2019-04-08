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
  },

  tabBar: {
    backgroundColor: 'white',
    borderTopColor: '#800080',
    borderTopWidth: 2
  },

  page: {
    header: {
    },
    headerText: {
      color: '#800080',
      textAlign: 'center',
      fontSize: width * 0.06,
      fontWeight: 'bold',
      borderBottomColor: '#800080',
      borderBottomWidth: 2,
      padding: width * 0.02
    },
    content: {
      width: width,
      flexDirection: 'column',
      flex: 1
    },
    innerContent: {
      padding: width * 0.05,
      width: width,
      flexDirection: 'column',
      flex: 1
    }
  },

  Step: {
    ring: {
      alignSelf: 'center',
      width: width * 0.6,
      height: width * 0.7
    },
    iconBox: {
      alignSelf: 'center'
    },
    icon: {
      alignSelf: 'center'
    },
    bigText: {
      fontSize: width * 0.2,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center'
    },
    text: {
      fontSize: width * 0.05,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center'
    }
  },

  Product: {
    container: {
      width: width * 0.45,
      margin: width * 0.025
    },
    image: {
      width: width * 0.45,
      height: width * 0.5,
      textAlign: 'center'
    },
    title: {
      fontSize: width * 0.04,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    priceContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center'
    },
    price: {
      fontSize: width * 0.04,
      fontWeight: 'bold',
      color: '#008000',
      marginLeft: width * 0.01
    },
    btnContainer: {
      width: width * 0.3,
      alignSelf: 'center',
      backgroundColor: '#800080',
      borderRadius: width * 0.01,
    },
    btnText: {
      color: '#fff',
      fontSize: width * 0.05,
      textAlign: 'center'
    }
  },

  Shop: {
    container: {
      backgroundColor: '#f00'
    },
    list: {
      width: width,
      flexDirection: 'column',
      flex: 1,
    }
  },

  Learn: {
    btnStart: {
      container: {
        backgroundColor: '#800080',
        borderRadius: width * 0.01,
        width: width * 0.7,
        alignSelf: 'center',
        padding: width * 0.03
      },
      text: {
        color: '#fff',
        fontSize: width * 0.06,
        fontWeight: 'bold',
        textAlign: 'center'
      }
    },
    note: {
      color: '#800080',
      marginBottom: width * 0.03
    },
    title: {
      fontSize: width * 0.05,
      color: '#111',
      fontWeight: 'bold',
      marginBottom: width * 0.05
    },
    questionCont: {
      backgroundColor: '#00000022',
      padding: width * 0.03,
      borderRadius: width * 0.01,
      marginBottom: width * 0.05
    },
    question: {
      fontSize: width * 0.04,
      color: '#444',
    },
    timer: {
      fontSize: width * 0.08,
      color: '#228B22',
      alignSelf: 'center'
    },
    footer: {
      flexDirection: 'row'
    },
    btnCheck: {
      container: {
        backgroundColor: '#800080',
        padding: width * 0.02,
        borderRadius: width * 0.01
      },
      text: {
        color: '#fff',
        fontSize: width * 0.05
      },
    },
    correct: {
      backgroundColor: '#228B22'
    },
    wrong: {
      backgroundColor: '#FF6347'
    },
    textResult: {
      textAlign: 'center',
      fontSize: width * 0.06,
      marginBottom: width * 0.05
    }
  }
};

export default styles;
