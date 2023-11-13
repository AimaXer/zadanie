import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {addPosts, deletePosts, fetchPosts, getPostInfo} from './postsAPI';

export interface Post {
  title: string;
  description: string;
  id: string;
}

interface PostsState {
  posts: Post[];
  isLoading: boolean;
}

interface postsReducer {
  posts: PostsState;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
};

export const getPostsAsync = createAsyncThunk(
  'posts/getPosts',
  async (): Promise<Post> => {
    return await fetchPosts();
  },
);

export const addPostsAsync = createAsyncThunk(
  'posts/addPosts',
  async (arg: {title: string; description: string}): Promise<any> => {
    return await addPosts(arg.title, arg.description);
  },
);

export const deletePostsAsync = createAsyncThunk(
  'posts/deletePosts',
  async (id: string): Promise<any> => {
    return await deletePosts(id);
  },
);

export const getPostInfoAsync = createAsyncThunk(
  'posts/getPostsInfo',
  async (id: string): Promise<any> => {
    return await getPostInfo(id);
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPostsAsync.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addPostsAsync.pending, (state: {isLoading: boolean}) => {
        state.isLoading = true;
      })
      .addCase(addPostsAsync.fulfilled, (state: PostsState, action: any) => {
        state.isLoading = false;
        state.posts = [
          ...state.posts,
          {
            id: action.meta.arg.title,
            title: action.meta.arg.title,
            description: action.meta.arg.description,
          },
        ];
      })
      .addCase(deletePostsAsync.pending, (state: {isLoading: boolean}) => {
        state.isLoading = true;
      })
      .addCase(deletePostsAsync.fulfilled, (state: PostsState, action: any) => {
        state.isLoading = false;
        state.posts = [...state.posts.filter(post => post.id === action.arg)];
      });
  },
});

export const selectPosts = (state: postsReducer) => state.posts.posts;
export const arePostsLoading = (state: postsReducer) => state.posts.isLoading;

export default postsSlice.reducer;
