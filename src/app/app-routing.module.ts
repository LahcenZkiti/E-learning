import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './participant/add/add.component';
import { ListComponent } from './participant/list/list.component';
import { UpdateComponent } from './participant/update/update.component';
import { ListFComponent } from './profile/list-f/list-f.component';
import { AddFComponent } from './profile/add-f/add-f.component';
import { EditFComponent } from './profile/edit-f/edit-f.component';
import { FluxActiviteComponent } from './travaux-et-devoirs/flux-activite/flux-activite.component';
import { AjoutActiviteComponent } from './travaux-et-devoirs/ajout-activite/ajout-activite.component';
import { EditFluxComponent } from './travaux-et-devoirs/edit-flux/edit-flux.component';


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
  path:'profile',
  component: ListFComponent
},
{
  path:'profile/add',
  component:AddFComponent
},
{
  path:'profile/edit/:id',
  component: EditFComponent
},
{
  path:'cours',
  component:FluxActiviteComponent
},
{
  path:'cours/add',
  component: AjoutActiviteComponent
},
{
  path: 'cours/edit/:id',
  component: EditFluxComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
