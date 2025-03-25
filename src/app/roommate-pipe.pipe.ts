import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roommatePipe'
})
export class RoommatePipePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case "Егор": return `${value} (ночной геймер)`;
      case "Артём": return `${value} (тиктокер)`
      default: return `${value} (просто чел)`;
    }
  }

}
