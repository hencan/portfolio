import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Views Routes
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { TutorialsComponent } from './views/tutorials/tutorials.component';
import { TutorialsReadComponent } from './views/tutorials-read/tutorials-read.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogReadComponent } from './views/blog-read/blog-read.component';
import { InfoComponent } from './views/info/info.component';
// Admin Routes
import { AdminComponent } from './views/admin/admin/admin.component';
import { ProfileComponent } from './views/admin/profile/profile.component';
import { UsersAdminComponent } from './views/admin/users-admin/users-admin.component';
import { UsersAdminCreateComponent } from './views/admin/users-admin-create/users-admin-create.component';
import { UsersAdminReadComponent } from './views/admin/users-admin-read/users-admin-read.component';
import { UsersAdminUpdateComponent } from './views/admin/users-admin-update/users-admin-update.component';
import { UsersAdminDeleteComponent } from './views/admin/users-admin-delete/users-admin-delete.component';
import { ProjectsAdminComponent } from './views/admin/projects-admin/projects-admin.component';
import { ProjectsAdminCreateComponent } from './views/admin/projects-admin-create/projects-admin-create.component';
import { ProjectsAdminReadComponent } from './views/admin/projects-admin-read/projects-admin-read.component';
import { ProjectsAdminUpdateComponent } from './views/admin/projects-admin-update/projects-admin-update.component';
import { ProjectsAdminDeleteComponent } from './views/admin/projects-admin-delete/projects-admin-delete.component';
import { TutorialsAdminComponent } from './views/admin/tutorials-admin/tutorials-admin.component';
import { TutorialsAdminCreateComponent } from './views/admin/tutorials-admin-create/tutorials-admin-create.component';
import { TutorialsAdminReadComponent } from './views/admin/tutorials-admin-read/tutorials-admin-read.component';
import { TutorialsAdminUpdateComponent } from './views/admin/tutorials-admin-update/tutorials-admin-update.component';
import { TutorialsAdminDeleteComponent } from './views/admin/tutorials-admin-delete/tutorials-admin-delete.component';
import { BlogAdminComponent } from './views/admin/blog-admin/blog-admin.component';
import { BlogAdminCreateComponent } from './views/admin/blog-admin-create/blog-admin-create.component';
import { BlogAdminReadComponent } from './views/admin/blog-admin-read/blog-admin-read.component';
import { BlogAdminUpdateComponent } from './views/admin/blog-admin-update/blog-admin-update.component';
import { BlogAdminDeleteComponent } from './views/admin/blog-admin-delete/blog-admin-delete.component';
import { ConfigComponent } from './views/admin/config/config.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
    {
    path: "tutorials",
    component: TutorialsComponent
  },
  {
    path: "tutorials/read",
    component: TutorialsReadComponent
  },
  {
    path: "articles",
    component: BlogComponent
  },
  {
    path: "articles/read",
    component: BlogReadComponent
  },
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "admin/profile",
    component: ProfileComponent
  },
  {
    path: "admin/users",
    component: UsersAdminComponent
  },
  {
    path: "admin/users/create",
    component: UsersAdminCreateComponent
  },
  {
    path: "admin/users/read",
    component: UsersAdminReadComponent
  },
  {
    path: "admin/users/update",
    component: UsersAdminUpdateComponent
  },
  {
    path: "admin/users/delete",
    component: UsersAdminDeleteComponent
  },
  {
    path: "admin/projects",
    component: ProjectsAdminComponent
  },
  {
    path: "admin/projects/create",
    component: ProjectsAdminCreateComponent
  },
  {
    path: "admin/projects/read",
    component: ProjectsAdminReadComponent
  },
  {
    path: "admin/projects/update",
    component: ProjectsAdminUpdateComponent
  },
  {
    path: "admin/projects/delete",
    component: ProjectsAdminDeleteComponent
  },
  {
    path: "admin/tutorials",
    component: TutorialsAdminComponent
  },
  {
    path: "admin/tutorials/create",
    component: TutorialsAdminCreateComponent
  },
  {
    path: "admin/tutorials/read",
    component: TutorialsAdminReadComponent
  },
  {
    path: "admin/tutorials/update",
    component: TutorialsAdminUpdateComponent
  },
  {
    path: "admin/tutorials/delete",
    component: TutorialsAdminDeleteComponent
  },
  {
    path: "admin/articles",
    component: BlogAdminComponent
  },
  {
    path: "admin/articles/create",
    component: BlogAdminCreateComponent
  },
  {
    path: "admin/articles/read",
    component: BlogAdminReadComponent
  },
  {
    path: "admin/articles/update",
    component: BlogAdminUpdateComponent
  },
  {
    path: "admin/articles/delete",
    component: BlogAdminDeleteComponent
  },
  {
    path: "admin/config",
    component: ConfigComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
