package com.gw.savetravles.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="expenses")
public class Expense {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min= 3, max = 30, message="Expense must be between 3-30 characters.")
	private String purchase;
	
	@NotNull
	@Size(min= 3, max = 15, message="Vendor must be between 3-15 characters.")
	private String vendor;
	
	
	@NotNull(message="Please put in a number")
	@Min(value=0, message="Amount cannot be less then 0.")
	private Double amount;

	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;

	public Expense() {	}


//	public Expense(
//			@NotNull @Size(min = 3, max = 30, message = "Expense must be between 3-30 characters.") String expense,
//			@NotNull @Size(min = 3, max = 15, message = "Vendor must be between 3-15 characters.") String vendor,
//			@NotNull @Min(value = 0, message = "Amount cannot be less then 0.") Integer amount) {
//		super();
//		this.expense = expense;
//		this.vendor = vendor;
//		this.amount = amount;
//	}
//
//
//	public Expense(Long id,
//			@NotNull @Size(min = 3, max = 30, message = "Expense must be between 3-30 characters.") String expense,
//			@NotNull @Size(min = 3, max = 15, message = "Vendor must be between 3-15 characters.") String vendor,
//			@NotNull @Min(value = 0, message = "Amount cannot be less then 0.") Integer amount, Date createdAt,
//			Date updatedAt) {
//		super();
//		this.id = id;
//		this.expense = expense;
//		this.vendor = vendor;
//		this.amount = amount;
//		this.createdAt = createdAt;
//		this.updatedAt = updatedAt;
//	}


	
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getPurchase() {
		return purchase;
	}


	public void setPurchase(String purchase) {
		this.purchase = purchase;
	}


	public String getVendor() {
		return vendor;
	}


	public void setVendor(String vendor) {
		this.vendor = vendor;
	}


	public Double getAmount() {
		return amount;
	}


	public void setAmount(Double amount) {
		this.amount = amount;
	}


	public Date getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}


	public Date getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}


	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	
	
}
