import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.includes('ipinfo') || req.url.includes('opencagedata')) {
      return next.handle(req);
    }
    const paramReq = req.clone({
      url: `http://localhost:3004${req.url}`,
    });
    return next.handle(paramReq);
  }
}
