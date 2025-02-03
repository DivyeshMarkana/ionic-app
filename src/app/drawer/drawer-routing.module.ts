import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawerPage } from './drawer.page';
import { CourseRivePage } from '../templates/course-rive/course-rive.page';
import { RIVE_FOLDER, RiveModule } from 'ng-rive';

const routes: Routes = [
  {
    path: 'menu',
    component: DrawerPage,
    children: [
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('./home/home.module').then((m) => m.HomePageModule),
      // },
      {
        path: 'home',
        component: CourseRivePage,
      },

  //       {
  //   path: '',
  //   component: CourseRivePage,
  // },
      {
        path: 'help',
        loadChildren: () =>
          import('./help/help.module').then((m) => m.HelpPageModule),
      },
      {
        path: 'feedback',
        loadChildren: () =>
          import('./feedback/feedback.module').then(
            (m) => m.FeedbackPageModule
          ),
      },
      {
        path: 'invite-friend',
        loadChildren: () =>
          import('./invite-friend/invite-friend.module').then(
            (m) => m.InviteFriendPageModule
          ),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RiveModule],
  exports: [RouterModule, RiveModule],
  providers: [
    {
      provide: RIVE_FOLDER,
      useValue: 'assets/course_rive/rive',
    },
  ],
})
export class DrawerPageRoutingModule {}
