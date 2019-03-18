import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhyComponent } from './why/why.component';
import { AreasComponent } from './areas/areas.component';
import { FreeComponent } from './free/free.component';
import { AttorneysComponent } from './attorneys/attorneys.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    CounterComponent,
    PortfoliosComponent,
    NavbarComponent,
    WhyComponent,
    AreasComponent,
    FreeComponent,
    AttorneysComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
