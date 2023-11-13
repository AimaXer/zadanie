import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppDispatch} from '../app/store';
import {useDispatch} from 'react-redux';
import {deletePostsAsync} from '../features/counter/postsSlice';

const PostDetails = ({route, navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const {title, description, id} = route.params;

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressDelete = () => {
    dispatch(deletePostsAsync(id));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={onPressBack} />
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <Button title="Delete" color="red" onPress={onPressDelete} />
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    padding: 20,
  },
  title: {
    paddingBottom: 30,
    fontSize: 30,
  },
});
