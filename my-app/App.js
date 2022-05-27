import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { Button, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App  =()=>{
  const [count ,counter] =useState(1);
  const onClickHandler = () =>{
   counter(count +1);
  } 
  return (
    <View style={styles.body}> 
    <Text>{count}</Text>
      <Button style = {styles.button} title = 'add' onPress={onClickHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:25,
    
  },
});
export default App;
