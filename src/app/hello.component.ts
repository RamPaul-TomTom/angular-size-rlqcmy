import { Component, Input } from '@angular/core';
import { ResizeService } from './size-detector/resize.service';
import { SCREEN_SIZE } from './size-detector/screen-size.enum';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'hello',
  template: ``,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  size: SCREEN_SIZE;

  constructor(private resizeSvc: ResizeService) {
    this.resizeSvc.onResize$.pipe(delay(0)).subscribe((x) => {
      //this.size = x;
      console.log('size is = ' + x);
    });
  }
}
