import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { FaneroConstants } from '../common/constants.class';
import { ApiTknModel } from '../model/api-tkn-model';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

    getTkn(){
    let token;
     this.authService.getTkn().subscribe(resp=>{
      // debugger;
      token = resp.apiTkn;
      localStorage.setItem('token', resp.apiTkn)
    });
    return token;
   }

    //  async getTkn(){
  //  return await this.authService.getTkn();
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // console.log('En interceptor');
        // let tokentemp = this.getTkn();
      if (req.url.includes('AuthToken')) {
        return next.handle(req);
      }
     this.getTkn();
    // debugger;
    // console.log(tokentemp);
    let token = localStorage.getItem('token');
    let request = req;

    if (token) {
      if(req.url!=FaneroConstants.pathApi.pingPayU){
        request = req.clone({
          setHeaders: {
            authorization: `Bearer ${ token }`
          }
        });
      }     
    }

    // debugger;
    // req = req.clone({
    //   setHeaders: {'Authorization': 'Bearer ' + token}
    // });
    // return next.handle(req);
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.getTkn();
        }

        return throwError( err );

      })
    );
  }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   console.log('In interceptor')
//   debugger;

//   // let authService = this.injector.get(AuthService);
//   req = req.clone({
//     setHeaders: {
//       Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTA1MDYyNTIsImV4cCI6MTU5MDUwNjMxMiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1NTM3OSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTUzNzkvYXBpIn0.Ek_Hj7KddbZgbMIwMeQO61qivMWy0i1PpqdIE_oIJtE`
//     }
//   });
//   return next.handle(req);
// }

}
