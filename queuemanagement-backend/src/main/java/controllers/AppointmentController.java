package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Interfaces.AppointmentServices;
import entities.Appointment;

@RestController
@RequestMapping(path="/appointment")
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
	
	@GetMapping("/all_appointments")
	public List<Appointment> getAllAppointments() {	
		return appointmentService.findAllAppointments();
	}
	
	@GetMapping("/client_total_appointments")
	public List<Appointment> getAllAppointmentsByClient(@RequestBody int idClient) {	
		return appointmentService.findByClient(idClient);
	}
	
	
	
}
