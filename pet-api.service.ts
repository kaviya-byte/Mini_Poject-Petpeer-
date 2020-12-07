import { PetTags } from './../models/petTags.model';
import { PetCategory } from './../models/petCategory.model';
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Pet } from './../models/pet.model';
//import 'rxjs/add/operator/map';
import { AppConstants } from './app-constants.component';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
//import { map } from 'rxjs/operators';

@Injectable()
export class PetApiService {
  apiUrl!: string;

  constructor(private httpClient: HttpClient) {
  }

  fetchPetList() {
    return this.httpClient.get<Pet[]>(`${this.apiUrl}/pets`);
      //.map((pets: any) => {
        //for (const pet of pets) {
          // potential filtering
        //}
        //return pets;
      //}
      //);
  }   

  fetchPetById(id: number) {
    return this.httpClient.get<Pet>(`${this.apiUrl}/pets/${id}`);
  }

  fetchAllAvailableCategories() {
    return this.httpClient.get<PetCategory[]>(`${this.apiUrl}/pets/categories`);
  }

  fetchAllAvailableTags() {
    return this.httpClient.get<PetTags[]>(`${this.apiUrl}/pets/tags`);
  }

  fetchAllAvailableCategoriesAndTags() {
    return forkJoin(
      this.fetchAllAvailableCategories(),
      this.fetchAllAvailableTags()
    );
  }

  updatePet(pet: Pet) {
    const httpOptions = AppConstants.buildHttpHeader(AppConstants.contentTypeOptions.json);
    const body = pet;
    return this.httpClient.put<Pet>(`${this.apiUrl}/pets`, body, httpOptions);
  }

  addPet(pet: Pet) {
    const httpOptions = AppConstants.buildHttpHeader(AppConstants.contentTypeOptions.json);
    const body = pet;
    return this.httpClient.post<Pet>(`${this.apiUrl}/pets`, body, httpOptions);
  }

  deletePet(petID: number) {
    const httpOptions = AppConstants.buildHttpHeader(AppConstants.contentTypeOptions.json);
    return this.httpClient.delete(`${this.apiUrl}/pets/${petID}`, httpOptions);
  }
}