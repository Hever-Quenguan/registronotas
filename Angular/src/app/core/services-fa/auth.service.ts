import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { LoginModel } from '../../model-fa/login-model.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FaneroConstants } from '../interfaces/constants.class';
import { Router } from '@angular/router';
import { ApiTknModel } from '../../model-fa/api-tkn-model';
//import { Constants } from 'ag-grid-community';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentUserSubject: BehaviorSubject<string>;
  public currentUser:Observable<string>;

  public currentPhotoSubject: BehaviorSubject<string>;
  public currentPhoto:Observable<string>;

  public currentStoreSubject: BehaviorSubject<string>;
  public currentStore:Observable<string>;
 

  get isLoggedIn() {
    console.log(this.loggedIn);
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('session'))
    this.currentUser=this.currentUserSubject.asObservable();

    this.currentPhotoSubject = new BehaviorSubject<string>("")
    this.currentPhoto=this.currentPhotoSubject.asObservable();
    
    this.currentStoreSubject = new BehaviorSubject<string>("")
    this.currentStore=this.currentStoreSubject.asObservable();
  }

  login(sesion: any) {
    if (sesion) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }else{
      sessionStorage.clear();
    }
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value;
  }

  public get currentPhotoValue(): string {
    return this.currentUserSubject.value;
  }

  public get currentStoreValue(): string {
    return this.currentUserSubject.value;
  }

  isLogged():boolean{
  
    var session=localStorage.getItem('session');

    if(session==FaneroConstants.TKN_HSH.key){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
      
    }
  }

  logout() {
    this.loggedIn.next(false);
    sessionStorage.clear();
    localStorage.removeItem('session');
    localStorage.removeItem('name');
    localStorage.removeItem('photo');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

   getTkn(){
    // console.log('dentro get token')
    const keyModel = new ApiTknModel();
    keyModel.key = FaneroConstants.TKN_HSH.key;
    keyModel.apiKey = FaneroConstants.TKN_HSH.apiKey;
    return this.http.post<any>(FaneroConstants.pathApi.GetTKN, keyModel, httpOptions);
  }

      // getTkn() {
      //   this.createTkn();
      //   return sessionStorage.getItem('token');
      // }

}
