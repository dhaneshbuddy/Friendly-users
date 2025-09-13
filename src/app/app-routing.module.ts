import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { SuperUserComponent } from './user/super-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ReportsComponent } from './reports/reports.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportssuperComponent } from './reportssuper/reportssuper.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SuperhomeComponent } from './superhome/superhome.component';
import { SuperanalyticsComponent } from './superanalytics/superanalytics.component';
import { ManageuserlistComponent } from './manageuserlist/manageuserlist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // Dashboard
  { path: 'dashboard', component: DashboardComponent },

  // Machine
  { path: 'machine/create', component: MachineListComponent },
  { path: 'machine/list', component: MachineListComponent },

  // Auth
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // Admin + Children
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'manage-user', component: ManageUserComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  // Super User + Children
  {
    path: 'super-user',
    component: SuperUserComponent,
    children: [
      { path: 'superhome', component: SuperhomeComponent },
      { path: 'manageuserlist', component: ManageuserlistComponent },
      { path: 'reportssuper', component: ReportssuperComponent },
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'superanalytics', component: SuperanalyticsComponent },
      { path: '', redirectTo: 'superhome', pathMatch: 'full' }
    ]
  },

  // Transactions
  { path: 'transaction', component: TransactionComponent },

  // Optional: Wildcard redirect
  { path: '**', redirectTo: 'dashboard' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    useHash: true   // 👈 keeps same page on refresh
  })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }] // 👈 important
})
export class AppRoutingModule {}
