import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroeComponent } from './Components/heroe/heroe.component';

const app_routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
