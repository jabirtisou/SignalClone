import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (
    <FlatList
      style={styles.page}
      data={ChatRoomData}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
