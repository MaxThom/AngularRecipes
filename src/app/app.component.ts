import {Component, OnInit} from '@angular/core';
import {MenuOptions} from './shared/enums';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuShowed: MenuOptions;

  constructor() { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDhrLZzcGsnPh7d5wwdLirghNqn9pRNXa4",
      authDomain: "ng-recipe-book-fe56b.firebaseapp.com"
    });
  }

  ChangePage(menu: {currentOption: MenuOptions}): void {
    this.menuShowed = menu.currentOption;
  }

}
