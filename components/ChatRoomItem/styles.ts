import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor:'white'
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 30,
      marginRight: 10,
    },
    badgeContainer: {
      backgroundColor: '#3777f0',
      height: 20,
      width: 20,
      borderRadius: 10,
      borderColor: 'white',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 45,
      top: 10,
    },
    badgeText: {
      fontSize: 12,
      color: 'white',
    },
    containerEnd: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 3,
    },
    text: {
      color: 'grey',
    },
});

export default styles;