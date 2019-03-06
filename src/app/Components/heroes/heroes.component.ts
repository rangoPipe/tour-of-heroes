import { Component } from '@angular/core';
import { Heroe, DefaultHeroes } from '../../Classes/heroe';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})


export class HeroesComponent{

  Heroes:Heroe[] = DefaultHeroes;
  prueba:boolean = false;
  constructor(
    private _router:Router)
  {

  }

  Editar(personaje:Heroe){
    try{
       this._router.navigate(['/heroes', personaje.id]);
    }catch(e){
      console.log(e)
    }
  }

}
