import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  accno="Account Number"
  pswd=""
  aim = "Registration Page"

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }


  register(){

   const result = this.dataService.register(this.accno,this.pswd,this.uname)

   if(result){
    alert("registration successfull");
    this.router.navigateByUrl("");

   }
else{
  alert("Account already Exist!!!!! Please Log In")
}
    
  }

  
}
