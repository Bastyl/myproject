import { Component, OnInit } from '@angular/core';
import { PizzaserviceService } from 'src/app/services/pizzaservice.service';

export interface pizzaFormat {
  id: string,
  nombrePersona: string,
  apellidoPersona: string,
  celular: string,
  direccion: string,
  nota: string,
  masa: string,
  proteina: string,
  salsa: string,
  agregados: string[],
  cocacola: number,
  sprite: number,
  cantidad: number,
  monto: number,
  tipo: string,
  fecha: string
}

@Component({
  selector: 'app-step2pizza',
  templateUrl: './step2pizza.component.html',
  styleUrls: ['./step2pizza.component.css']
})
export class Step2pizzaComponent implements OnInit {
panelOpenState = false;
boleta: pizzaFormat[] | undefined;

  constructor(private PizzaService: PizzaserviceService) { }

  ngOnInit(): void {
    this.PizzaService.getData().subscribe((data:any)=>{
      this.boleta = data;
      console.log(this.boleta,"Esto trae el servicio")
    },err =>{
      console.log("Error");
    })
  }

  deleteBoleta(id: string){
    this.PizzaService.delData(id).subscribe((data:any)=>{
      console.log(data,"Esto trae el servicio")
    },err =>{
      console.log(err,"Error");
    });
  }

}
