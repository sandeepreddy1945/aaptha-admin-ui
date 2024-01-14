import { Component, OnInit } from '@angular/core';
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeSharp,
  librarySharp,
  personSharp,
  searchSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-bottom-tab-bar',
  templateUrl: './bottom-tab-bar.component.html',
  styleUrls: ['./bottom-tab-bar.component.scss'],
  // standalone: true,
  // imports: [IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel],
})
export class BottomTabBarComponent implements OnInit {
  constructor() {
    addIcons({ homeSharp, personSharp, librarySharp, searchSharp });
  }

  ngOnInit() {}
}
