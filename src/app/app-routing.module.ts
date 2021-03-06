import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { CPaiComponent } from './c-pai/c-pai.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import {NgForComponent} from './ng-for/ng-for.component';
import {NgClassComponent} from './ng-class/ng-class.component';
import {NgStyleComponent} from './ng-style/ng-style.component';
import {PipeComponent} from './pipe/pipe.component';
import {FormularioComponent} from './formulario/formulario.component';
import {FormularioModelComponent} from './formulario-model/formulario-model.component'
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'interpolation', component:InterpolationComponent},
  {path:'meusDados', component:MeusDadosComponent},
  {path:'twoWay', component:TwoWayComponent},
  {path:'inputProp', component:CPaiComponent},
  {path:'outputProp', component:CPaiComponent},
  {path:'ngIf', component:NgIfComponent},
  {path:'ngFor', component:NgForComponent},
  {path:'ngClass', component:NgClassComponent},
  {path:'ngStyle', component:NgStyleComponent},
  {path:'pipe', component:PipeComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'formModel', component:FormularioModelComponent},
  {path:'service', component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
