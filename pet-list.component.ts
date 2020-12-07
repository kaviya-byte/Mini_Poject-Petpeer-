
import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetApiService } from 'src/app/shared/pet-api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  [x: string]: any;
  petList: Pet[] = [];
  error: string = null;
  @Input() petId: number | undefined;

  constructor(private apiService: PetApiService, public authService: AuthService) { }

  ngOnInit(): void {
     // if there is petid in url = we are viewing pet ie Searched from panel.
     if (this.petId) {
      this.fetchPetById();
    } else { // else means load all pets in dashboard
      this.listAllPets();
    }
  }
  fetchPetById() {
    this.apiService.fetchPetById(this.petId)
      .subscribe(data => {
        this.petList = data ? [data] : [];
      },
      err => {
        if (err.status === 404) {
          this.error = `No Pets with ID: ${this.petId} found`;
        }
      },
      () => console.log('done fetchPetById'));
  }

  listAllPets() {
    this.apiService.fetchPetList()
      .subscribe((data: string | any[]) => {
        if (data.length) {
          this.petList = data ;
          console.log('fetchPetList this.petList ', this.petList);
        } else {
          this.error = `No Pets in store.`;
        }
      },
        (      err: any) => console.error(err),
      () => console.log('done ngOnInit-fetching pet list'));
  }


  
}
