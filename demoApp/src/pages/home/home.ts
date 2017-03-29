import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController,Slides,Content,Grid } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild(Slides) slides: Slides;
    @ViewChild(Content) content: Content;
    @ViewChild('searchGrid') searchGrid: ElementRef;
    constructor(public navCtrl: NavController) {

    }

    ionViewDidEnter() {
        this.slides.startAutoplay();
        this.content.enableScrollListener();
    }

    onPageScroll($event){
        let top = $event.scrollTop;
        if(top>=150){
            this.searchGrid.nativeElement.style.background = "rgba(255,101,30,1)";
        }else{
            this.searchGrid.nativeElement.style.background = "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.4))";
        }
    }

}
