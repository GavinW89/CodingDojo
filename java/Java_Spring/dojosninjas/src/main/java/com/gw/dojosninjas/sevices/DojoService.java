package com.gw.dojosninjas.sevices;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gw.dojosninjas.models.Dojo;
import com.gw.dojosninjas.repositories.DojoRepository;

@Service
public class DojoService {
	
	private final DojoRepository dojoRepo;

	public DojoService(DojoRepository dojoRepo) {
		super();
		this.dojoRepo = dojoRepo;
	}
	
	
	// Find All Dojo From Repo
	public List<Dojo> allDojos(){
		return dojoRepo.findAll();
	}

	// Create a Dojo from Repo
	public Dojo createDojo(Dojo d) {
		return dojoRepo.save(d);
	}
	
	// Find One Dojo From Repo
	public Dojo findDojo(Long id) {
		Optional<Dojo> optionalDojo = dojoRepo.findById(id);
		
		if(optionalDojo.isPresent()) {
			return optionalDojo.get();
		}else {
			return null;
		}
	}
		
	// Delete Dojo From Repo
	public void delete(Long id) {
		dojoRepo.deleteById(id);
	}
	
	// Update Dojo From Repo
	public Dojo updateDojo(Dojo d) {
		return dojoRepo.save(d);

	}
	
	
}
