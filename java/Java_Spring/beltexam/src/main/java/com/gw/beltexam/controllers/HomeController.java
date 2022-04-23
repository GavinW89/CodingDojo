package com.gw.beltexam.controllers;

import javax.servlet.http.HttpSession;
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

import com.gw.beltexam.models.BabyName;
import com.gw.beltexam.models.LoginUser;
import com.gw.beltexam.models.User;
import com.gw.beltexam.services.BabyNameService;
import com.gw.beltexam.services.UserService;

@Controller
public class HomeController {
	

	
	//Injecting Services
	private final UserService userService;
	private final BabyNameService babyNameService;

	public HomeController(UserService userService, BabyNameService babyNameService) {
		super();
		this.userService = userService;
		this.babyNameService = babyNameService;
	}
	
	@GetMapping("/")
	public String index(Model model) {
		//Bind empty User and LoginUser objects to the JSP
		//to capture the form input
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
		
userService.register(newUser,result);
        
        if(result.hasErrors()) {
            // Be sure to send in the empty LoginUser before 
            // re-rendering the page.
            model.addAttribute("newLogin", new LoginUser());
            return "index.jsp";
        }
        
        // No errors! 
        // TO-DO Later: Store their ID from the DB in session, 
        // in other words, log them in.
        session.setAttribute("user_id", newUser.getId());
        model.addAttribute("user", session.getAttribute("user_id"));
    
        return "redirect:/dashboard";
	}
	
	@PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
            BindingResult result, Model model, HttpSession session) {
        
        // Add once service is implemented:
        // User user = userServ.login(newLogin, result);
    	User user = userService.login(newLogin, result);
        if(result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index.jsp";
        }
    
        // No errors! 
        // TO-DO Later: Store their ID from the DB in session, 
        // in other words, log them in.
        session.setAttribute("user_id", user.getId());
        
        return "redirect:/dashboard";
    }
    
	
	
	   @GetMapping("/logout")
	    public String logout(HttpSession session) {
	    	session.invalidate();
	    	return "redirect:/";
	    }
	   
	   
		@GetMapping("/dashboard")	
		public String dashboard(Model model,HttpSession session) {
			
			if(session.getAttribute("user_id") != null) {
				
				model.addAttribute("allBabyNames", babyNameService.allBabyNames());
				
				model.addAttribute("user", userService.oneUser( (Long)session.getAttribute("user_id")));
				
				return "dashboard.jsp";
			}else {
				return "redirect:/";
			}
			
		}
		
		
		@GetMapping("/newBabyName")
		public String newBabyName(@ModelAttribute("babyname") BabyName babyName, Model model, HttpSession session) {
			if(session.getAttribute("user_id") != null) {
				
				model.addAttribute("user", userService.oneUser( (Long)session.getAttribute("user_id")));
				
				return "newBabyName.jsp";
			}else {
				return "redirect:/";
			}
		}
	   
	   @PostMapping("/processBabyName")
	   public String postingBabyName(@Valid @ModelAttribute("babyname") BabyName babyName, BindingResult results, Model model,HttpSession session) {
		   if(results.hasErrors()) {
			   model.addAttribute("user", userService.oneUser( (Long)session.getAttribute("user_id")));
			   return "newBabyName.jsp";
		   }else {
			   babyNameService.createBabyName(babyName);
			   return "redirect:/dashboard";
		   }
	   }
	   
	   
	   @GetMapping("/oneBabyName/{id}")
	   public String oneBabyName(@PathVariable("id") Long id, Model model, HttpSession session) {
		   if(session.getAttribute("user_id") != null) {
				
				model.addAttribute("user", userService.oneUser( (Long)session.getAttribute("user_id")));
				model.addAttribute("babyName", babyNameService.findBabyName(id));
				return "oneBabyName.jsp";
			}else {
				return "redirect:/";
			}
	   }
	
	@GetMapping("/updateBabyName/{id}")
	public String updateBabyname(@PathVariable("id") Long id, @ModelAttribute("babyname") BabyName babyName, Model model, HttpSession session) {
		if(session.getAttribute("user_id") != null) {
			
			model.addAttribute("user", userService.oneUser( (Long)session.getAttribute("user_id")));
			model.addAttribute("babyname", babyNameService.findBabyName(id));
			return "editBabyName.jsp";
		}else {
			return "redirect:/";
		}
	}
	
	@RequestMapping(value="/updatingBabyName/{id}", method=RequestMethod.PUT)
	public String updatingBabyName(@Valid @ModelAttribute("babyname") BabyName babyname, BindingResult result, @PathVariable("id")Long id,HttpSession session, Model model) {
		
		if(result.hasErrors()) {
//			model.addAttribute("babyname", babyNameService.findBabyName(id));
			return "editBabyName.jsp";
		}else {
			babyNameService.updateBabyName(babyname);
			return "redirect:/dashboard";
		}
		
	}
	
	//  DELETE BABYNAME
	@GetMapping("/deleteBabyName/{id}")	
	public String delete(@PathVariable("id") Long id, HttpSession session) {
		if(session.getAttribute("user_id") != null) {
			
			babyNameService.delete(id);
			return "redirect:/dashboard";
			
		}else {
			return "redirect:/";
		}
		
	}
	
}
