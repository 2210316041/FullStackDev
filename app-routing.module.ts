import { MagazineComponent } from './magazine/magazine.component';
import { FoolsComponent } from './fools/fools.component';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:'Home',component:HomeComponent},{path:'Videos',component:VideosComponent},{path:'Fools',component:FoolsComponent},{path:'Magazine',component:MagazineComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
