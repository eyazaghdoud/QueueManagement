package controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entities.Service;
import services.ServiceServicesImpl;

@RestController
@RequestMapping(path = "/service")
@CrossOrigin(origins= "*", allowedHeaders="*")
public class ServiceController {
	
	@Autowired
	private ServiceServicesImpl serviceServices;

	
	public void setServiceServices(ServiceServicesImpl serviceServices) {
		this.serviceServices = serviceServices;
	}

	@PostMapping("/new_service")
	public String addService(@RequestBody entities.Service service) {	
		return serviceServices.addService(service);
	}
	
	@PostMapping("/delete_service")
	public String deleteService(@RequestBody int id) {	
		return serviceServices.deleteService(id);
	}
	
	@PostMapping("/update_service")
	public String updateService(@RequestBody entities.Service service) {	
		return serviceServices.updateService(service);
	}
	@PostMapping("/single_service")
	public Optional<Service> singleService(@RequestBody String libel) {	
		return serviceServices.findByLibel(libel);
	}
	
	@GetMapping("/all_services")
	public List<Service> allServices() {	
		return serviceServices.findAllServices();
	}
	

}
