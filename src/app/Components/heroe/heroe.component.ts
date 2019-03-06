import { Component } from '@angular/core';
import { Heroe } from '../../Classes/heroe';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})



export class HeroeComponent {

personaje:Heroe = {
  id : 1,
  nombre : "Spiderman",
  descripcion : "Un gran poder, conlleva una gran responsabilidad"
}

  constructor() {

  }
}
