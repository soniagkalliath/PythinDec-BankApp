import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno="";
  pswd="";
  amount="";
  wacno="";
  wpswd=""
  wamount=""

  constructor(private dateService:DataService) { }

  ngOnInit(): void {
  }

  deposit(){

   const result = this.dateService.deposit(this.acno,this.pswd,this.amount)
   if(result){

    alert("Amount "+this.amount+" credited successfully and new balance is : "+result)
   
   }
   else{
     alert("Transaction failed");
   }
  }

  withdraw(){
    const result = this.dateService.withdraw(this.wacno,this.wpswd,this.wamount)
   if(result){

    alert("Amount "+this.wamount+" debited successfully and new balance is : "+result)
   
   }
   else{
     alert("Transaction failed");
   }
  }
}
