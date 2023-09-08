import { createReducer, on } from '@ngrx/store';
import {
  pageChanged,
  postAdded,
  postsLoaded,
  sorted,
  startIndicator,
} from 'feature/post/+state/post.action';
import { IPostModel } from '../../../model/post.model';
import { SortModel } from '../../../model/post-sort.model';

export const featureKey = 'posts';

export interface PostState {
  posts: IPostModel[];
  loaded: boolean;
  page: number;
  sort: SortModel | undefined;
  indicator: boolean;
}

const initialState: PostState = {
  posts: [],
  loaded: false,
  page: 1,
  sort: undefined,
  indicator: false,
};

export const postReducer = createReducer(
  initialState,
  on(postsLoaded, (state, { posts }) => {
    return {
      ...state,
      posts,
      loaded: true,
    };
  }),
  on(pageChanged, (state, { posts, page }) => {
    return {
      ...state,
      posts,
      page,
    };
  }),
  on(sorted, (state, { posts, order }) => {
    return {
      ...state,
      posts,
      sort: order,
    };
  }),
  on(startIndicator, (state, payload) => {
    return {
      ...state,
      indicator: payload.state,
    };
  }),
  on(postAdded, (state, { post }) => {
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
);
