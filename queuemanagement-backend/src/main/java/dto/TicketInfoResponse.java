package dto;

import entities.User;

public class TicketInfoResponse {
	private int ticketNumber;
	private User client;
	private int waitingTime;
	private int ticketsAlreadyPending;
	
	public TicketInfoResponse() {
		// TODO Auto-generated constructor stub
	}

	public int getTicketNumber() {
		return ticketNumber;
	}


	public void setTicketNumber(int ticketNumber) {
		this.ticketNumber = ticketNumber;
	}

	public int getWaitingTime() {
		return waitingTime;
	}

	public void setWaitingTime(int waitingTime) {
		this.waitingTime = waitingTime;
	}

	public int getTicketsAlreadyPending() {
		return ticketsAlreadyPending;
	}

	public void setTicketsAlreadyPending(int ticketsAlreadyPending) {
		this.ticketsAlreadyPending = ticketsAlreadyPending;
	}


	public User getClient() {
		return client;
	}

	public void setClient(User client) {
		this.client = client;
	}
	
	
	

}
