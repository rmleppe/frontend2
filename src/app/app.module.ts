import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import {NavbarComponent} from  './components/navbar/navbar.component'
import { ContactoComponent } from './screens/contacto/contacto.component';
import { ProductsRopaComponent } from './screens/products/products-ropa/products-ropa.component';
import { ProductsZapateriaComponent } from './screens/products/products-zapateria/products-zapateria.component';
import { RegisterComponent } from './screens/register/register.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ContactoComponent,
    ProductsRopaComponent,
    ProductsZapateriaComponent,
    RegisterComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
