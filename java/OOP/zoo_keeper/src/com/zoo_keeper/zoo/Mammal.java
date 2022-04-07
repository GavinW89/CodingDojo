package com.zoo_keeper.zoo;

public class Mammal {
	protected int energyLevel = 50;
	
	public Mammal() {
		
	}
	
	
	public int displayEnergy() {
		System.out.printf("The mammals energy is %f", energyLevel);
		return energyLevel;
	}
	
	public int energyChange(int num) {
		energyLevel += num;
		return energyLevel;
	}
	
	
}
