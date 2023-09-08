import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostFacade } from 'feature/post/+state/post.facade';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private postFacade: PostFacade) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    this.postFacade.startIndicator(true);
    return next.handle(req).pipe(
      map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this.postFacade.startIndicator(false);
        }
        return evt;
      }),
    );
  }
}
