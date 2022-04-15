package com.gw.savetravles.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.gw.savetravles.models.Expense;
import com.gw.savetravles.services.ExpenseService;

@Controller
public class HomeController {
	
	//Injecting Expense Service
	private final ExpenseService expenseService;
	
	public HomeController(ExpenseService expenseService) {
		this.expenseService = expenseService;
	}
	
	// TODO: Add Model model; Add model.attr send to dashboard
	@GetMapping("/")
	public String dashboard(Model model, @ModelAttribute("expense") Expense expense) {
		
		//Send Expenses to the JSP using Model model
		model.addAttribute("allExpenses", expenseService.allExpenses());
		
		return "index.jsp";
	}
	
	@PostMapping("/processExpense")
	public String postingExpense(@Valid @ModelAttribute("expense") Expense expense, BindingResult results, Model model) {
		if(results.hasErrors()) {
			model.addAttribute("allExpenses", expenseService.allExpenses());
			return "index.jsp";
		}else {
			expenseService.createExpense(expense);
			return "redirect:/";
		}
	}
	
	
}
