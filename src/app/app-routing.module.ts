import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditarComponent } from './components/editar/editar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'login',component:LoginComponent},
  {path:'sobre-nos',component:SobreNosComponent},

  {path:'editar/:id',component:EditarComponent},
  {path:'delete/:id',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
