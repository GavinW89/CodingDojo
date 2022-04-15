package com.gw.savetravles.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
	
	// Route to show one expense
	@GetMapping("/oneExpense/{id}")
	public String oneExpense(@PathVariable("id") Long id, Model model) {
		
		model.addAttribute("expense", expenseService.findExpense(id));
		
		return "oneExpense.jsp";
	}
	
	//Route to delete
	@GetMapping("/delete/{id}")	
	public String delete(@PathVariable("id") Long id) {
		
		expenseService.delete(id);
		
		return "redirect:/";
	}
	
	//Route to render update form
	@GetMapping("/updateExpense/{id}")	
	public String updateExpenseForm(@PathVariable("id") Long id, @ModelAttribute("expense") Expense expense, Model model) {
		
		model.addAttribute("expense", expenseService.findExpense(id));
		
		return "updateExpense.jsp";
	}
	
	// Process the post to update candy
	
	@RequestMapping(value="/updatingExpense/{id}", method=RequestMethod.PUT)
	public String updatingExpense(@Valid @ModelAttribute("expense") Expense expense, BindingResult result, @PathVariable("id") Long id) {
		if(result.hasErrors()) {
			return "updateExpense.jsp";
		}else {
			expenseService.updateExpense(expense);
			return "redirect:/";
		}
		
	}
	
}
