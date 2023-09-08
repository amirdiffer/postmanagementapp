import { Component } from '@angular/core';
import { PostFacade } from 'feature/post/+state/post.facade';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  form: FormGroup;

  get title() {
    return this.form.get('title');
  }

  get body() {
    return this.form.get('body');
  }

  constructor(
    private postFacade: PostFacade,
    private messageService: MessageService,
  ) {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.maxLength(50),
        Validators.required,
      ]),
      body: new FormControl('', [Validators.required]),
    });
  }

  addPost() {
    if (this.form.invalid) {
      if (this.title?.hasError('maxlength')) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `title shouldn't be more than 50 characters`,
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Fields are required',
        });
      }
      return;
    }

    this.postFacade.addPost({
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
    });
  }
}
