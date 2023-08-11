package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(
		uniqueConstraints = {
				@UniqueConstraint(name = "service_libel_uq", columnNames = "libel")
		}
		)
public class Service {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false)
	private String libel;
	
	public Service() {
		// TODO Auto-generated constructor stub
	}
	
	public Service(String libel) {
		super();
		this.libel = libel;
	}

	public Service(int id, String libel) {
		super();
		this.id = id;
		this.libel = libel;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLibel() {
		return libel;
	}

	public void setLibel(String libel) {
		this.libel = libel;
	}

	@Override
	public String toString() {
		return "Service [id=" + id + ", libel=" + libel + "]";
	}
	
	
	

}
