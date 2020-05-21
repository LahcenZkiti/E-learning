import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './participant/add/add.component';
import { ListComponent } from './participant/list/list.component';
import { UpdateComponent } from './participant/update/update.component';


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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
