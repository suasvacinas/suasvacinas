import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SuasVacinasAppComponent } from './app.component';
import { ExemploCrudPage } from '../ts/exemplo-crud/exemplo-crud';
import { ListPage } from '../ts/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseModule } from "../ts/firebase/firebase.module";
import { FirebaseProvider } from '../ts/firebase/firebase';
import { HomeComponent } from "../ts/home/home.component";
import {VacinasNavbarComponent} from "../ts/header-footer/vacinas-navbar.component";
import {VacinasLogInComponent} from "../ts/login/vacinas-login.component";
import {AutenticacaoService} from "../ts/firebase/autenticacao.service";
import {OpcoesComponent} from "../ts/opcoes/opcoes";
import {OpcaoComponent} from "../ts/opcoes/opcao.component";
import {DosesComponent} from "../ts/doses/doses.component";
import {DescricaoVacinaComponent} from "../ts/detalhes/descricao-vacina.component";
import {LoadingDropComponent} from "../ts/header-footer/vacinas-loading.component";
import {VacinasFooterComponent} from "../ts/header-footer/vacinas-footer.component";
import {VacinasExtraSUSComponent} from "../ts/extra-sus/extra-sus";
import {WelderComponent} from "../ts/welder/welder.component";
import {TourComponent} from "../ts/tour/tour.component";
import {VacinasLogInComEmailComponent} from "../ts/login/vacinas-login-email.component";
import {ContatoComponent} from "../ts/contato/contato.component";
import {AlergiaComponent} from "../ts/alergia/alergia";
import {VacinasMenuComponent} from "../ts/menu/menu.component";
import {CadernetaComponent} from "../ts/caderneta/caderneta.component";
import {TourHomeComponent} from "../ts/tour/tour-home.component";
import {CadernetaNovaComponent} from "../ts/caderneta/caderneta-nova.component";
import {CadernetaRepository} from "../ts/caderneta/caderneta.repository";
import {DoseComponent} from "../ts/doses/dose.component";
import {CadernetaService} from "../ts/caderneta/caderneta.service";
import {MarcarVacinaModalComponent} from "../ts/doses/dose-data.modal";

@NgModule({
  declarations: [
    VacinasMenuComponent,
    SuasVacinasAppComponent,
    HomeComponent,
    CadernetaComponent,
    CadernetaNovaComponent,
    ExemploCrudPage,
    ListPage,
    OpcaoComponent,
    OpcoesComponent,
    WelderComponent,
    DosesComponent,
    DoseComponent,
    DescricaoVacinaComponent,
    VacinasNavbarComponent,
    VacinasFooterComponent,
    VacinasLogInComponent,
    VacinasLogInComEmailComponent,
    LoadingDropComponent,
    VacinasExtraSUSComponent,
    ContatoComponent,
    AlergiaComponent,
    TourComponent,
    TourHomeComponent,
    MarcarVacinaModalComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule,
    IonicModule.forRoot(SuasVacinasAppComponent,{
      backButtonText: 'Voltar',
      iconMode: 'ios',
      mode: 'ios',
      monthNames: ['janeiro', 'fevereiro', 'mar\u00e7o', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
      monthShortNames: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
      dayNames: ['domingo', 'segunda-feira', 'ter\u00e7a-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 's\u00e1bado', 'domingo'],
      dayShortNames: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 's\u00e1b', 'dom']
    }, {
      links: [
        { component: HomeComponent, name: 'Home', segment: 'home' },
        { component: ContatoComponent, name: 'Contato', segment: 'contato' }
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SuasVacinasAppComponent,
    HomeComponent,
    CadernetaNovaComponent,
    ExemploCrudPage,
    ListPage,
    DescricaoVacinaComponent,
    VacinasLogInComponent,
    VacinasLogInComEmailComponent,
    OpcaoComponent,
    OpcoesComponent,
    WelderComponent,
    TourComponent,
    DosesComponent,
    VacinasExtraSUSComponent,
    ContatoComponent,
    AlergiaComponent,
    MarcarVacinaModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    CadernetaRepository,
    AutenticacaoService,
    CadernetaService
  ]
})
export class AppModule {}
