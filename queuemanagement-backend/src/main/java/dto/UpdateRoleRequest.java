package dto;

import entities.User.RoleType;

public class UpdateRoleRequest {
	
	private int idAdmin;
	private int idEmploye;
	private RoleType oldRole;
	private RoleType newRole;
	
	public UpdateRoleRequest() {
		// TODO Auto-generated constructor stub
	}

	public int getIdAdmin() {
		return idAdmin;
	}

	public void setIdAdmin(int idAdmin) {
		this.idAdmin = idAdmin;
	}

	public int getIdEmploye() {
		return idEmploye;
	}

	public void setIdEmploye(int idEmploye) {
		this.idEmploye = idEmploye;
	}

	public RoleType getOldRole() {
		return oldRole;
	}

	public void setOldRole(RoleType oldRole) {
		this.oldRole = oldRole;
	}

	public RoleType getNewRole() {
		return newRole;
	}

	public void setNewRole(RoleType newRole) {
		this.newRole = newRole;
	}
	
	

}
