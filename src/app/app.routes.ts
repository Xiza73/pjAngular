import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';


const APP_ROUTES: Routes = [
    
        {path: 'home', component:HomeComponent},
        {path: 'header', component:HeaderComponent},
        {path: 'footer', component:FooterComponent},
        {path: '**', pathMatch: 'full', redirectTo:'home'}
    ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
