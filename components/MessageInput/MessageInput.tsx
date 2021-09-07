import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.warn('Sending ' + message);
  };

  const onPlusclicked = () => {
    console.warn('onPlus');
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusclicked();
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={styles.root}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          style={styles.icon}
          name='emotsmile'
          size={27}
          color='#595959'
        />
        <TextInput
          style={styles.textinput}
          placeholder='Signal message...'
          value={message}
          onChangeText={setMessage}
        />
        <Feather name='camera' size={24} color='#595959' style={styles.icon} />
        <MaterialCommunityIcons
          name='microphone-outline'
          size={24}
          color='#595959'
        />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <Ionicons name='send' size={18} color='white' />
        ) : (
          <AntDesign name='plus' size={24} color='white' />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
  },
  textinput: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#3777f0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
  },
});
