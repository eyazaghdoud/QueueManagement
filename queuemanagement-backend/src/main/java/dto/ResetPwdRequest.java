package dto;

public class ResetPwdRequest {

	//private String email;
	private int phoneNumber;
	//private int code;
	private String newPwd;
	private String confirmNewPwd;
	
	/*public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}*/
	
	public ResetPwdRequest() {
		// TODO Auto-generated constructor stub
	}

	/*public String getEmail() {
		return email;
	}*/

	public int getPhoneNumber() {
		return phoneNumber;
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
