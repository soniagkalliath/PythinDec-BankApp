import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect Banking Partner"
  account = "Account Number Please"
  accno="";
  pswd="";
  accountDetails:any = {
    1000: { acno: 1000, pswd: "user1", balance: 5000,uname:"user1" },
    1001: { acno: 1001, pswd: "user2", balance: 3000 ,uname:"user2"},
    1002: { acno: 1002, pswd: "user3", balance: 10000 ,uname:"user3"},
    1003: { acno: 1003, pswd: "user4", balance: 1000 ,uname:"user4"}
}
  constructor() { }

  ngOnInit(): void {
  }

  changeAcc(event:any){
    this.accno = event.target.value;
    console.log(this.accno);
  }

  changePswd(event:any){
    this.pswd = event.target.value;
    console.log(this.pswd);
  }

  login(a:any,p:any){
   
    var acno = a.value;
    var pswd = p.value;

    let dataset = this.accountDetails;

    if (acno in dataset) {
        if (pswd == dataset[acno]["pswd"]) {
          alert("Login Successful");
        }
        else {
          alert("Invalid password")
        }
    }
    else {
      alert("Invalid Account Number, Please Register")
    }
  }

}
