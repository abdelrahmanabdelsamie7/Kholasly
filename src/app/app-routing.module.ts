import { AddCategoryComponent } from './Admin/Category/add-category/add-category.component';
import { LoginAsUserComponent } from './Shared/login-as-user/login-as-user.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoAreYouComponent } from './Shared/who-are-you/who-are-you.component';
import { RegisterAsUserComponent } from './Shared/register-as-user/register-as-user.component';
import { RegisterAsWorkerComponent } from './Shared/register-as-worker/register-as-worker.component';
import { LoginAsAdminComponent } from './Shared/login-as-admin/login-as-admin.component';
import { LoginAsWorkerComponent } from './Shared/login-as-worker/login-as-worker.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { ListCategoriesComponent } from './Admin/Category/list-categories/list-categories.component';
import { ShowCategoryComponent } from './Admin/Category/show-category/show-category.component';
import { UpdateCategoryComponent } from './Admin/Category/update-category/update-category.component';
import { DashboardComponent } from './Woker/dashboard/dashboard.component';
import { ShowWorkerComponent } from './Admin/Workers/show-worker/show-worker.component';
import { AllWorkersComponent } from './Admin/Workers/all-workers/all-workers.component';
import { UpdateWorkerComponent } from './Admin/Workers/update-worker/update-worker.component';
import { AddWorkerComponent } from './Admin/Workers/add-worker/add-worker.component';
import { AvaliableWorkersComponent } from './User/Workers/avaliable-workers/avaliable-workers.component';
import { AvaliableWorkerComponent } from './User/Workers/avaliable-worker/avaliable-worker.component';

const routes: Routes = [
  { path: '', component: WhoAreYouComponent },
  // User Register & Login
  { path: 'RegisterUser', component: RegisterAsUserComponent },
  { path: 'LoginUser', component: LoginAsUserComponent },
  { path: 'user', component: UserDashboardComponent },
  // Worker Refister & Login
  { path: 'RegisterWorker', component: RegisterAsWorkerComponent },
  { path: 'LoginWorker', component: LoginAsWorkerComponent },
  { path: 'workerDashboard', component: DashboardComponent },
  // Admin Login
  { path: 'LoginAdmin', component: LoginAsAdminComponent },
  { path: 'admin', component: AdminDashboardComponent },
  // Categories Routing
  { path: 'Categories', component: ListCategoriesComponent },
  { path: 'AddCategory', component: AddCategoryComponent },
  { path: 'Category/:id', component: ShowCategoryComponent },
  { path: 'UpdateCategory/:id', component: UpdateCategoryComponent },
  // Workers Routing
  { path: 'Workers', component: AllWorkersComponent },
  { path: 'Worker/:id', component: ShowWorkerComponent },
  { path: 'AddWorker', component: AddWorkerComponent },
  { path: 'UpdateWorker/:id', component: UpdateWorkerComponent },
  { path: 'Avaliable_Workers', component: AvaliableWorkersComponent },
  { path: 'Avaliable_Worker/:id', component: AvaliableWorkerComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
