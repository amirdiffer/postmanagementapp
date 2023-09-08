import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from 'feature/post/+state/post.reducer';
import {
  selectIndicator,
  selectLoaded,
  selectPost,
  selectPosts,
} from 'feature/post/+state/post.selector';
import {changePage, getPosts, sort, startIndicator} from 'feature/post/+state/post.action';
import { SortModel } from '../../../model/post-sort.model';

@Injectable({ providedIn: 'root' })
export class PostFacade {
  posts$ = this.store.select(selectPosts);
  loaded$ = this.store.select(selectLoaded);
  post$ = (id: number) => this.store.select(selectPost(id));
  indicator$ = this.store.select(selectIndicator);

  constructor(private store: Store<PostState>) {}

  getPosts() {
    return this.store.dispatch(getPosts());
  }

  changePage(page: number) {
    this.store.dispatch(changePage({ page }));
  }

  sort(sortModel: SortModel) {
    this.store.dispatch(sort({ sort: sortModel }));
  }

  startIndicator(state: boolean) {
    this.store.dispatch(startIndicator({ state }));
  }
}
