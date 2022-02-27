import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';


const routes: Routes = [{
  component: UsersComponent,
  path: ''
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class UsersModule {}
