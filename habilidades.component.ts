import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  habilidadesListH:any;
  habilidadesListS:any;
  constructor(private datosPorfolio:PorfolioService){}
  
  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.habilidadesListH=data.habilidadesH;
      this.habilidadesListS=data.habilidadesS;
    });
  }
}
