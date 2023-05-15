import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {
  persona: persona = new persona("","","","");

  acercade:any;
  
  constructor(public datosPorfolio:PorfolioService){}
  
  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.acercade=data;
    });
    //this.personaService.getPersona().subscribe(data =>{this.persona=data;});
  }
}
