import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import {ReactiveFormsModule} from '@angular/forms';
import { KontaktiComponent } from './components/kontakti/kontakti.component';

const appRoutes:Routes = [
  {path:'', component:CarComponent},
  {path:'abaut', component:KontaktiComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    KontaktiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
