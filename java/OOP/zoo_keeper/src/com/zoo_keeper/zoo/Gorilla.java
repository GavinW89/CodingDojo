package com.zoo_keeper.zoo;

public class Gorilla extends Mammal{
	
	public Gorilla() {
		
	}
	
	public void throwSomething() {
		this.energyChange(-5);
		System.out.println(String.format("This Gorilla threw a thing and lost 5 energy! Their energy is now %s",this.energyLevel));
	}
	
	public void eatBananas() {
		this.energyChange(10);
		System.out.println(String.format("This Gorilla ate a banana, satisfied its hunger and gained 10 energy! Their energy is now %s", this.energyLevel));
	}
	
	public void climb() {
		this.energyChange(-10);
		System.out.println(String.format("This Gorilla climbed that thing and lost 10 energy! Their energy is now %s", this.energyLevel));
	}
}
