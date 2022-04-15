package com.gw.savetravles.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gw.savetravles.models.Expense;

import java.util.List;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long> {

	List<Expense> findAll();
	
}
