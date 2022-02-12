
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CircleComponent } from './circle/circle.component';
import { FormInputComponent } from './form-input/form-input.component';
import { LogoComponent } from './logo/logo.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    CircleComponent,
    FormInputComponent,
    LogoComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
