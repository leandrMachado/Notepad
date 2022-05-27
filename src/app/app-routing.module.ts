import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './views/create-note/create-note.component';
import { LoginComponent } from './views/login/login.component';
import { NoteComponent } from './views/note/note.component';
import { NotepadComponent } from './views/notepad/notepad.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notepad', component: NotepadComponent },
  { path: 'note', component: NoteComponent},
  { path: 'create-note', component: CreateNoteComponent},
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
