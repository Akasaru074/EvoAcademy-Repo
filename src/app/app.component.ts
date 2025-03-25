import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blabla';

  records = [
    {'recordDate': new Date(2018, 3, 24)},
    {'recordDate': new Date(2019, 8, 6)},
    {'recordDate': new Date(2023, 1, 18)},
    {'recordDate': new Date(2025, 1, 3)},
  ];

}
