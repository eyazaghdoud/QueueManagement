package dto;

import java.sql.Date;
import java.sql.Time;

public class UpdateAppInfoRequest {
	private int id;
	private Date date;
	private Time time;
	
	public UpdateAppInfoRequest() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
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
	
	
	
	

}
