package com.pack.backend.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.pack.backend.entity.Pet;
import com.pack.backend.entity.PetCategory;
import com.pack.backend.entity.PetTags;

@Repository
@Transactional
public class PetJpaRepository {
	@PersistenceContext
	EntityManager entityManager;

	public List<Pet> findAll() {
		TypedQuery<Pet> namedQuery =  entityManager.createNamedQuery("find_all_pets",Pet.class);
		return namedQuery.getResultList();
	}

	public Pet findById(Long id) {
		return entityManager.find(Pet.class, id);
	}
	
	// will add or update, .merge knows how to handle it.
	private Pet handleInsert(Pet pet) {
		return entityManager.merge(pet); // merge knows if there is ID in pet or not
	}
	
	public Pet add(Pet pet) {
		return handleInsert(pet);
	}
	
	public Pet update(Pet pet) {
		return handleInsert(pet);
	}
	
	public void deleteById(Long id) {
		Pet pet = findById(id);
		entityManager.remove(pet);
	}
	
	public List<PetCategory> findAllCategories() {
		TypedQuery<PetCategory> namedQuery =  entityManager.createNamedQuery("find_all_categories",PetCategory.class);
		return namedQuery.getResultList();
	}
	
	public List<PetTags> findAllTags() {
		TypedQuery<PetTags> namedQuery =  entityManager.createNamedQuery("find_all_tags",PetTags.class);
		return namedQuery.getResultList();
	}

}
