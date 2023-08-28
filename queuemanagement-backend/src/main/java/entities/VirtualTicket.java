package entities;

import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="virtual_ticket")
public class VirtualTicket {
	
	public enum StatusType {
		WAITING, TREATING, TREATED, ABANDONED
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//private int id;
	private int number;
	@ManyToOne
	@JoinColumn(name = "id_service",
	            foreignKey = @ForeignKey(name = "FK_ticket_service")
	            )
	private Service service;
	@Column(columnDefinition = "ENUM('WAITING','TREATING','TREATED','ABANDONED')")
    @Enumerated(EnumType.STRING)
	private StatusType status= StatusType.WAITING;
	@ManyToOne
	@JoinColumn(name = "id_client",
	            nullable = false,
	            foreignKey = @ForeignKey(name = "FK_ticket_client")
	            )
	private User client;
	private Time startTime;
	
	public Time getStartTime() {
		return startTime;
	}

	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}

	public VirtualTicket() {
		// TODO Auto-generated constructor stub
	}
	
	public VirtualTicket(int number, Service service, StatusType status) {
		super();
		this.number = number;
		this.service = service;
		this.status = status;
	}
	
	public VirtualTicket(int number, Service service, StatusType status, User client) {
		super();
		this.number = number;
		this.service = service;
		this.status = status;
		this.client = client;
	}
	/*
	public VirtualTicket(int id, int number, Service service, StatusType status) {
		super();
		this.id = id;
		this.number = number;
		this.service = service;
		this.status = status;
	}
	*/
	
	/*public int getId() {
		return id;
	}
	*/
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public Service getService() {
		return service;
	}
	public void setService(Service service) {
		this.service = service;
	}
	public StatusType getStatus() {
		return status;
	}
	public void setStatus(StatusType status) {
		this.status = status;
	}

	
	public User getClient() {
		return client;
	}

	public void setClient(User client) {
		this.client = client;
	}

	@Override
	public String toString() {
		return "VirtualTicket ["/*id=" + id */+ ", number=" + number + ", service=" + service + ", status=" + status
				+ ", client=" + client + "]";
	}

	
	
	

}
