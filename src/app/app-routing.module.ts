import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CourseRivePage } from './templates/course-rive/course-rive.page';
import { RIVE_FOLDER, RiveModule } from 'ng-rive';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./drawer/drawer.module').then((m) => m.DrawerPageModule),
  // },
  {
    path: '',
    component: CourseRivePage
  },
  {
    path: 'hotel-booking',
    loadChildren: () =>
      import('./templates/hotel-booking/hotel-booking.module').then(
        (m) => m.HotelBookingPageModule
      ),
  },
  {
    path: 'course-rive',
    loadChildren: () =>
      import('./templates/course-rive/course-rive.module').then(
        (m) => m.CourseRivePageModule
      ),
  },
];

@NgModule({
  imports: [
    RiveModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule, RiveModule],
  providers: [
    {
      provide: RIVE_FOLDER,
      useValue: 'assets/course_rive/rive',
    },
  ],
})
export class AppRoutingModule {}
