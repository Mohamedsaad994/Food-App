import {  RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  imports: [
    CommonModule,
    NgxDropzoneModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxDropzoneModule,
    SidebarComponent,
    NavbarComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  declarations: [SharedComponent, SidebarComponent, NavbarComponent, HomeComponent, DeleteComponent]
})
export class SharedModule { }
