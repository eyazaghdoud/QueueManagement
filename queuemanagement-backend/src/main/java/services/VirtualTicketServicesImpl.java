package services;

import java.sql.Time;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
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
			if (ticketRepo.findOneByStatus(StatusType.TREATING).isPresent()) {
			this.queue.getElements().add(ticketRepo.findOneByStatus(StatusType.TREATING).get());
			}
			//this.queue.addAll(ticketRepo.findAllByStatus(StatusType.WAITING));

			this.queue.getElements().addAll(((ticketRepo.findAllByStatus(StatusType.WAITING))));
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
        
		if (t.get().getStatus().equals(StatusType.TREATING)) {
		t.get().setStatus(StatusType.TREATED);
		queue.remove();
		} 
		queue.peek().setStatus(StatusType.TREATING);
		LocalTime currentTime = LocalTime.now();
		queue.peek().setStartTime(Time.valueOf(currentTime));
		ticketRepo.save(queue.peek());
		System.out.println(queue);
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
		if (t.get().getStatus().equals(StatusType.TREATED)) {
			info.setTicketsAlreadyPending(-1);
			info.setWaitingTime(0);
			System.out.println("ticket already treated");
		}
		else if (t.get().getStatus().equals(StatusType.TREATING)) {
        	info.setTicketsAlreadyPending(0);
        	info.setWaitingTime(0);
			System.out.println("ticket being treated");
        } else {
		info.setTicketsAlreadyPending(queue.elementsBefore(t.get()));
		info.setWaitingTime(countWaitingTime(t.get()));
        }
		
		
		System.out.println(queue.getElements());
		System.out.println(queue.elementsBefore(t.get()));
		
		return info;
	}

	@Override
	public int countWaitingTime(VirtualTicket ticket) {
		int elementsBefore = queue.elementsBefore(ticket);
		int differenceInMinutes=0;
		if (elementsBefore==0) {
			
			System.out.println("this ticket is being treated");
		  
			return 0;
		}
		else if (queue.peek().getStartTime()==null){
			differenceInMinutes = elementsBefore*queue.averageWaitingTime;
		} else {
			Time startTime = queue.peek().getStartTime(); 

			//LocalTime localStartTime = startTime.toLocalTime();
			LocalTime localEndTime = startTime.toLocalTime().plusMinutes(queue.averageWaitingTime);
			System.out.println(localEndTime);
			LocalTime currentTime = LocalTime.now();

			long minutesDifference = ChronoUnit.MINUTES.between(currentTime, localEndTime);
			System.out.println(minutesDifference);
			differenceInMinutes = (int) minutesDifference + (elementsBefore-1)*queue.averageWaitingTime;
			System.out.println(differenceInMinutes);
		}
		
		return differenceInMinutes;
	}
	
	

}
