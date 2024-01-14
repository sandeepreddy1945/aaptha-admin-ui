import { Component, OnInit, Input } from '@angular/core';
import {
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonIcon,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { womanSharp, manSharp, transgenderSharp } from 'ionicons/icons';
import { PersonCardDetails } from '../../model/person-details';
import { RefresherEventDetail } from '@ionic/angular';
import { IonRefresherCustomEvent } from '@ionic/core';
import { TitleCasePipe } from '@angular/common';
import { Gender } from 'src/app/enums/generic-enums';
import { CategoryType } from '../../enums/generic-enums';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonIcon,
    TitleCasePipe,
    IonThumbnail,
  ],
})
export class PersonCardComponent implements OnInit {
  @Input({ required: true }) personCardDetails: PersonCardDetails[] = [];

  constructor() {}

  ngOnInit() {
    addIcons({ manSharp, womanSharp, transgenderSharp });
  }

  onPersonCardClick(details: PersonCardDetails) {
    console.log(details);
  }

  handleRefresh(event: IonRefresherCustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      console.log('Refresh Event Triggered');
      event.target.complete();
    }, 2000);
  }

  getIconName(gender: Gender) {
    if (Gender.MALE === gender) {
      return 'man-sharp';
    } else if (Gender.FEMALE === gender) {
      return 'woman-sharp';
    } else {
      return 'transgender-sharp';
    }
  }

  getBase64Image(image: string) {
    return image;
  }

  getPersonCategoryType(categoryType: CategoryType) {
    return CategoryType[categoryType];
  }
}
