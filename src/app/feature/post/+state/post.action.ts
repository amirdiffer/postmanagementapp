import { createAction, props } from '@ngrx/store';
import { IPostModel } from '../../../model/post.model';
import {SortModel} from "../../../model/post-sort.model";

export const getPosts = createAction('[POST] get posts');

export const postsLoaded = createAction(
  '[POST] posts loaded successfully',
  props<{ posts: IPostModel[] }>(),
);

export const changePage = createAction(
  '[POST] change page',
  props<{ page: number }>(),
);

export const pageChanged = createAction(
  '[POST] page changed successfully',
  props<{ posts: IPostModel[], page: number }>(),
);

export const sort = createAction(
  '[POST] sort',
  props<{ sort: SortModel }>(),
);

export const sorted = createAction(
  '[POST] sorted Successfully',
  props<{ posts: IPostModel[], order: SortModel }>(),
);

export const startIndicator = createAction(
  '[POST] start indicator',
  props<{ state: boolean }>(),
);
