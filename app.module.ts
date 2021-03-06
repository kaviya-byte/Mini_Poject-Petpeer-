import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetFormComponent } from './shared/form/pet-form/pet-form.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { PetDisplayComponent } from './shared/pet/pet-display/pet-display.component';
import { PetApiService } from './shared/pet-api.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { ViewPetComponent } from './content/view-pet/view-pet/view-pet.component';
import { PetListComponent } from './content/pet-list/pet-list/pet-list.component';
import { DeletePetComponent } from './content/delete-pet/delete-pet/delete-pet.component';
import { AddPetComponent } from './content/add-pet/add-pet/add-pet.component';
import { EditPetComponent } from './content/edit-pet/edit-pet/edit-pet.component';
import { PanelComponent } from './panel/panel/panel.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './logout/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    PetDisplayComponent,
    PetFormComponent,
    PanelComponent,
    HeaderComponent,
    ContentComponent,
    ViewPetComponent,
    PetListComponent,
    DeletePetComponent,
    AddPetComponent,
    EditPetComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PetApiService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
   