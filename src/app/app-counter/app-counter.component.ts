import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.css']
})
export class AppCounterComponent implements OnInit {
  ngOnInit(): void {
    this.count = 0;
  };

  protected count: number = 0;

  protected changeCount (pos: boolean): void {
    pos ? this.count++ : this.count--;
  }

}
