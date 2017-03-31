import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController,Slides,Content,LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild(Slides) slides: Slides;
    @ViewChild(Content) content: Content;
    @ViewChild('searchGrid') searchGrid: ElementRef;
    constructor(
        public navCtrl: NavController,
        public loadingCtrl: LoadingController
    ) {
    }

    ionViewDidEnter() {
        this.slides.startAutoplay();
        this.content.enableScrollListener();
        this.presentLoadingDefault();
    }

    onPageScroll($event){
        let top = $event.scrollTop;
        if(top>=150){
            this.searchGrid.nativeElement.style.background = "rgba(244,94,59,1)";
        }else{
            this.searchGrid.nativeElement.style.background = "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.4))";
        }
    }


    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
            content: '努力加载中'
        });

        loading.present();

        setTimeout(() => {
            loading.dismiss();
        }, 2000);
    }

}
