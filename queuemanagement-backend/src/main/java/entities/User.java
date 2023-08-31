package entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity(name="user")
@Table(name="user",
		uniqueConstraints = {
				@UniqueConstraint(name = "user_email_uq", columnNames = "email"),
				@UniqueConstraint(name = "user_number_uq", columnNames = "phone_number")
		}
		
		)
public class User {
	
	public enum RoleType {
		CLIENT,ADMIN,OPERATOR
		
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "first_name",
			nullable = false)
	private String firstName;
	@Column(name = "last_name",
			nullable = false)
	private String lastName;
	@Column(nullable = false)
	private String email;
	@Column(name = "phone_number",
			nullable = false)
	private int phoneNumber;
	
	@Column(nullable = false)
	private String password;
	
	@Column(columnDefinition = "ENUM('CLIENT','ADMIN','OPERATOR')")
    @Enumerated(EnumType.STRING)
	private RoleType role;
	@Column(name="sign_up_date")
	private Date signUpDate = new Date(System.currentTimeMillis());;
	@Column(name="code")
	private int code = 0;
	
	
	
    public User() {
		// TODO Auto-generated constructor stub
	}
    

	public User(int id, String firstName, String lastName, String email, int phoneNumber, String password, RoleType role) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.role = role;
	}
	
	public User(String firstName, String lastName, String email, int phoneNumber, String password, RoleType role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.role = role;
	}

	public int getId() {
		return id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public RoleType getRole() {
		return role;
	}
	public void setRole(RoleType role) {
		this.role = role;
	}
	

	public int getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public void setId(int id) {
		this.id = id;
	}


	
	public int getCode() {
		return code;
	}


	public void setCode(int code) {
		this.code = code;
	}


	public Date getSignUpDate() {
		return signUpDate;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", phoneNumber=" + phoneNumber + ", password=" + password + ", role=" + role + "]";
	}


	
	

}
