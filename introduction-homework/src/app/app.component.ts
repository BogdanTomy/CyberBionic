import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Lesson 1: Introduction';

  items = [
    'Hello World',
    'Привет Мир',
    'Привіт Світ',
    'Hola Mundo',
    'Bonjour le monde',
    'Hallo Welt',
    'Ciao mondo',
    'Witaj świecie',
    'Hej världen',
    'Pozdravljen, svet',
    'Прывітанне Сусвет'
  ];
}
