package services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import Interfaces.ServiceServices;
import entities.Service;
import repositories.ServiceRepo;

@org.springframework.stereotype.Service
@Transactional
public class ServiceServicesImpl implements ServiceServices{

	@Autowired
	private ServiceRepo serviceRepo;
	
	public ServiceServicesImpl() {
		// TODO Auto-generated constructor stub
	}
	
	public void setServiceRepo(ServiceRepo serviceRepo) {
		this.serviceRepo = serviceRepo;
	}


	@Override
	public String addService(Service s) {
		if (serviceRepo.findByLibel(s.getLibel()).isPresent()) {
			return ("service already exists");
		}
		serviceRepo.save(s);
		return ("new service saved");
	}

	@Override
	public String deleteService(int id) {
		Optional<Service> s = serviceRepo.findById(id);
		if (s.isEmpty()) {
			return ("no service with such id");
		}
		serviceRepo.delete(s.get());
		return ("service deleted successfully");
	}
		

	@Override
	public List<Service> findAllServices() {
		return serviceRepo.findAll();
	}

	@Override
	public String updateService(Service s) {
		Optional<Service> service = serviceRepo.findById(s.getId());
		if (service.isEmpty()) {
			return ("no service with such id");
		}
		service.get().setLibel(s.getLibel());
		serviceRepo.save(service.get());
		return ("service updated successfully");
	}

}
