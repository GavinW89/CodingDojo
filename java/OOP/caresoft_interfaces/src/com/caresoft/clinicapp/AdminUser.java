package com.caresoft.clinicapp;

import java.util.Date;
import java.util.ArrayList;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	
    private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents = new ArrayList<String>();
    
    public AdminUser(int id, String role) {
    	this.setId(id);
    	this.role = role;
    }
    
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		return securityIncidents;
	}

	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		int length = String.valueOf(pin).length();
		System.out.println(length + " This is length of pin");
		if(length == 6) {
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
		}else {
			this.authIncident();
			return false;
		}
	}

    // TO DO: Implement a constructor that takes an ID and a role
    // TO DO: Implement HIPAACompliantUser!
    // TO DO: Implement HIPAACompliantAdmin!
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }

	public Integer getEmployeeID() {
		return employeeID;
	}


	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public String getSecurityIncidents() {
		for(String incident : securityIncidents) {
			System.out.println(incident);
		}
		return "There are no other Incidents";
	}


	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
		this.securityIncidents = securityIncidents;
	}



    
    // TO DO: Setters & Getters

}
