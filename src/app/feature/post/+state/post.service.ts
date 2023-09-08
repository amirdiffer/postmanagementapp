import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPostModel } from '../../../model/post.model';
import { environment } from 'environment/environment';
import { SortModel } from '../../../model/post-sort.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getPosts(
    page = 1,
    sort: SortModel | undefined = undefined,
  ): Observable<IPostModel[]> {
    const url = `${environment.API_URL}posts?_page=${page}&_limit=5`;

    if (sort) {
      return this.httpClient.get<IPostModel[]>(
        `${url}&_sort=title&_order=${sort}`,
      );
    } else {
      return this.httpClient.get<IPostModel[]>(url);
    }
  }
}
