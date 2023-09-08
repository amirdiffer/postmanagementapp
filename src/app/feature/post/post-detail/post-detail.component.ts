import { Component } from '@angular/core';
import { PostFacade } from 'feature/post/+state/post.facade';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  post$ = this.postFacade.post$(
    Number(this.activatedRoute.snapshot.params['id']),
  );

  indicator$ = this.postFacade.indicator$;

  subscriptions = new Subscription();

  constructor(
    private postFacade: PostFacade,
    private activatedRoute: ActivatedRoute,
  ) {
    this.subscriptions.add(
      this.postFacade.loaded$.subscribe((isLoaded) => {
        if (!isLoaded) {
          this.postFacade.getPosts();
        }
      }),
    );
  }
}
