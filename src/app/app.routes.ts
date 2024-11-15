import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactPage } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContactPage },
];
