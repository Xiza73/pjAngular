import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BannerComponent } from './componentes/banner/banner.component';



const APP_ROUTES: Routes = [
    
        {path: 'home', component:HomeComponent},
        {path: 'banner', component: BannerComponent},
        {path: 'header', component:HeaderComponent},
        {path: 'footer', component:FooterComponent},
        {path: '**', pathMatch: 'full', redirectTo:'home'}
    ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
