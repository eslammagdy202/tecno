import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';
const routes: Routes = [
{ path:'', component :HomeComponent },
{ path:'home', component :HomeComponent },
{ path:'about', component :AboutComponent },
{ path:'footer', component :FooterComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
