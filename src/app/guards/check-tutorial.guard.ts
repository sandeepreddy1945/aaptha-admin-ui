import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { from, map, of, tap } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

export const checkTutorialGuard = () => {
  const storage = inject(Storage);
  const router = inject(Router);

  // return from(storage.get('aaptha_admin_did_tutorial')).pipe(
  //   tap((didTutorial) => {
  //     if (didTutorial === true) {
  //       router.navigate(['/app', 'tabs', 'schedule']);
  //     }
  //   }),
  //   map((didTutorial) => !didTutorial)
  // );
  return of(true).pipe(tap(() => router.navigate(['/app', 'tabs', 'home'])));
};
