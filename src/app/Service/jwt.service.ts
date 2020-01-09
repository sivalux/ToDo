import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }

//   login(email:string, password:string) {
//     return this.httpClient.post<{access_token:  string}>('http://www.your-server.com/auth/login', {email, password}).pipe(tap(res => {
//     localStorage.setItem('access_token', res.access_token);
// }))
// }
onLogin(form){
  const data = {
      email: form.username,
      password: form.password
  };
  return this.httpClient.post<{access_token:string}>('http://localhost:8000/api/login', data).subscribe(res => {
    console.log(res.access_token);
    
  localStorage.setItem('access_token', res.access_token);
  })
}


register(form) {
  const dat = {
    name: form.name,
    email: form.username,
    password: form.password
};
  return this.httpClient.post<{access_token: string}>('http://localhost:8000/api/register', dat).pipe(tap(res => {
  this.onLogin(form)
}))
}


logout() {
  localStorage.removeItem('access_token');
}

public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}

}