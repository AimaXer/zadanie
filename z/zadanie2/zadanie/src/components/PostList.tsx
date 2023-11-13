import {StyleSheet, ScrollView, View, Button, Text} from 'react-native';
import React from 'react';
import {
  Post,
  arePostsLoading,
  selectPosts,
} from '../features/counter/postsSlice';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';

const PostList = ({navigation}: {navigation: any}) => {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(arePostsLoading);
  const onPressAddPosts = () => {
    navigation.navigate('AddPost');
  };
  const onPressPost = (post: Post) => {
    navigation.navigate('PostDetails', post);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loading}>
          <Text>Loading.....</Text>
        </View>
      ) : (
        <>
          <ScrollView>
            {posts.map(post => {
              return (
                <TouchableOpacity
                  style={styles.post}
                  id={post.id.toString()}
                  onPress={() => onPressPost(post)}>
                  <Text>{post.title}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <Button title="Add Post" onPress={onPressAddPosts} />
        </>
      )}
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
  },
  post: {
    padding: 10,
    borderWidth: 1,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
