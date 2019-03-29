import { Dimensions, Platform } from 'react-native';
const {width, height} = Dimensions.get("window");

const styles = {
  fullSize: {
    width: width,
    height: height
  },
  bold: {
    fontWeight: 'bold'
  },
  spacer: {
    flex: 1,
  },

  Presentation: {
    page: {
      flexDirection: 'column',
    },
    logo: {
    },
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
      marginBottom: width * 0.15
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
  }
};

export default styles;
