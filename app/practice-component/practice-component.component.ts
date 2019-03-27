import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-component',
  templateUrl: './practice-component.component.html',
  styleUrls: ['./practice-component.component.css']
})
export class PracticeComponentComponent {

  name:string;
  msg:String;

display():String{
  this.msg="Welcome to angular";
  return this.msg;
}

}
