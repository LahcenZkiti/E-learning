import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './participant/add/add.component';
import { ListComponent } from './participant/list/list.component';
import { UpdateComponent } from './participant/update/update.component';
import { ListFComponent } from './profile/list-f/list-f.component';
import { AddFComponent } from './profile/add-f/add-f.component';
import { EditFComponent } from './profile/edit-f/edit-f.component';


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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
