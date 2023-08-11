package repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Service;

public interface ServiceRepo extends JpaRepository<Service, Integer>{
	
	public Optional<Service> findByLibel(String libel);

}
