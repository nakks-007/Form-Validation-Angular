import { Component } from '@angular/core';

import { test } from './test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interview';

  names : boolean = false;
  emails : boolean = false;
  numbers : boolean = false;
  images : boolean = false;
  dates : boolean = false;

  values : test = new test()

  dating = new Date()

   size: number;

   set : Event;
   

  Submit() {


    
    let va = this.values.mobile.length


    let validatename = /^[a-zA-Z]+$/;
    
    let validatenumber = /^[0-9]+$/;
    
 let validateemail = /^[\w\.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;

 
 let maxsize = 1758909

 if (this.values.name === undefined || !validatename.test(this.values.name)){

     this.names = !this.names
 }


 else {

   this.names = false
  
 }
 

 if (this.values.email === undefined || !validateemail.test(this.values.email)){

  this.emails = !this.emails
 }

 else {
 
  this.emails = false
 }

     
 if (this.values.mobile === undefined || !validatenumber.test(this.values.mobile) || va !== 10){

  this.numbers = !this.numbers
 }

 else {

  this.numbers = false
 }
 let a = new Date (this.values.date)
  
    
    let b = a.getFullYear() + 18;

    let c = new Date();

    let d = c.getFullYear();    
    

if (this.values.date === undefined || d < b){

    this.dates = !this.dates
}

else {

  this.dates = false
}

if (this.values.image === undefined || maxsize <this.size ){

  this.images = !this.images
}

else  {
  
  this.images = false
  
}

if (this.values.name !== undefined  && validatename.test(this.values.name) && validateemail.test(this.values.email) &&
validatenumber.test(this.values.mobile) && va === 10 && d > b &&
maxsize > this.size &&

this.values.email !== undefined&&
this.values.mobile !== undefined && 
this.values.date !== undefined 
){

  alert("Successfully Registered")
}

else {

  
}





}

events(event : Event){

  let f = event.target as HTMLInputElement

  if (f.files?.length){

    this.size = f.files[0].size
  }

}


}



