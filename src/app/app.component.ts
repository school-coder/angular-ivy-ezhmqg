import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  renderOverlay=false;

  show($event) {
    $event.preventDefault();
    this.renderOverlay = true;
  }

  hide($event) {
    $event.preventDefault();
    this.renderOverlay = false;
  }
}
