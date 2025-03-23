import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gnome',
  templateUrl: './gnome.component.html',
  styleUrls: ['./gnome.component.css']
})
export class GnomeComponent {
  @Input() public name!: string;
}
