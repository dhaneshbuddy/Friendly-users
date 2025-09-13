import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { SuperUserComponent } from './user/super-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Angular Material components

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { TransactionComponent } from './transaction/transaction.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';   // 👈 Add this
import { MatOptionModule } from '@angular/material/core';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportssuperComponent } from './reportssuper/reportssuper.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SuperhomeComponent } from './superhome/superhome.component';
import { SuperanalyticsComponent } from './superanalytics/superanalytics.component';
import { ManageuserlistComponent } from './manageuserlist/manageuserlist.component';     // 👈 Add this

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    SuperUserComponent,
    DashboardComponent,
    MachineListComponent,
    TransactionComponent,
    ManageUserComponent,
    ReportsComponent,
    HomeComponent,
    AnalyticsComponent,
    //HomeeComponent,
    //SupermanageMachineComponent,
    ReportssuperComponent,
    ManageUsersComponent,
    SuperhomeComponent,
    SuperanalyticsComponent,
    ManageuserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,      // ✅ Added
    BrowserAnimationsModule,  // ✅ Needed for Angular Material
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatMenuModule, 
    MatTableModule,
    MatPaginatorModule,
     MatSelectModule, 
    MatOptionModule         // ✅ All Material components here
  ],
    
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    
    MatTableModule
  ]
})
export class AppModule {}
