import { Injectable } from '@angular/core';

import { getFirebaseBackend } from '../../authUtils';
import { User } from 'src/app/store/Authentication/auth.models';
import { BehaviorSubject, catchError, from, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';


const AUTH_API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })

export class AuthenticationService {

  user!: User;
  currentUserValue: any;

  private readonly currentUserSubject: BehaviorSubject<User>;

  constructor(private readonly http: HttpClient, private readonly store: Store) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')!));
  }

  /**
   * Returns the current user
   */
  public currentUser(): User {
    return getFirebaseBackend().getAuthenticatedUser();
  }


  /**
   * Performs the auth
   * @param email email of user
   * @param password password of user
   */
  login(email: string, password: string) {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions).pipe(
      map((response: any) => {
        const user = response;
        return user;
      }),
      catchError((error: any) => {
        const errorMessage = 'Login failed'; // Customize the error message as needed
        return throwError(errorMessage);
      })
    );
  }

  /**
   * Performs the register
   * @param email email
   * @param password password
   */
  register(user: User) {
    // return from(getFirebaseBackend().registerUser(user));

    return from(getFirebaseBackend().registerUser(user).then((response: any) => {
      const user = response;
      return user;
    }));
  }

  /**
   * Reset password
   * @param email email
   */
  resetPassword(email: string) {
    return getFirebaseBackend().forgetPassword(email).then((response: any) => {
      const message = response.data;
      return message;
    });
  }

  /**
   * Logout the user
   */
  logout() {
    // logout the user
    getFirebaseBackend().logout();
  }
}

