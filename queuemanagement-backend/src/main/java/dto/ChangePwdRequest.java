package dto;

public class ChangePwdRequest {

	private int id;
	private String oldPwd;
	private String newPwd;
	private String confirmNewPwd;
	//code
	
	public ChangePwdRequest() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}


	public String getOldPwd() {
		return oldPwd;
	}

	public void setOldPwd(String oldPwd) {
		this.oldPwd = oldPwd;
	}

	public String getNewPwd() {
		return newPwd;
	}

	public void setNewPwd(String newPwd) {
		this.newPwd = newPwd;
	}

	public String getConfirmNewPwd() {
		return confirmNewPwd;
	}

	public void setConfirmNewPwd(String confirmNewPwd) {
		this.confirmNewPwd = confirmNewPwd;
	}
	
	
	
}
