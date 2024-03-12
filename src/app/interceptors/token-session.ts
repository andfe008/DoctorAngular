import { Injectable, Inject } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

@Injectable()
export class tokenSession implements HttpInterceptor {


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.endsWith('/usuario/login')) {
            return next.handle(request);
        }
        const authToken = JSON.parse(localStorage.getItem("usuarioSesion") || '').token;
        const authReq = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${authToken}`)
        });
        return next.handle(authReq);
    }
}
