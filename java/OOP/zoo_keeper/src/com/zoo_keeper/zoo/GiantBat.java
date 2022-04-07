package com.zoo_keeper.zoo;

public class GiantBat extends Mammal {

	public GiantBat() {
		this.energyLevel = 300;
	}
	
	public void fly() {
		this.energyChange(-50);
		System.out.println(String.format("'Swooosh .. Swooosh .. Swoosh', the bat took off and lost 50 energy! Their energy is now %s", this.energyLevel));
	}
	
	public void eatHumas() {
		this.energyChange(25);
		System.out.println(String.format("The giant bat at a human and gained 25 energy! Their energy is now %s", energyLevel));
	}
	
	public void attackTown() {
		this.energyChange(-100);
		System.out.println(String.format("'AHHHHHHHH' the sound of innocent village people crying for help, the bat attacked a town and lost 100 energy! Their energy is now %s", energyLevel));
	}
	
}
