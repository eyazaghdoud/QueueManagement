package entities;

import java.util.AbstractQueue;
import java.util.Iterator;
import java.util.LinkedList;

public class VirtualQueue extends AbstractQueue<VirtualTicket>{

	 private LinkedList<VirtualTicket> elements;
	 /*
	 private Date date; 
	 private int totalTickets;
	 private int totalTreatedTickets;
	 private int totalAbandonedTickets;
	 private int averageWaitingTime;
	 private Service mostRequestedService;
	  */

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
		 return elements.getFirst();
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

}

