package com.pack.backend.services;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pack.backend.entity.Pet;
import com.pack.backend.entity.PetCategory;
import com.pack.backend.entity.PetTags;
import com.pack.backend.jpa.PetJpaRepository;

@Service
public class PetService {
	@Autowired
	private PetJpaRepository petRepository;
	
	public List<Pet> findAll() {
		return petRepository.findAll();
	}

	public Pet findById(Long id) throws EntityNotFoundException {
		Pet pet = petRepository.findById(id);
		if(null == pet) {
			throw new EntityNotFoundException("No pet with ID:"+id+" was found...");// handled by controller advice
		}
		return pet;
	}

	public Pet add(Pet pet) {
		return petRepository.add(pet);
	}

	public Pet update(Pet pet) {
		return petRepository.update(pet);
	}

	public boolean deleteById(Long id) {
		petRepository.deleteById(id);
		return true;
	}

	public List<PetCategory> findAllCategories() {
		return petRepository.findAllCategories();
	}

	public List<PetTags> findAllTags() {
		return petRepository.findAllTags();
	}
}


