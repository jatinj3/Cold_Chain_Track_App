
import {Http}  from "@angular/http";
import { Injectable } from '@angular/core';
export interface User {
  name: string;
  pass:string;
  role: number;
  groupid:string;
  admin:string;
  userid:string;
}

@Injectable()
export class AuthProvider {
  currentUser: User;
  constructor(private http: Http) {
  }
  
   login(name: string, pw: string) : Promise<boolean> {
    return new Promise((resolve, reject) => {
   // var link='http://trackingexperts.com/appv2/dipatchclient/login.php';
  // var link='http://gtrac.in/snowmanappmac/login.php';
 // var link='http://192.168.1.101/snowmanappmac/login.php';
 // var link='http://192.168.2.230/snowmanappmac/login.php';
 var link='http://gtrac.in/snowmanappmacv1/login.php';
 //var link='http://192.168.2.230/login.php';
    var myData=JSON.stringify({uname:name, password: pw});
    this.http.post(link, myData)
    .subscribe(data => {
     let user =JSON.parse(data["_body"]);
     
    
  // if(user.message=="Username or password is correct") {
    if(user.status=="1") {
        this.currentUser = {
          name: name,
          role: 0,
          pass: pw,
          groupid: user.groupid,
          admin: user.admin,
          userid:user.userid

        };
        resolve(true);  
  }
  else{
    resolve(false);
  }
});
} );
}

isLoggedIn() {
  return this.currentUser != null;
}
isUser() {
  return this.currentUser.role === 0;
}
logout() {
  this.currentUser = null;
  
}
}
