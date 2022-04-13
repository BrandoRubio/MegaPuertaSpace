import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  
  estado1 = "Abierta"
  colorP1 = ""
  estado2 = "Abierta"
  colorP2 = ""
  estado3 = "Abierta"
  colorP3 = ""
  estado4 = "Abierta"
  colorP4 = ""
  
  ngOnInit(){
    if(this.estado1=="Abierta"){
      this.colorP1 = "success"
    }else{
      this.colorP1 = "danger"
    }
    if(this.estado2=="Abierta"){
      this.colorP2 = "success"
    }else{
      this.colorP3 = "danger"
    }
    if(this.estado3=="Abierta"){
      this.colorP3 = "success"
    }else{
      this.colorP4 = "danger"
    }
    if(this.estado4=="Abierta"){
      this.colorP4 = "success"
    }else{
      this.colorP1 = "danger"
    }
  }
}
