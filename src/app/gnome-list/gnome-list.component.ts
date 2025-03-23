import { Component } from '@angular/core';
import { GnomeComponent } from '../gnome/gnome.component';

@Component({
  selector: 'app-gnome-list',
  templateUrl: './gnome-list.component.html',
  styleUrls: ['./gnome-list.component.css']
})
export class GnomeListComponent {
  public gnomes: GnomeComponent[] = [
    {'name': "Doc"}, {'name': 'Grumpy'}
  ];
}
