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
import { ListWorkersComponent } from './Admin/Wokers/list-workers/list-workers.component';
import { UpdateCategoryComponent } from './Admin/Category/update-category/update-category.component';
import { DashboardComponent } from './Woker/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent },
  { path: '', component: WhoAreYouComponent },
  { path: 'RegisterUser', component: RegisterAsUserComponent },
  { path: 'LoginUser', component: LoginAsUserComponent },
  { path: 'RegisterWorker', component: RegisterAsWorkerComponent },
  { path: 'LoginWorker', component: LoginAsWorkerComponent },
  { path: 'LoginAdmin', component: LoginAsAdminComponent },
  { path: 'user', component: UserDashboardComponent },
  { path: 'Categories', component: ListCategoriesComponent },
  { path: 'AddCategory', component: AddCategoryComponent },
  { path: 'Category/:id', component: ShowCategoryComponent },
  { path: 'UpdateCategory/:id', component: UpdateCategoryComponent },
  { path: 'Workers', component: ListWorkersComponent },

  { path: 'Worker', component: DashboardComponent } ,
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
