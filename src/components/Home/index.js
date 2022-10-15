import * as React from 'react';
import { View } from 'react-native';
import Title from '../Title';
import Form from '../Form';
import { StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});

