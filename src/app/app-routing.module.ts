import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { InsertComponent } from './insert/insert.component';

const routes: Routes = [
  {path:"",component: GetAllComponent},
  {path:"add", component:InsertComponent},
  {path:"edit/:id", component:InsertComponent},
  {path:":id", component:GetByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
