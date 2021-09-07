/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather } from '@expo/vector-icons';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {
  ColorSchemeName,
  Pressable,
  useWindowDimensions,
  Text,
  View,
  Image,
} from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name='ChatRoom'
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{
          textAlign: 'center',
          flex: 1,
          marginLeft: 50,
          fontWeight: 'bold',
        }}
      >
        Signal
      </Text>
      <Feather
        name='camera'
        size={24}
        color='black'
        style={{ marginHorizontal: 10 }}
      />
      <Feather
        name='edit-2'
        size={24}
        color='black'
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();
  console.log(props);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 20,
        marginLeft: -25,
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{
          textAlign: 'left',
          flex: 1,
          fontWeight: 'bold',
          marginLeft: 10,
        }}
      >
        {props.children}
      </Text>
      <Feather
        name='camera'
        size={24}
        color='black'
        style={{ marginHorizontal: 10 }}
      />
      <Feather
        name='edit-2'
        size={24}
        color='black'
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};
