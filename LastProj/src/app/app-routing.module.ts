import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { AddCardComponent } from './Pages/add-card/add-card.component';
import { DeleteCardComponent } from './Pages/delete-card/delete-card.component';
import { UpdateCardComponent } from './Pages/update-card/update-card.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'Pages/main-page',
  pathMatch: 'full'
},
{
  path: 'Pages/main-page',
  component: MainPageComponent
},
{
  path: 'Pages/delete-card',
  component: DeleteCardComponent
},
{
  path: 'Pages/add-card',
  component: AddCardComponent
},
{
  path: 'Pages/update-card',
  component: UpdateCardComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
