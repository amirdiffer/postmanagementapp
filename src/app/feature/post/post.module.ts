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
import { AddPostComponent } from './add-post/add-post.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import {MessageService} from "primeng/api";
import {StyleClassModule} from "primeng/styleclass";

@NgModule({
  declarations: [PostsComponent, PostDetailComponent, AddPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    CardModule,
    HttpClientModule,
    StoreModule.forFeature(featureKey, postReducer),
    EffectsModule.forFeature(PostEffects),
    PaginatorModule,
    ProgressSpinnerModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ToastModule,
    MessagesModule,
    StyleClassModule,
  ],
  providers: [PostService, MessageService],
})
export class PostModule {}
