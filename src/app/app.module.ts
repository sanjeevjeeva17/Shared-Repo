import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent} from './navBar/navBar.component'; 
import { VideoComponent} from './videostuff/vid.component'; 
import { HeaderComponent} from './header/header.component'; 
import { FooterComponent} from './footer/footer.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VideoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
