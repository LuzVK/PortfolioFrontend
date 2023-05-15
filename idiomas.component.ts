import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent {
  idiomasList:any;
  idiProgList:any;
  constructor(private datosPorfolio:PorfolioService){}
  
  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.idiomasList=data.idiomas;
      this.idiProgList=data.idiomasProg;
    });
  }
}
