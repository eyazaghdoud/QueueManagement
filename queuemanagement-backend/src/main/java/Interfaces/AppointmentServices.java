package Interfaces;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import dto.UpdateAppInfoRequest;
import entities.Appointment;


public interface AppointmentServices {
	public String addAppointment(Appointment a);
	public String deleteAppointment(int id);
	public String updateAppointment(UpdateAppInfoRequest updateAppRequest);
	public String encloseAppointment(int idAppointment);
	public List<Appointment> findAllAppointments();
	public List<Appointment> findByDate(Date date);
    public List<Appointment> findByClient(int idClient);
    public String markAbsenceAppointment(int id);
    public Optional<Appointment> getPendingAppointment(int idClient);
    
}
