import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Message from '../components/Message';
import ChatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';
export default function ChatRoomScreen() {
  const navigation = useNavigation();

  navigation.setOptions({ title: 'Elon' });

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
