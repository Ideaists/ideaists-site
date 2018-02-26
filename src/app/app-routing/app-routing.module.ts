import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
},
{
  path: 'about',
  component: AboutComponent,
},
{
  path: 'contact',
  component: ContactComponent,
}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
