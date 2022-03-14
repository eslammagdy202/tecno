import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ChartCmComponent } from './chart-cm/chart-cm.component';
import { PdfComponent } from './pdf/pdf.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: 'footer', component: FooterComponent },
  { path:'ChartCm',component:ChartCmComponent},
  { path:'pdf',component:PdfComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
