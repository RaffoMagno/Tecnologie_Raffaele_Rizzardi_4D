import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupereroiComponent } from './supereroi/supereroi.component';
import { SupercattiviComponent } from './supercattivi/supercattivi.component';

const routes: Routes = [
  { path: 'supereroi', component: SupereroiComponent },
  { path: 'supercattivi', component: SupercattiviComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
