package controllers;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Interfaces.AppointmentServices;
import entities.Appointment;

@RestController
@RequestMapping(path="/appointment")
@CrossOrigin(origins= "*", allowedHeaders="*")
public class AppointmentController {
	
	@Autowired
	private AppointmentServices appointmentService;

	public void setAppointmentService(AppointmentServices appointmentService) {
		this.appointmentService = appointmentService;
	}

	@PostMapping("/book_appointment")
	public String bookAppointment(@RequestBody Appointment a) {	
		return appointmentService.addAppointment(a);
	}
	
	@PostMapping("/cancel_appointment")
	public String cancelAppointment(@RequestBody int id) {	
		return appointmentService.deleteAppointment(id);
	}
	
	/*reserved for web operator auth*/
	@PostMapping("/enclose_appointment")
	public String encloseAppointment(@RequestBody int id) {	
		return appointmentService.encloseAppointment(id);
	}
	@PostMapping("/mark_absence_appointment")
	public String markAbsenceAppointment(@RequestBody int id) {	
		return appointmentService.markAbsenceAppointment(id);
	}
	
	@GetMapping("/all_appointments")
	public List<Appointment> getAllAppointments() {	
		return appointmentService.findAllAppointments();
	}
	
	@PostMapping("/appointments_per_day")
	public List<Appointment> getAppointmentsPerDay(@RequestBody Date date) {	
		return appointmentService.findByDate(date);
	}
	
	@PostMapping("/client_total_appointments")
	public List<Appointment> getAllAppointmentsByClient(@RequestBody int idClient) {	
		return appointmentService.findByClient(idClient);
	}
	@PostMapping("/client_pending_appointment")
	public Optional<Appointment> getPendingAppointmentByClient(@RequestBody int idClient) {	
		return appointmentService.getPendingAppointment(idClient);
	}
	
	
	
}
