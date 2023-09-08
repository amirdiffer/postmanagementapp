import { Injectable } from '@angular/core';
import { EMPTY, withLatestFrom } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from './post.service';
import { changePage, getPosts, sort } from 'feature/post/+state/post.action';
import { PostState } from 'feature/post/+state/post.reducer';
import { Store } from '@ngrx/store';
import { selectPage } from 'feature/post/+state/post.selector';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      exhaustMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => ({
            type: '[POST] posts loaded successfully',
            posts: posts,
          })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  changePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changePage),
      withLatestFrom(this.store$),
      exhaustMap(([{ page }, { sort }]) =>
        this.postService.getPosts(page, sort).pipe(
          map((posts) => ({
            type: '[POST] page changed successfully',
            posts: posts,
            page: page,
          })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  sort$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sort),
      withLatestFrom(this.store$.select(selectPage)),
      exhaustMap(([action, page]) => {
        return this.postService.getPosts(page, action.sort).pipe(
          map((posts) => ({
            type: '[POST] sorted Successfully',
            posts: posts,
            order: sort,
          })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private postService: PostService,
    private store$: Store<PostState>,
  ) {}
}
