import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Navegação
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogReadComponent } from './views/blog-read/blog-read.component';
import { FilesComponent } from './views/files/files.component';
import { MembersComponent } from './views/members/members.component';
import { WidgetBlogComponent } from './views/widget-blog/widget-blog.component';
import { WidgetProjectsComponent } from './views/widget-projects/widget-projects.component';
import { AnimeIconsComponent } from './views/anime/anime-icons/anime-icons.component';


//Admin Pages
import { AdminComponent } from './views/admin/admin/admin.component';
import { UsersAdminComponent } from './views/admin/users-admin/users-admin.component';
import { UsersAdminCreateComponent } from './views/admin/users-admin-create/users-admin-create.component';
import { UsersAdminReadComponent } from './views/admin/users-admin-read/users-admin-read.component';
import { UsersAdminUpdateComponent } from './views/admin/users-admin-update/users-admin-update.component';
import { UsersAdminDeleteComponent } from './views/admin/users-admin-delete/users-admin-delete.component';
import { BlogAdminComponent } from './views/admin/blog-admin/blog-admin.component';
import { BlogAdminCreateComponent } from './views/admin/blog-admin-create/blog-admin-create.component';
import { BlogAdminReadComponent } from './views/admin/blog-admin-read/blog-admin-read.component';
import { BlogAdminUpdateComponent } from './views/admin/blog-admin-update/blog-admin-update.component';
import { BlogAdminDeleteComponent } from './views/admin/blog-admin-delete/blog-admin-delete.component';
import { ProjectsAdminComponent } from './views/admin/projects-admin/projects-admin.component';
import { ProjectsAdminCreateComponent } from './views/admin/projects-admin-create/projects-admin-create.component';
import { ProjectsAdminReadComponent } from './views/admin/projects-admin-read/projects-admin-read.component';
import { ProjectsAdminUpdateComponent } from './views/admin/projects-admin-update/projects-admin-update.component';
import { ProjectsAdminDeleteComponent } from './views/admin/projects-admin-delete/projects-admin-delete.component';
import { ProfileComponent } from './views/admin/profile/profile.component';
import { ConfigComponent } from './views/admin/config/config.component';

//Funcionalidades
import { RouterModule } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';

// Imports para funcionar os formulários Angular/Material
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Imports para funcionar os tabelas Angular/Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'

//Funcionalidade para CRUD e Import de JSON
import { HttpClientModule } from '@angular/common/http';


// Image Cropper
import {ImageCropperModule} from 'ngx-image-cropper';

// Import {FileSaverModule} from 'ngx-filesaver'
import {FileSaverModule} from 'ngx-filesaver'

// Import Angular Editor
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BackgroundComponent } from './views/anime/background/background.component';
import { InfoComponent } from './views/info/info.component';
import { TutorialsComponent } from './views/tutorials/tutorials.component';
import { TutorialsAdminComponent } from './views/admin/tutorials-admin/tutorials-admin.component';
import { TutorialsAdminCreateComponent } from './views/admin/tutorials-admin-create/tutorials-admin-create.component';
import { TutorialsAdminDeleteComponent } from './views/admin/tutorials-admin-delete/tutorials-admin-delete.component';
import { TutorialsAdminReadComponent } from './views/admin/tutorials-admin-read/tutorials-admin-read.component';
import { TutorialsAdminUpdateComponent } from './views/admin/tutorials-admin-update/tutorials-admin-update.component';
import { TutorialsReadComponent } from './views/tutorials-read/tutorials-read.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    ProjectsComponent,
    BlogComponent,
    BlogReadComponent,
    FilesComponent,
    MembersComponent,
    WidgetBlogComponent,
    WidgetProjectsComponent,
    AnimeIconsComponent,

    AdminComponent,
    UsersAdminComponent,
    UsersAdminCreateComponent,
    UsersAdminReadComponent,
    UsersAdminUpdateComponent,
    UsersAdminDeleteComponent,
    BlogAdminComponent,
    BlogAdminCreateComponent,
    BlogAdminReadComponent,
    BlogAdminUpdateComponent,
    BlogAdminDeleteComponent,
    ConfigComponent,
    ProjectsAdminComponent,
    ProjectsAdminCreateComponent,
    ProjectsAdminReadComponent,
    ProjectsAdminUpdateComponent,
    ProjectsAdminDeleteComponent,
    ProfileComponent,
    BackgroundComponent,
    InfoComponent,
    TutorialsComponent,
    TutorialsAdminComponent,
    TutorialsAdminCreateComponent,
    TutorialsAdminDeleteComponent,
    TutorialsAdminReadComponent,
    TutorialsAdminUpdateComponent,
    TutorialsReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatBadgeModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    HttpClientModule,

    ImageCropperModule,

    FileSaverModule,

    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
