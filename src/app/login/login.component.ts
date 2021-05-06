import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect Banking Partner"
  accno="Account Number Please";
  pswd="";
  
  constructor(private router:Router,private dataService:DataService) { }

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


  register(){
  //  alert("Registration Successful");
    this.router.navigateByUrl("register");
  }

  login(){
   
    var acno = this.accno;
    var pswd = this.pswd;

    const result = this.dataService.login(acno,pswd);

    if(result){
      this.router.navigateByUrl("dashboard");
    }
  }



}
