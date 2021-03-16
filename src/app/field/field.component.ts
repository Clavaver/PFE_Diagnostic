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
      if(this.diagnostic != ""){
    this.diags.push(this.diagnostic)
    this.diagnostic = "";
      }
  }

  remove(index :number){
    if (confirm( "Êtes-vous sûr(e) de vouloir supprimer ce diagnostic ?")) {
      this.diags.splice(index,1)
      } else{
      }
  }

}