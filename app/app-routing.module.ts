import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  
  // Default init
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  /*
  { path: '**', 
    component: NotFoundComponent
  }
  */
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
