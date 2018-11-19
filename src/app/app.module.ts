import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CartoonPage } from '../pages/cartoon/Cartoon';
import { doraemonPage } from '../pages/doraemon/doraemon';
import { pokemonPage } from '../pages/pokemon/pokemon';
import { doraemonPageModule } from '../pages/doraemon/doraemon.module';
import { digimonPage } from '../pages/digimon/digimon';
import { welcomePage } from '../pages/welcome/welcome';
import { developerPage } from '../pages/developer/developer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CartoonPage,
    doraemonPage,
    pokemonPage,
    digimonPage,
    welcomePage,
    developerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CartoonPage,
    doraemonPage,
    pokemonPage,
    digimonPage,
    welcomePage,
    developerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}