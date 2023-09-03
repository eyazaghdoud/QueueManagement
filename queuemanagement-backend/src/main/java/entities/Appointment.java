package entities;

import java.sql.Date;
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


@Entity(name="appointment")
@Table(name="appointment")
public class Appointment {

	/*approximatif duration for each appointment*/
	//private final int APPROXIMATIF_DURATION = 15;
	
	public enum AppointmentStatusType {
		PENDING, CHECKED, ABSENCE	
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="date")
	private Date date;
	@Column(name="time")
	private Time time;
	/*@ManyToOne
	@JoinColumn(name = "id_service",
                nullable = false,
                foreignKey = @ForeignKey(name = "FK_appointment_service")
               )*/

	@ManyToOne
	@JoinColumn(name = "id_client",
                nullable = false,
                foreignKey = @ForeignKey(name = "FK_appointment_client ")
               )
	private User client;
	@Column(columnDefinition = "ENUM('PENDING', 'CHECKED', 'ABSENCE')")
    @Enumerated(EnumType.STRING)
	private AppointmentStatusType status = AppointmentStatusType.PENDING;
	
	public Appointment() {
		// TODO Auto-generated constructor stub
	}
	
	public Appointment(Date date, Time time, User client) {
		super();
		this.date = date;
		this.time = time;
		
		this.client = client;
		this.status = AppointmentStatusType.PENDING;
	}


	public Appointment(int id, Date date, Time time, User client) {
		super();
		this.id = id;
		this.date = date;
		this.time = time;
		
		this.client = client;
		this.status = AppointmentStatusType.PENDING;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Time getTime() {
		return time;
	}
	public void setTime(Time time) {
		this.time = time;
	}
	
    


	public User getClient() {
		return client;
	}


	public void setClient(User client) {
		this.client = client;
	}

	public AppointmentStatusType getStatus() {
		return status;
	}

	public void setStatus(AppointmentStatusType status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", date=" + date + ", time=" + time +  ", client="
				+ client + ", status=" + status + "]";
	}

	

	
}
