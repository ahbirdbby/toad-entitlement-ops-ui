import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoggerService } from './services/logger.service';

@Injectable()
export class HttpIntersector implements HttpInterceptor {

    constructor(private logger: LoggerService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMsg;
        if (error.error instanceof ErrorEvent) {
            errorMsg = 'An error occured:' + error.error.message;
        } else {
            errorMsg = 'The response code is: ' + error.status + ' ' + error.statusText + ', ' +
                            'the error detail is: ' + error.error;
        }
        this.logger.error(new Error(errorMsg));

        return throwError(error);
    }
}
