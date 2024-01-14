import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUtilityPageRoutingModule } from './admin-utility-routing.module';

import { AdminUtilityPage } from './admin-utility.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUtilityPageRoutingModule
  ],
  declarations: [AdminUtilityPage]
})
export class AdminUtilityPageModule {}
