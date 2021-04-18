import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { StatusCode } from '../enum';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private tostr: ToastrService,) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {

            if (err.status === 0) {
                // auto logout if 401 response returned from api
                // this.authService.signOut();

            }

            if (err.status == 422) {

            }


            // Test with http://www.mocky.io/v2/5ea7ca972f00003f33c4efc8
            if (err.status === 500) {
                // Display any toast or any 500 related error here

            }

            // if(localStorage.getItem('token') == '' || localStorage.getItem('token') == undefined || localStorage.getItem('token') == null){
            //     this.tostr.success('Success', 'Logout successfully');
            //     this.authService.signOut();
            // }

            // Following is not required
            /* let data = {};
            data = {
                reason: err && err.error.reason ? err.error.reason : '',
                status: err.status
            };
            this.errorDialogService.openDialog(data);
             */
            let error = err.error.errors?.base ? err.error.errors?.base[0] : err.error.errors;
            let res = {
                status: err.status,
                statusText: err.statusText,
                success: err.error.success,
                params: err.error?.params,
                error: error,
                message: (err.error?.message || error?.message)
            }
            // const error = err.error.message || err.statusText;
            return throwError(res);
        }));
    }
}
