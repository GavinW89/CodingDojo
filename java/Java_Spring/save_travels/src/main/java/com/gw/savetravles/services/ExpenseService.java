package com.gw.savetravles.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gw.savetravles.models.Expense;
import com.gw.savetravles.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	
	private final ExpenseRepository expenseRepo;
	
	public ExpenseService(ExpenseRepository expenseRepo) {
		this.expenseRepo = expenseRepo;
	}

	// Find All Expenses From Repo
	public List<Expense> allExpenses(){
		return expenseRepo.findAll();
	}
	
	// Create a Expense From Repo
	public Expense createExpense(Expense e) {
		return expenseRepo.save(e);
	}
	
	// Find One Expense From Repo
	public Expense findExpense(Long id) {
		Optional<Expense> optionalExpense = expenseRepo.findById(id);
		
		if(optionalExpense.isPresent()) {
			return optionalExpense.get();
		}else {
			return null;
		}
				
	}
	
	// Delete Expense From Repo
	public void delete(Long id) {
		expenseRepo.deleteById(id);
	}
	
	// Update an Expense From Repo
	public Expense updateExpense(Expense e) {
		return expenseRepo.save(e);
	}
	
}
