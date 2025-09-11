import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { SuperUserComponent } from './user/super-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { TransactionComponent } from './transaction/transaction.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Dashboard
  { path: 'dashboard', component: DashboardComponent },

  // Machine Submenu
  { path: 'machine/create', component: MachineListComponent },
  { path: 'machine/list', component: MachineListComponent },

  // Other existing routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'super-user', component: SuperUserComponent },
  {path: 'transtaction', component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
