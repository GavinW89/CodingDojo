package com.caresoft.clinicapp;

import java.util.Date;
import java.util.ArrayList;

public class Physician extends User implements HIPAACompliantUser {
//... imports class definition...
    
    // Inside class:    
    private ArrayList<String> patientNotes;
    private int savedPin;
    private int id;
	
    // TO DO: Constructor that takes an ID
    public Physician (int id) {
    	this.id = id;
    }
    // TO DO: Implement HIPAACompliantUser!
	
    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }
	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		int length = String.valueOf(pin).length();
		System.out.println(length + " This is length of pin");
		if(length == 4) {
			this.setPin(pin);
			return true;
		}else {
			return false;
		}
	}
	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		if(confirmedAuthID == this.id) {
			return true;
		}
		return false;
	}
	// TO DO: Setters & Getters

	public int getSavedPin() {
		return savedPin;
	}
	

	}


