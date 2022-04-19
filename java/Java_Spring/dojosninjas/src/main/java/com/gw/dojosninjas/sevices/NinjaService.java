package com.gw.dojosninjas.sevices;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gw.dojosninjas.models.Ninja;
import com.gw.dojosninjas.repositories.NinjaRepository;

@Service
public class NinjaService {
	private final NinjaRepository ninjaRepo;

	public NinjaService(NinjaRepository ninjaRepo) {
		super();
		this.ninjaRepo = ninjaRepo;
	}
	
	//Create Ninja
	public Ninja createNinja(Ninja ninja) {
		return ninjaRepo.save(ninja);
	}
	
	// Find One Ninja From Repo
	public Ninja findNinja(Long id) {
		Optional<Ninja> optionalNinja = ninjaRepo.findById(id);
		
		if(optionalNinja.isPresent()) {
			return optionalNinja.get();
		}else {
			return null;
		}
	}
	
	// Find all the ninjas
	public List<Ninja> allNinjas() {
		return ninjaRepo.findAll();
	}
	
	
	// Delete Ninja From Repo
	public void delete(Long id) {
		ninjaRepo.deleteById(id);
	}
	
	// Update a Ninja From Repo
	public Ninja updateNinja(Ninja n) {
		return ninjaRepo.save(n);
	}
	
	
}
