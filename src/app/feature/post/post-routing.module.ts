import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from 'feature/post/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'details/:id',
    component: PostDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
