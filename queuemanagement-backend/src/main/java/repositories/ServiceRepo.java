package repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import entities.Service;

public interface ServiceRepo extends JpaRepository<Service, Integer>{
	@Query("SELECT s FROM Service s WHERE s.libel = ?1")
	public Optional<Service> findByLibel(String libel);

}
