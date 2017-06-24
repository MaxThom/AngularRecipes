import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuOptions} from '../shared/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('sendOption') sendOption = new EventEmitter<{currentOption: MenuOptions}>();

  constructor() { }

  ngOnInit() {
    this.sendOption.emit({currentOption: MenuOptions.Home});
  }

  ChangePage(newPage: MenuOptions): void {
    this.sendOption.emit({currentOption: newPage});

  }

}

