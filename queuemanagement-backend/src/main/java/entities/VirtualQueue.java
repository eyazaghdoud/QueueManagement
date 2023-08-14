package entities;

import java.util.AbstractQueue;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class VirtualQueue extends AbstractQueue<VirtualTicket>{

	 private List<VirtualTicket> elements;
	 /*
	 private Date date; 
	 private int totalTickets;
	 private int totalTreatedTickets;
	 private int totalAbandonedTickets;
	 
	 private Service mostRequestedService;
	  */
	 public final int averageWaitingTime = 15;

	    public VirtualQueue() {
	      this.elements = new LinkedList<VirtualTicket>();
	    }
	    
	public boolean offer(VirtualTicket t) {
		// TODO Auto-generated method stub
		 if(t == null) return false;
		    elements.add(t);
		    return true;
	}

	public VirtualTicket poll() {
		// TODO Auto-generated method stub
		Iterator<VirtualTicket> iter = elements.iterator();
		VirtualTicket t = iter.next();
	    if(t != null){
	        iter.remove();
	        return t;
	    }
	    return null;
	}

	public VirtualTicket peek() {
		// TODO Auto-generated method stub
		 return elements.get(0);
	}

	@Override
	public Iterator<VirtualTicket> iterator() {
		// TODO Auto-generated method stub
		 return elements.iterator();
	}

	@Override
	public int size() {
		// TODO Auto-generated method stub
		 return elements.size();
	}

	public List<VirtualTicket> getElements() {
		return elements;
	}

	public void setElements(List<VirtualTicket> elements) {
		this.elements = elements;
	}
	
	public int elementsBefore(VirtualTicket ticket) {
		int index=0;
		for (VirtualTicket element : elements) {
            if (element.getNumber()==ticket.getNumber()) {
                break;
            } else {
            	 index++;
            }
        }
        return index;
	}

}

