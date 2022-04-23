package com.gw.beltexam.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gw.beltexam.models.BabyName;

@Repository
public interface BabyNameRepository extends CrudRepository<BabyName, Long> {
	List<BabyName> findAll();
}
