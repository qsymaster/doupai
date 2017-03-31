import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const PAGES = [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
];

@NgModule({
    declarations: [
        ...PAGES
    ],
    imports: [
        IonicModule.forRoot(MyApp,{
            backButtonText: '',
            iconMode: 'ios',
            modalEnter: 'modal-slide-in',
            modalLeave: 'modal-slide-out',
            tabsPlacement: 'bottom',
            pageTransition: 'ios',
            mode: 'ios',
            tabsHideOnSubPages:true
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        ...PAGES
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
    })
export class AppModule {}
