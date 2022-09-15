import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternFormComponent } from './intern/intern-form/intern-form.component';
import { InternListComponent } from './intern/intern-list/intern-list.component';
import { MentorFormComponent } from './mentor/mentor-form/mentor-form.component';
import { MentorListComponent } from './mentor/mentor-list/mentor-list.component';
import { MentorComponent } from './mentor/mentor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intern',
    pathMatch: 'full'
  },
  {
    path: 'intern',
    component: InternListComponent
  },
  {
    path: 'intern-form',
    component: InternFormComponent
  },
  // {
  //   path: 'intern-list',
  //   component: InternListComponent
  // },
  {
    path: 'mentor',
    component: MentorComponent
  },
  {
    path: 'mentor-list',
    component: MentorListComponent
  },
  {
    path: 'mentor-form',
    component: MentorFormComponent
  }

  // {
  //   path: '',
  //   redirectTo: 'user-list',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'user-list',
  //   component: UserListComponent
  // },
  // {
  //   path: 'user-list-two',
  //   component: UserListTwoComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'user-detail',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'user-detail',
  //       component: UserDetailComponent
  //     },
  //   ]
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
