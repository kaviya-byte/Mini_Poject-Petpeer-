
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetApiService } from 'src/app/shared/pet-api.service';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  petId!: string;
  pet!: Pet;

  constructor(private route: ActivatedRoute,
    private apiService: PetApiService,
    private router: Router) { }

    fetchPetById(id: number) {
      this.apiService.fetchPetById(id)
        .subscribe(data => {
          this.pet = data;
        },
        err => { console.error('Error Fecthing by id: ', err); this.router.navigate(['']); },
        () => console.log('done fetchPetById'));
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.petId = params['id'];
      this.fetchPetById(params['id']);
    });

  }

}
