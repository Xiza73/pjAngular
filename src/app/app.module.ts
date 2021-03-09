import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas
import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

//Servicios
import { CargarScriptsService } from './services/cargar-scripts.service';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    CardsComponent,
    ContactanosComponent,
    NosotrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
