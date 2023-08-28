package Interfaces;

import java.util.List;

import dto.TicketInfoResponse;
import entities.VirtualTicket;

public interface VirtualTicketServices {
	
	public TicketInfoResponse bookTicket(VirtualTicket ticket);
	public VirtualTicket passNextTicket();
	public String cancelTicket(int ticketNumber);
	public List<VirtualTicket> getAllBookedTickets();
	public List<VirtualTicket> getWaitingTickets();
	public TicketInfoResponse getTicketInfo(int clientId);
	public VirtualTicket getCurrentTicket();
	public int countWaitingTime(VirtualTicket ticket);

}
