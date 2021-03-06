
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetApiService } from 'src/app/shared/pet-api.service';

@Component({
  selector: 'app-delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.css']
})
export class DeletePetComponent implements OnInit {
  petID!: number;

  constructor(private route: ActivatedRoute,
    private apiService: PetApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.petID = params['id'];
    });
  }
  deletePet() {
    this.apiService.deletePet(this.petID)
      .subscribe((data: any) => {
        this.router.navigate(['']);
      },
        (      err: any) => console.error('Error deletePet: ', err),
      () => console.log('done deletePet'));
  }

}
