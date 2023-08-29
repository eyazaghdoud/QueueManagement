package services;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Interfaces.AppointmentServices;
import dto.UpdateAppInfoRequest;
import entities.Appointment;
import entities.Appointment.AppointmentStatusType;
import repositories.AppointmentRepo;

@Service
@Transactional
public class AppointmentServicesImpl implements AppointmentServices{

	@Autowired
	private AppointmentRepo appointmentRepo;
	

	public void setAppointmentRepo(AppointmentRepo appointmentRepo) {
		this.appointmentRepo = appointmentRepo;
	}

	@Override
	public String addAppointment(Appointment a) {
	   if (a!=null) {
		   if (appointmentRepo.findSingleAppointment(a.getDate(), a.getTime()).isPresent()){
			   return ("appointment already booked");
		   } else if (appointmentRepo.findByClient(a.getClient().getId()).size()!=0) {
			   List<Appointment> apps = appointmentRepo.findByClient(a.getClient().getId());
			   int exists = 0;
			   for (Appointment app: apps) {
				   if (app.getStatus().equals(AppointmentStatusType.PENDING)) {
					   exists=1;
					   break;
				   }
			   }
			   
		       if (exists==1) {
			   return("client have an appointment booked");  
		       } else {
		    	   appointmentRepo.save(a);
					return ("new appointment saved");
		       }
		   } 
		   else {
		   appointmentRepo.save(a);
			return ("new appointment saved");
		   }
	   }
	   else 
		   return ("cannot add null appointment");
	
	}

	@Override
	public String deleteAppointment(int id) {
		Optional<Appointment> a = appointmentRepo.findById(id);
		if(a.isEmpty()) {
			return ("nonexistent appointment");
		}
		appointmentRepo.delete(a.get());
		return ("appointment cancelled successfully");
	}

	@Override
	public String updateAppointment(UpdateAppInfoRequest updateAppRequest) {
		if (updateAppRequest==null) {
			return ("null request values");
		} 
		Optional<Appointment> a = appointmentRepo.findById(updateAppRequest.getId());
		if (a.isEmpty()) {
			return ("err: no appointment with given id");
		}
		a.get().setDate(updateAppRequest.getDate());
		a.get().setTime(updateAppRequest.getTime());
		appointmentRepo.save(a.get());
		return ("appointment info changed successfully");
	}

	/*only allowed if appointment date + time < now*/
	@Override
	public String encloseAppointment(int id) {
		Optional<Appointment> a = appointmentRepo.findById(id);
		if (a.isEmpty()) {
			return ("err: no appointment with given id");
		}
		a.get().setStatus(AppointmentStatusType.CHECKED);
		appointmentRepo.save(a.get());
		return ("appointment enclosed");
	}
	@Override
	public String markAbsenceAppointment(int id) {
		Optional<Appointment> a = appointmentRepo.findById(id);
		if (a.isEmpty()) {
			return ("err: no appointment with given id");
		}
		a.get().setStatus(AppointmentStatusType.ABSENCE);
		appointmentRepo.save(a.get());
		return ("status changed");
	}

	@Override
	public List<Appointment> findAllAppointments() {
		return appointmentRepo.findAll();
	}

	@Override
	public List<Appointment> findByDate(Date date) {
		return appointmentRepo.findByDate(date);
	}

	@Override
	public List<Appointment> findByClient(int idClient) {
		return appointmentRepo.findByClient(idClient);
	}

	@Override
	public Optional<Appointment> getPendingAppointment(int idClient) {
		// TODO Auto-generated method stub
		return appointmentRepo.findByClientAndStatus(idClient, AppointmentStatusType.PENDING);
	}

}
