package com.daikichiroutes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DaikichiRoutesApplication {

	public static void main(String[] args) {
		SpringApplication.run(DaikichiRoutesApplication.class, args);
	}
	@RequestMapping("/")
	public String Welcome() {
		return "Welcome!";
	}
	@RequestMapping("/daikichi/today")
	public String Today() {
		return "Today you will find luck in all your endeavors!";
	}
	@RequestMapping("/daikichi/tomorrow")
	public String Tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	@RequestMapping("/daikichi/travel/{location}")
	public String Travel(@PathVariable("location") String location) {
		return "Congratulations! You will soon travle to " + location;
	}
	@RequestMapping("/daikichi/loto/{loto}")
	public String lotto(@PathVariable("loto") int loto) {
		if(loto % 2 == 0) {			
			return "You will take a grand journey in the near future, but be weary of tempting offers!";
		}else {
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";
		}
	}
}
