package repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.VirtualTicket;

public interface VirtualTicketRepo extends JpaRepository<VirtualTicket, Integer>{

}
