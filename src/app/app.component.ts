import { Component } from '@angular/core';
import {MenuOptions} from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuShowed: MenuOptions;

  ChangePage(menu: {currentOption: MenuOptions}): void {
    this.menuShowed = menu.currentOption;
  }

}
