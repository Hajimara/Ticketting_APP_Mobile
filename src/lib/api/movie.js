import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '52a6ae5991d0233dac6df1057040687f',
    language: 'ko-KR',
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Max-Age': 3600,
    'Access-Control-Allow-Headers':
      'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
  },
});

export const moviesAPI = {
  nowPlaying: (page) =>
    api.get('movie/now_playing', {
      params: {
        page,
      },
    }),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
