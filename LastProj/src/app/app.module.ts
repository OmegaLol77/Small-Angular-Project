import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorComponent } from './Components/selector/selector.component';
import { TextAreaComponent } from './Components/text-area/text-area.component';
import { AppCardComponent } from './Components/app-card/app-card.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddCardComponent } from './Pages/add-card/add-card.component';
import { UpdateCardComponent } from './Pages/update-card/update-card.component';
import { DeleteCardComponent } from './Pages/delete-card/delete-card.component';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    TextAreaComponent,
    AppCardComponent,
    MainPageComponent,
    AddCardComponent,
    UpdateCardComponent,
    DeleteCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatGridListModule,
    MatSliderModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
