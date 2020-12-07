import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PetListComponent } from './pet-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { PetApiService } from 'src/app/shared/pet-api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { PetDisplayComponent } from 'src/app/shared/pet/pet-display/pet-display.component';
import { Pet } from 'src/app/models/pet.model';
import { PetCategory } from 'src/app/models/petCategory.model';
import { PetTags } from 'src/app/models/petTags.model';
import { Observable } from 'rxjs';

describe('PetListComponent', () => {
  let component: PetListComponent;
  let fixture: ComponentFixture<PetListComponent>;
  let pet: Pet;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        PetListComponent,
        PetDisplayComponent
      ],
      providers: [
        PetApiService,
        AuthService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListComponent);
    component = fixture.debugElement.componentInstance;

    // Mock a pet display object
    const category = new PetCategory(4, 'Hamster');
    const tags = [new PetTags(5, 'Protector')];
    pet = new Pet('2000', category, 'Max', ['https://cdn.omlet.co.uk/images/originals/hamsters-make-great-pets.jpg'], tags, 'sold');
  });

  it('should create pet list component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    const apiservice = fixture.debugElement.injector.get(PetApiService);
    const spy = spyOn(apiservice, 'fetchPetList')
      .and.returnValue(Observable.of([pet]));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(JSON.stringify(component.petList)).toBe(JSON.stringify([pet]));
    });
  }));

  it('fakeAsync - should fetch data successfully if called asynchronously', fakeAsync(() => {
    const apiservice = fixture.debugElement.injector.get(PetApiService);
    const spy = spyOn(apiservice, 'fetchPetList')
      .and.returnValue(Observable.of([pet]));

    fixture.detectChanges();

    tick();
    expect(JSON.stringify(component.petList)).toBe(JSON.stringify([pet]));
  }));
});
