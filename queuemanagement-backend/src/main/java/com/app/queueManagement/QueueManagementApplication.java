package com.app.queueManagement;

//import java.util.List;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//import entities.VirtualQueue;
//import entities.VirtualTicket;



@SpringBootApplication
@EntityScan(basePackages = {"entities"})
@ComponentScan(basePackages = {"controllers", "services", "security"})
@EnableJpaRepositories("repositories")
public class QueueManagementApplication {

	

	public static void main(String[] args) {
		SpringApplication.run(QueueManagementApplication.class, args);
		/*VirtualTicket t = new VirtualTicket(1, null, null);
		VirtualQueue queue = new VirtualQueue();
		queue.offer(t);
		
		System.out.println(queue.peek());
		System.out.println(queue.size());*/
		/*UserServicesImpl us = new UserServicesImpl();
		
		System.out.print(us.selectByEmail("eya@eya"));*/
		
	}

}
