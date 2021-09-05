import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Message from '../components/Message';
import ChatRoomData from '../assets/dummy-data/Chats';
export default function ChatRoomScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
