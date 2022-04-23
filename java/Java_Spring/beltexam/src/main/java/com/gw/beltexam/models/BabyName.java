package com.gw.beltexam.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="babynames")
public class BabyName {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min= 2, max = 30, message="Name must be between 3-30 characters.")
	private String name;
	
	@NotNull
	@Size(min= 3, message="gender must be between 3-15 characters.")
	private String gender;
	
	@NotNull
	@Size(min= 3, message="Origin must be between 3-15 characters.")
	private String origin;
	
	@NotNull
	@Size(min= 3, message="Meaning must be between 3-15 characters.")
	private String meaning;
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;

	public BabyName() {	}

	public BabyName(@NotNull @Size(min = 2, max = 30, message = "Name must be between 3-30 characters.") String name,
			@NotNull @Size(min = 3, message = "gender must be between 3-15 characters.") String gender,
			@NotNull @Size(min = 3, message = "Origin must be between 3-15 characters.") String origin,
			@NotNull @Size(min = 3, message = "Meaning must be between 3-15 characters.") String meaning, User user) {
		super();
		this.name = name;
		this.gender = gender;
		this.origin = origin;
		this.meaning = meaning;
		this.user = user;
	}

	public BabyName(Long id,
			@NotNull @Size(min = 2, max = 30, message = "Name must be between 3-30 characters.") String name,
			@NotNull @Size(min = 3, message = "gender must be between 3-15 characters.") String gender,
			@NotNull @Size(min = 3, message = "Origin must be between 3-15 characters.") String origin,
			@NotNull @Size(min = 3, message = "Meaning must be between 3-15 characters.") String meaning,
			Date createdAt, Date updatedAt, User user) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.origin = origin;
		this.meaning = meaning;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getMeaning() {
		return meaning;
	}

	public void setMeaning(String meaning) {
		this.meaning = meaning;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	
}
