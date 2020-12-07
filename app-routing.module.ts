import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AuthGuard } from './auth/auth.guard';
import { PetListComponent } from './content/pet-list/pet-list/pet-list.component';
import { ViewPetComponent } from './content/view-pet/view-pet/view-pet.component';
import { EditPetComponent } from './content/edit-pet/edit-pet/edit-pet.component';
import { DeletePetComponent } from './content/delete-pet/delete-pet/delete-pet.component';
import { AddPetComponent } from './content/add-pet/add-pet/add-pet.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './logout/logout/logout.component';

const appRoutes: Routes = [
  {   
    path: 'pets',
    component: ContentComponent,
    children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: PetListComponent },
        { path: 'view/:id', component: ViewPetComponent },
        { path: 'edit/:id', component: EditPetComponent, canActivate: [AuthGuard] },
        { path: 'delete/:id', component: DeletePetComponent, canActivate: [AuthGuard] },
        { path: 'add', component: AddPetComponent, canActivate: [AuthGuard] },
        {path: 'login', component: LoginComponent,canActivate: [AuthGuard] },
        {path: 'logout', component: LogoutComponent,canActivate: [AuthGuard] },
    ]
},
//{ path: 'callback', component: CallbackComponent },
//{ path: '**', redirectTo: 'pets' } // fallback route for 404

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
    