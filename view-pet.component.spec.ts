
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPetComponent } from './view-pet.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PetListComponent } from '../../pet-list/pet-list/pet-list.component';
import { PetDisplayComponent } from 'src/app/shared/pet/pet-display/pet-display.component';

describe('ViewPetComponent', () => {
  let component: ViewPetComponent;
  let fixture: ComponentFixture<ViewPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ], declarations: [
        ViewPetComponent,
        PetListComponent,
        PetDisplayComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPetComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create viewPetComponent', () => {
    expect(component).toBeTruthy();
  });
});