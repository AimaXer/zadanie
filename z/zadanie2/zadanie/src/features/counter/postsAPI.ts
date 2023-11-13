import {Post} from './postsSlice';

export function fetchPosts() {
  const requestOptions = {
    method: 'GET',
    headers: {'x-api-key': 'thisisapikey'},
  };
  return fetch(
    'http://localhost:3005/posts',
    requestOptions,
  ) as unknown as Promise<Post>;
}

export function addPosts(title: string, description: string) {
  const requestOptions = {
    method: 'POST',
    headers: {'x-api-key': 'thisisapikey'},
    body: JSON.stringify({
      title: title,
      description: description,
    }),
  };
  return fetch('http://localhost:3005/posts', requestOptions) as unknown;
}

export function deletePosts(id: string) {
  const requestOptions = {
    method: 'DELETE',
    headers: {'x-api-key': 'thisisapikey'},
  };
  return fetch('http://localhost:3005/posts/' + id, requestOptions) as unknown;
}

export function getPostInfo(id: string) {
  const requestOptions = {
    method: 'GET',
    headers: {'x-api-key': 'thisisapikey'},
  };
  return fetch('http://localhost:3005/posts/' + id, requestOptions) as unknown;
}
