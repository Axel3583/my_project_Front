import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsulsPageComponent } from './capsuls-page/capsuls-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'launch', component: LaunchPageComponent},
  {path: 'capsules', component: CapsulsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
