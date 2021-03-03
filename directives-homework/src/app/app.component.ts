import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  deleteHandler(id): void {
    console.log(`Element deleted: id => ${id}`);
  }
}
