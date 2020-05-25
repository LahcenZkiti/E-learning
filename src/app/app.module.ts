import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponent } from './participant/list/list.component';
import { AddComponent } from './participant/add/add.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UpdateComponent } from './participant/update/update.component';
import { AddFComponent } from './profile/add-f/add-f.component';
import { ListFComponent } from './profile/list-f/list-f.component';
import { EditFComponent } from './profile/edit-f/edit-f.component';
import { FluxActiviteComponent } from './travaux-et-devoirs/flux-activite/flux-activite.component';
import { AjoutActiviteComponent } from './travaux-et-devoirs/ajout-activite/ajout-activite.component';
import { TravauxPipe } from './pipes/travaux.pipe';
import { EditFluxComponent } from './travaux-et-devoirs/edit-flux/edit-flux.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListComponent,
    AddComponent,
    UpdateComponent,
    AddFComponent,
    ListFComponent,
    EditFComponent,
    FluxActiviteComponent,
    AjoutActiviteComponent,
    TravauxPipe,
    EditFluxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
