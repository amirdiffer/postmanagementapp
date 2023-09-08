import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from 'feature/post/post-detail/post-detail.component';
import { AddPostComponent } from 'feature/post/add-post/add-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'details/:id',
    component: PostDetailComponent,
  },
  {
    path: 'add-post',
    component: AddPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
