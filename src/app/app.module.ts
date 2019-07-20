import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './pages/main/slider/slider.component';
import { RightSectionComponent } from './pages/main/right-section/right-section.component';
import { LeftSectionComponent } from './pages/main/left-section/left-section.component';
import { SectionDataService } from './pages/main/section-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    RightSectionComponent,
    LeftSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SectionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
