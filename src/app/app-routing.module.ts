import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPanacotasComponent } from './components/inicio-panacotas/inicio-panacotas.component';
import { SaboresComponent } from './components/sabores/sabores.component';
import { NosostrosComponent } from './components/nosostros/nosostros.component';
import { PideYaComponent } from './components/pide-ya/pide-ya.component';

const routes: Routes = [
  { path: 'panacotas', component: InicioPanacotasComponent },
  { path: 'sabores', component: SaboresComponent },
  { path: 'nosotros', component: NosostrosComponent },
  { path: 'pideYa', component: PideYaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
