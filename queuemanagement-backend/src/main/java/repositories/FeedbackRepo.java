package repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Integer>{

}
