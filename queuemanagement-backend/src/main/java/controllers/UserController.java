package controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Interfaces.UserServices;
import dto.ChangePwdRequest;
import dto.ResetPwdRequest;
import dto.UpdateRoleRequest;
import dto.UpdateUserInfoRequest;
import entities.User;
import entities.User.RoleType;

@RestController
@RequestMapping(path="/user")
public class UserController {
	
	@Autowired
	private UserServices userServices;
	
	
	public void setUserServices(UserServices userServices) {
		this.userServices = userServices;
	}
	
	@PostMapping("/new_user")
	public String addUser(@RequestBody User user) {	
		return userServices.addUser(user);
	}
	
	@PostMapping("/update_user_info")
	public String updateUserInfo(@RequestBody UpdateUserInfoRequest request) {	
		return userServices.updateUser(request);
	}
	
	@PostMapping("/delete_user")
	public String deleteUser(@RequestBody int id) {	
		return userServices.deleteUser(id);
	}
	
	@GetMapping("/all_users")
	public List<User> getAllUsers() {	
	    System.out.print("here");
		return userServices.findAllUsers();
	}
	
	@GetMapping("/all_users_by_role")
	public List<User> getUsersByRole(@RequestBody RoleType role) {	
		return userServices.findAllByRole(role);
	}
	
	@GetMapping("/single_user")
	public Optional<User> getFingleUser(@RequestBody String email) {	
		return userServices.selectByEmail(email);
	}


	/*change employee roles reserved for admin auth*/
	@PostMapping("/change_user_role")
	public String changeUserRole(@RequestBody UpdateRoleRequest request) {	
		return userServices.changeRole(request);
	}
	
	/* change password */
	@PostMapping("/forgot_password")
	public String changePassword(@RequestBody ChangePwdRequest request) {	
		return userServices.changePassword(request);
	}
	
	/* reset password */
	@PostMapping("/reset_password")
	public String resetPassword(@RequestBody ResetPwdRequest request) {	
		return userServices.resetPassword(request);
	}
	
}
