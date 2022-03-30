import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { HomeComponent } from './home/home.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { TwoWayComponent } from './two-way/two-way.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CInputFilhoComponent } from './c-input-filho/c-input-filho.component';
import { CPaiComponent } from './c-pai/c-pai.component';
import { OutputComponent } from './output/output.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioModelComponent } from './formulario-model/formulario-model.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    HomeComponent,
    MeusDadosComponent,
    TwoWayComponent,
    CInputFilhoComponent,
    CPaiComponent,
    OutputComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    PipeComponent,
    FormularioComponent,
    FormularioModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
