
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddPetComponent } from './add-pet.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PetFormComponent } from 'src/app/shared/form/pet-form/pet-form.component';
import { PetApiService } from 'src/app/shared/pet-api.service';


describe('AddPetComponent', () => {
  let component: AddPetComponent;
  let fixture: ComponentFixture<AddPetComponent>;

  beforeEach(async (() => {
     TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
         AddPetComponent,
         PetFormComponent
       ],
       providers: [
        PetApiService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetComponent);
    component = fixture.debugElement.componentInstance;
    
  });

  it('should create addPetComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should render add pet header with correct text', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Add A');
  }));
});
