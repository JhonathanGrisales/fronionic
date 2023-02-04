import { Component } from '@angular/core';
import { SemilleroService } from '../services/semillero.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images = undefined;

  constructor(private semilleroService: SemilleroService) {}

  ionViewDidEnter() {
    this.semilleroService.getImages().then((newImages) => {

      this.images = newImages.images
    });

  }
}
