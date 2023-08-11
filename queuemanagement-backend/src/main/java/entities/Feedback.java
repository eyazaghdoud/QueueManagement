package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Feedback {

	public enum FeedbackType {
		/* A = très bien
		 * B = bien
		 * C = moyen
		 * D = mauvais
		 * E = très mauvais
		 * */
		A,B,C,D,E
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@OneToOne
	@JoinColumn(name = "id_client",
	            nullable = false,
	            foreignKey = @ForeignKey(name = "FK_feedback_client")
			   )
	private User client;
	@Column(nullable = false)
	private FeedbackType feedback;
	
	public Feedback(int id, User client, FeedbackType feedback) {
		super();
		this.id = id;
		this.client = client;
		this.feedback = feedback;
	}
	
	public Feedback(User client, FeedbackType feedback) {
		super();
		this.client = client;
		this.feedback = feedback;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getClient() {
		return client;
	}

	public void setClient(User client) {
		this.client = client;
	}

	public FeedbackType getFeedback() {
		return feedback;
	}

	public void setFeedback(FeedbackType feedback) {
		this.feedback = feedback;
	}

	@Override
	public String toString() {
		return "Feedback [id=" + id + ", client=" + client + ", feedback=" + feedback + "]";
	}
	
	
	
 
}
