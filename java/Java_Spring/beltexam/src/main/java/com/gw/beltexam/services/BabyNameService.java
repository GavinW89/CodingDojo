package com.gw.beltexam.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gw.beltexam.models.BabyName;
import com.gw.beltexam.repositories.BabyNameRepository;

@Service
public class BabyNameService {
	
	private final BabyNameRepository babyNameRepo;

	public BabyNameService(BabyNameRepository babyNameRepo) {
		this.babyNameRepo = babyNameRepo;
	}
	
	// Find All BabyNames From Repo
	public List<BabyName> allBabyNames(){
		return babyNameRepo.findAll();
	}
	
	// Create a Baby Name from Repo
	public BabyName createBabyName(BabyName b) {
		return babyNameRepo.save(b);
	}
	
	// Find One Baby Name From Repo
	public BabyName findBabyName(Long id) {
		Optional<BabyName> optionalBabyName = babyNameRepo.findById(id);
		
		if(optionalBabyName.isPresent()) {
			return optionalBabyName.get();
		}else {
			return null;
		}
	}
	
	// Delete BabyName from Repo
	public void delete(Long id) {
		babyNameRepo.deleteById(id);
	}
	
	// Update BabyName From Repo
	public BabyName updateBabyName(BabyName b) {
		return babyNameRepo.save(b);
	}
}
