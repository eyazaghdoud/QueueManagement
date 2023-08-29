package repositories;

import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import entities.Appointment;
import entities.Appointment.AppointmentStatusType;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment, Integer>{
	
	@Query("SELECT a FROM appointment a WHERE a.client.id = ?1")
	List<Appointment> findByClient(int id);
	
	@Query("SELECT a FROM appointment a WHERE a.date = ?1")
	List<Appointment> findByDate(Date date);
	@Query("SELECT a FROM appointment a WHERE a.client.id = ?1 and a.status=?2")
	Optional<Appointment> findByClientAndStatus(int idClient, AppointmentStatusType status);
	
	@Query("SELECT a FROM appointment a WHERE a.date = ?1 AND a.time=?2")
	Optional<Appointment> findSingleAppointment(Date date, Time time);
	
	

}
