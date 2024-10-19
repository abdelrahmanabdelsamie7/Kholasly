import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Admin/shared/nav/nav.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { WhoAreYouComponent } from './Shared/who-are-you/who-are-you.component';
import { RegisterAsUserComponent } from './Shared/register-as-user/register-as-user.component';
import { RegisterAsWorkerComponent } from './Shared/register-as-worker/register-as-worker.component';
import { LoginAsUserComponent } from './Shared/login-as-user/login-as-user.component';
import { LoginAsWorkerComponent } from './Shared/login-as-worker/login-as-worker.component';
import { LoginAsAdminComponent } from './Shared/login-as-admin/login-as-admin.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { UserNavComponent } from './User/shared/user-nav/user-nav.component';
import { ListCategoriesComponent } from './Admin/Category/list-categories/list-categories.component';
import { AddCategoryComponent } from './Admin/Category/add-category/add-category.component';
import { ShowCategoryComponent } from './Admin/Category/show-category/show-category.component';
import { UpdateCategoryComponent } from './Admin/Category/update-category/update-category.component';
import { DashboardComponent } from './Woker/dashboard/dashboard.component';
import { WorkerNavComponent } from './Woker/shared/worker-nav/worker-nav.component';
import { AddWorkerComponent } from './Admin/Workers/add-worker/add-worker.component';
import { UpdateWorkerComponent } from './Admin/Workers/update-worker/update-worker.component';
import { ShowWorkerComponent } from './Admin/Workers/show-worker/show-worker.component';
import { AllWorkersComponent } from './Admin/Workers/all-workers/all-workers.component';
import { AvaliableWorkersComponent } from './User/Workers/avaliable-workers/avaliable-workers.component';
import { AvaliableWorkerComponent } from './User/Workers/avaliable-worker/avaliable-worker.component';
import { AllOrdersComponent } from './User/Orders/all-orders/all-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminDashboardComponent,
    WhoAreYouComponent,
    RegisterAsUserComponent,
    RegisterAsWorkerComponent,
    LoginAsUserComponent,
    LoginAsWorkerComponent,
    LoginAsAdminComponent,
    UserDashboardComponent,
    UserNavComponent,
    ListCategoriesComponent,
    AddCategoryComponent,
    ShowCategoryComponent,
    UpdateCategoryComponent,
    DashboardComponent,
    WorkerNavComponent,
    AddWorkerComponent,
    UpdateWorkerComponent,
    ShowWorkerComponent,
    AllWorkersComponent,
    AvaliableWorkersComponent,
    AvaliableWorkerComponent,
    AllOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
