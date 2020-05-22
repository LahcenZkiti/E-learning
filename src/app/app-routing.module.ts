import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './participant/add/add.component';
import { ListComponent } from './participant/list/list.component';
import { UpdateComponent } from './participant/update/update.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [{
  path: 'participant/add',
  component: AddComponent
},
{
  path: 'participant/list',
  component: ListComponent
},
{
  path: 'edit/etudiants/:id',
  component: UpdateComponent
},
{
  path:'profil/add',
  component: ProfilComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
