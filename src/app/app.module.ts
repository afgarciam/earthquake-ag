import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuakeListComponent } from './quake-list/quake-list.component';
import { QuakeService } from "./_services/quake.service";
import { QuakeDetailComponent } from './quake-detail/quake-detail.component';
import { RouterModule, Routes } from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import { AboutComponent } from './about/about.component';

const appRoutes =[
  {path:'', component:QuakeListComponent},
  {path:'detail/:id', component: QuakeDetailComponent},
  {path:'about', component:AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuakeListComponent,
    QuakeDetailComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_0kD1TBwfLK0xxZ4NodOYbK_-kqUfF8Q'
    })
  ],
  providers: [QuakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
