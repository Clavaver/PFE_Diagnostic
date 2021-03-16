import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() diagnostic;
  diags :string [] = []


  constructor() { }

  ngOnInit() {
  }

  add(){
    this.diags.push(this.diagnostic)
    this.diagnostic = "";
  }

  remove(index :number){
    this.diags.splice(index,1)
    
  }


}