import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { filter } from 'rxjs';
import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

interface AppPages {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  dark: boolean = false;
  loggedIn: boolean = true;
  public appPages: AppPages[] = [
    { title: 'Home', url: '/app/tabs/home', icon: 'home' },
    { title: 'Profile', url: '/app/tabs/profile', icon: 'person' },
    { title: 'Records', url: '/app/tabs/records', icon: 'server' },
    { title: 'Reports', url: '/app/tabs/reports', icon: 'pie-chart' },
  ];
  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    await this.storage.create();
    // this.checkLoginStatus();
    // this.listenForLoginEvents();

    this.swUpdate.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe(async (res) => {
        const toast = await this.toastCtrl.create({
          message: 'Update available!',
          position: 'bottom',
          buttons: [
            {
              role: 'cancel',
              text: 'Reload',
            },
          ],
        });

        await toast.present();

        toast
          .onDidDismiss()
          .then(() => this.swUpdate.activateUpdate())
          .then(() => window.location.reload());
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        StatusBar.hide();
        SplashScreen.hide();
      }
    });
  }

  logout() {
    // this.userData.logout().then(() => {
    //   return this.router.navigateByUrl('/app/tabs/schedule');
    // });
    console.log('Logout action performed');
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('aaptha_admin_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
