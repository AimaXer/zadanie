import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addPostsAsync} from '../features/counter/postsSlice';
import {AppDispatch} from '../app/store';

const AddPost = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onPress = () => {
    dispatch(addPostsAsync({title: title, description: description})).then(() =>
      navigation.goBack(),
    );
  };

  return (
    <View style={styles.container}>
      <Text>title</Text>
      <TextInput style={styles.input} onChangeText={str => setTitle(str)} />
      <Text>description</Text>
      <TextInput
        style={styles.input}
        onChangeText={str => setDescription(str)}
      />
      <Button title="Add Post" onPress={onPress} />
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
  },
  input: {
    margin: 10,
    borderWidth: 2,
    fontSize: 20,
  },
});
