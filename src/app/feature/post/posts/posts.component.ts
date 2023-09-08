import { Component, OnDestroy } from '@angular/core';
import { PostFacade } from 'feature/post/+state/post.facade';
import { Subscription } from 'rxjs';
import { SortOption } from '../../../model/post-sort.model';
import { Router } from '@angular/router';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnDestroy {
  posts$ = this.postFacade.posts$;
  indicator$ = this.postFacade.indicator$;
  subscriptions = new Subscription();

  sortList: SortOption[] = [
    { name: 'A-Z', code: 'asc' },
    { name: 'Z-A', code: 'desc' },
  ];
  selectedSortItem: SortOption | undefined;

  isSmallScreen = this.breakPointObserver.observe(['(max-width: 600px)']);

  constructor(
    private postFacade: PostFacade,
    private router: Router,
    private mediaMatcher: MediaMatcher,
    private breakPointObserver: BreakpointObserver,
  ) {
    this.subscriptions.add(
      this.postFacade.loaded$.subscribe((isLoaded) => {
        if (!isLoaded) {
          this.postFacade.getPosts();
        }
      }),
    );
  }

  onPageChange(event: any) {
    this.postFacade.changePage(event.page + 1);
  }

  onSortChange(event: any) {
    this.postFacade.sort(event.value.code);
  }

  goToDetails(id: number) {
    this.router.navigate([`details/${id}`]);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
