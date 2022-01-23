import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {



  public ht:number;
  public qte:number;
  public tva:number;
  public ttc:number;
  public pu:number;

  constructor() { }



  ngOnInit(): void {


  }
  calculer(){
    this.ht = this.pu  * this.qte;
    this.tva = this.ht *0.2;
    this.ttc=this.ht + this.tva;
  }

}
