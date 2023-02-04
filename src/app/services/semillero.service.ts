import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SemilleroService {
  constructor() {}

  getImages() {
    return fetch('https://apisemillero.onrender.com').then((response) =>
      response.json()
    );
  }
}
