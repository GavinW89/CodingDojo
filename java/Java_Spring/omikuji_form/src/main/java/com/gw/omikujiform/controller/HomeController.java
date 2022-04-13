package com.gw.omikujiform.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String index() {
		return "Index.jsp";
	}
	
	@PostMapping("/post")
	public String post(
			@RequestParam("number") int number,
			@RequestParam("city") String city,
			@RequestParam("person") String person,
			@RequestParam("endeavor") String endeavor,
			@RequestParam("livingThing") String livingThing,
			@RequestParam("somethingNice") String somethingNice,
			HttpSession session,
			Model model
			) {
		session.setAttribute("sessionNumber", number);
		session.setAttribute("sessionCity", city);
		session.setAttribute("sessionPerson", person);
		session.setAttribute("sessionEndeavor", endeavor);
		session.setAttribute("sessionLivingThing", livingThing);
		session.setAttribute("sessionSomethingNice", somethingNice);

		
		return "redirect:/view";
	}
	
	@RequestMapping("/view")
	public String view(Model model, HttpSession session) {
		model.addAttribute("number", session.getAttribute("sessionNumber"));
		model.addAttribute("city", session.getAttribute("sessionCity"));
		model.addAttribute("person", session.getAttribute("sessionPerson"));
		model.addAttribute("endeavor", session.getAttribute("sessionEndeavor"));
		model.addAttribute("livingThing", session.getAttribute("sessionLivingThing"));
		model.addAttribute("somethingNice", session.getAttribute("sessionSomethingNice"));
		return "View.jsp";
	}
	
	@RequestMapping("/clear")
	public String clear(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
	
}
