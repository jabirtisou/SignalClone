import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (
    <FlatList
      data={ChatRoomData}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
    />
    /*** <View style={styles.page}>
      <ChatRoomItem chatRoom={chatRoom1} />
      <ChatRoomItem chatRoom={chatRoom2} />
    </View> **/
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
