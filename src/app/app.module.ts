import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { DataEffects } from './store/data.effects';
import { DataReducer } from './store/data.reducer';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({ employeeDetails:DataReducer}),
    EffectsModule.forRoot([DataEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
