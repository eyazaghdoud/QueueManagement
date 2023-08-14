package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Interfaces.VirtualTicketServices;
import dto.TicketInfoResponse;
import entities.VirtualTicket;


@RestController
@RequestMapping("/ticket")
public class TicketController {
	
	@Autowired
	private VirtualTicketServices ticketServices;
	
	@PostMapping("/book_ticket")
	public TicketInfoResponse bookTicket(@RequestBody VirtualTicket ticket) {	
		return ticketServices.bookTicket(ticket);
	}
	
	@GetMapping("/current_ticket")
	public VirtualTicket getCurrentTicket() {	
		return ticketServices.getCurrentTicket();
	}
	
	@GetMapping("/next_ticket")
	public VirtualTicket passNextTicket() {	
		return ticketServices.passNextTicket();
	}
	
	@GetMapping("/all_booked_tickets")
	public List<VirtualTicket> getAllBookedTickets() {	
		return ticketServices.getAllBookedTickets();
	}
	
	@PostMapping("/cancel_ticket")
	public String cancelTicket(@RequestBody int id) {	
		return ticketServices.cancelTicket(id);
	}
	
	@PostMapping("/ticket_info")
	public TicketInfoResponse getTicketInfo(@RequestBody int id) {	
		return ticketServices.getTicketInfo(id);
	}
	
	

}
