package Interfaces;

import java.util.List;
import java.util.Optional;

import entities.Service;

public interface ServiceServices {
	
	public String addService(Service s);
	public String deleteService(int id);
	public String updateService(Service s);
	public List<Service> findAllServices();
	public Optional<Service> findByLibel(String libel);

}
