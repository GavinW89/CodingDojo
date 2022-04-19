package com.gw.dojosninjas.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.gw.dojosninjas.models.Dojo;
import com.gw.dojosninjas.models.Ninja;
import com.gw.dojosninjas.sevices.DojoService;
import com.gw.dojosninjas.sevices.NinjaService;

@Controller
public class HomeController {
	
	private final DojoService dojoService;
	private final NinjaService ninjaService;

	
	
	public HomeController(DojoService dojoService, NinjaService ninjaService) {
		super();
		this.dojoService = dojoService;
		this.ninjaService = ninjaService;
	}

	// Render Index Page
	@GetMapping("/")
 	public String index(Model model) {
		model.addAttribute("allDojos", dojoService.allDojos());
		return "index.jsp";
	}
	
	// Render newDojo.jsp Form
	@GetMapping("/newDojo")
 	public String newDojo(@ModelAttribute("dojo") Dojo dojo, Model model) {
			
		return "newDojo.jsp";
				
	}
	
	// POST newDojo Form
	@PostMapping("/processDojo")
	public String postingDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult results, Model model) {
		if(results.hasErrors()) {
			return "newDojo.jsp";
		}else {
			dojoService.createDojo(dojo);
			return "redirect:/";
		}
	}
	
	// Render oneDojo.jsp
	@GetMapping("/oneDojo/{id}")
	public String oneDojo(@PathVariable("id") Long id, Model model) {
		
		model.addAttribute("allNinjas", ninjaService.allNinjas());
		model.addAttribute("dojo", dojoService.findDojo(id));
		
		return "oneDojo.jsp";
	}
	
	// Render updateDojo.jsp Form
	
	
	// POST updateDojo Form
	
	
	// Render newNinja.jsp form
	@GetMapping("/newNinja/{id}")
	public String oneNinja(@ModelAttribute("ninja") Ninja ninja, @PathVariable("id")Long id, Model model) {
		model.addAttribute("dojo", dojoService.findDojo(id));
		
		return "newNinja.jsp";
	}
	
	// POST newNinja Form
	@PostMapping("/processNinja")
	public String postingNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult results, Model model) {
		
		if(results.hasErrors()) {
//			model.addAttribute(dojoService.findDojo(id));
			return "newNinja.jsp";
		}else {
			ninjaService.createNinja(ninja);
			return "redirect:/";
		}
	}
	
	// Render oneNinja.jsp
	
	
	// Render updateNinja.jsp Form
	
	
	// POST updateNinja Form
	
}
