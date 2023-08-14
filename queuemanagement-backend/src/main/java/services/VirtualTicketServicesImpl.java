package services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Interfaces.VirtualTicketServices;
import dto.TicketInfoResponse;
import entities.VirtualQueue;
import entities.VirtualTicket;
import entities.VirtualTicket.StatusType;
import repositories.VirtualTicketRepo;

@Service
@Transactional
public class VirtualTicketServicesImpl implements VirtualTicketServices{

	@Autowired
	private VirtualTicketRepo ticketRepo;
	
	private VirtualQueue queue;
	
	public void setTicketRepo(VirtualTicketRepo ticketRepo) {
		this.ticketRepo = ticketRepo;
	}

	public VirtualTicketServicesImpl(VirtualTicketRepo ticketRepo) {
		this.queue = new VirtualQueue();
		if (! ticketRepo.findAll().isEmpty()) {
			//this.queue.addAll(ticketRepo.findAllByStatus(StatusType.WAITING));
			//this.queue.getElements().add((ticketRepo.findOneByStatus(StatusType.TREATING)));
			this.queue.setElements((ticketRepo.findAllByStatus(StatusType.WAITING)));
			//System.out.println(this.queue.getElements());
		}
	}


	@Override
	public TicketInfoResponse bookTicket(VirtualTicket ticket) {
		queue.offer(ticket);
		ticketRepo.save(ticket);
		return this.getTicketInfo(ticket.getNumber());
	}

	@Override
	public VirtualTicket getCurrentTicket() {
		if (queue.isEmpty()) {
			return null;
		}
		return queue.peek();
	}
	
	@Override
	public VirtualTicket passNextTicket() {
		if (queue.isEmpty()) {
			return null;
		}
		Optional<VirtualTicket> t = ticketRepo.findById(queue.peek().getNumber());
		t.get().setStatus(StatusType.TREATED);
		queue.remove();
		queue.peek().setStatus(StatusType.TREATING);
		ticketRepo.save(queue.peek());
		return queue.peek();
	}
	
	

	@Override
	public String cancelTicket(int ticketNumber) {
		Optional<VirtualTicket> t = ticketRepo.findById(queue.peek().getNumber());
		queue.remove(t.get());
		ticketRepo.delete(t.get());
		return null;
	}

	@Override
	public List<VirtualTicket> getAllBookedTickets() {
	    if (ticketRepo.findAll().isEmpty()) {
	    	return null;
	    }
		return ticketRepo.findAll();
	}

	@Override
	public TicketInfoResponse getTicketInfo(int ticketNumber) {
		Optional<VirtualTicket> t = ticketRepo.findById(ticketNumber);
		if (t.isEmpty()) {
			return null;
		}
		TicketInfoResponse info = new TicketInfoResponse();
		info.setTicketNumber(ticketNumber);
		info.setService(t.get().getService().getLibel());
		info.setClient(t.get().getClient());
		info.setTicketsAlreadyPending(queue.elementsBefore(t.get()));
		info.setWaitingTime(queue.averageWaitingTime*info.getTicketsAlreadyPending());
		System.out.println(queue.getElements());
		System.out.println(queue.elementsBefore(t.get()));
		return info;
	}

}
