import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect Banking Partner"
  accno="Account Number Please";
  pswd="";
  accountDetails:any = {
    1000: { acno: 1000, pswd: "user1", balance: 5000,uname:"user1" },
    1001: { acno: 1001, pswd: "user2", balance: 3000 ,uname:"user2"},
    1002: { acno: 1002, pswd: "user3", balance: 10000 ,uname:"user3"},
    1003: { acno: 1003, pswd: "user4", balance: 1000 ,uname:"user4"}
}
  constructor(private router:Router) { }

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

  login(){
   
    var acno = this.accno;
    var pswd = this.pswd;

    let dataset = this.accountDetails;

    if (acno in dataset) {
        if (pswd == dataset[acno]["pswd"]) {
          alert("Login Successful");
          this.router.navigateByUrl("dashboard");
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
