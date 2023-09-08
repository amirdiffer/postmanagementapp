import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, PostState } from 'feature/post/+state/post.reducer';

export const selectFeature = createFeatureSelector<PostState>(featureKey);

export const selectPosts = createSelector(
  selectFeature,
  (state) => state.posts,
);

export const selectLoaded = createSelector(
  selectFeature,
  (state) => state.loaded,
);

export const selectPage = createSelector(selectFeature, (state) => state.page);

export const selectPost = (id: number) =>
  createSelector(selectFeature, (state) =>
    state.posts.find((post) => post.id === id),
  );

export const selectIndicator = createSelector(
  selectFeature,
  (state) => state.indicator,
);
