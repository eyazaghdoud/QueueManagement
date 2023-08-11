package Interfaces;

import java.util.List;

import entities.Feedback;
import entities.Feedback.FeedbackType;

public interface FeedbackServices {

	public String giveFeedback(Feedback f);
	public String changeFeedback(Feedback f);
	public List<Feedback> getAllFedbacks();
	public List<Feedback> getFeedbacksByType(FeedbackType feedback);
}
