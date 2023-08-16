package repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.VirtualTicket;
import entities.VirtualTicket.StatusType;

public interface VirtualTicketRepo extends JpaRepository<VirtualTicket, Integer>{
	
	public List<VirtualTicket> findAllByStatus(StatusType status);
	public Optional<VirtualTicket> findOneByStatus(StatusType status);

}
