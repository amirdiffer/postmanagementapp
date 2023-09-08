import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';
import { CardModule } from 'primeng/card';
import { PostService } from './+state/post.service';
import { StoreModule } from '@ngrx/store';
import { featureKey, postReducer } from 'feature/post/+state/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from 'feature/post/+state/post.effect';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [PostsComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    CardModule,
    HttpClientModule,
    StoreModule.forFeature(featureKey, postReducer),
    EffectsModule.forFeature(PostEffects),
    PaginatorModule,
    ProgressSpinnerModule,
  ],
  providers: [PostService],
})
export class PostModule {}
