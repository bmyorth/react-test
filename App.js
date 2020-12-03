import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';
import { WebView } from 'react-native-webview';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <WebView source={{ uri: 'http://192.168.137.1:3000' }} style={styles.webview} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    width: 400,
    height: 255,
    alignItems: 'center',
    justifyContent: 'center',
  },
  webview: {
    width: width * 0.95,
    height: 200,
    backgroundColor: 'transparent'
  }
});
