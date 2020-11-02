import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
