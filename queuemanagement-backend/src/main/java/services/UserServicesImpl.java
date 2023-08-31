package services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Interfaces.UserServices;
import dto.ChangePwdRequest;
import dto.CodeConfirmationRequest;
import dto.DeleteUserRequest;
import dto.ResetPwdRequest;
import dto.UpdateRoleRequest;
import dto.UpdateUserInfoRequest;
import entities.User;
import entities.User.RoleType;
import repositories.UserRepo;
import utils.SmsUtils;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
@Transactional
public class UserServicesImpl implements UserServices {

	@Autowired
	private UserRepo userRepo;

	public UserServicesImpl() {
		// TODO Auto-generated constructor stub
	}
	
	public void setUserRepo(UserRepo userRepo) {
        this.userRepo = userRepo;
    }
	
	public String addUser(User u) {

		if (u == null) {
			return ("null user cannot be saved");
		} else if (userRepo.selectByEmail(u.getEmail()).isPresent()) {
			return ("user with this email already exists");

		} else if (userRepo.findByPhoneNumber(u.getPhoneNumber()).isPresent()) {
			return ("user with this phone number already exists");
		}
		userRepo.save(u);
		return ("new user saved");
	}

	@Override
	public String deleteUser(int id) {
		Optional<User> u = userRepo.findById(id);
		if (u.isEmpty()) {
			return ("cannot delete a nonexistent user");
		}
		userRepo.delete(u.get());
		return ("user deleted successfully");

	}
	
	@Override
	public String adminDeleteUser(DeleteUserRequest deleteUserRequest) {
		Optional<User> admin = userRepo.findById(deleteUserRequest.getIdAdmin());
		if (admin.isPresent()) {
			Optional<User> user = userRepo.findById(deleteUserRequest.getIdUser());
			if(user.isPresent()) {
				
				userRepo.delete(user.get());
				return ("user deleted");
			}
		} 
		return ("error");
		
	}

	@Override
	public String updateUser(UpdateUserInfoRequest updateUserRequest) {
		/*
		 * userRepo.update(u.getFirstName(), u.getLastName(), u.getEmail(),
		 * u.getPhoneNumber(), u.getRole().toString(), u.getId());
		 */
		Optional<User> user = userRepo.findById(updateUserRequest.getId());
		if (user.isEmpty()) {
			return ("cannot update a nonexistent user");
		}  else if (!updateUserRequest.getEmail().equals(user.get().getEmail())
				&& userRepo.selectByEmail(updateUserRequest.getEmail()).isPresent()
				) {
			return ("user with this email already exists");

		} else if (updateUserRequest.getPhoneNumber()!=user.get().getPhoneNumber()
				&& userRepo.findByPhoneNumber(updateUserRequest.getPhoneNumber()).isPresent()) {
			return ("user with this phone number already exists");
		}
		user.get().setFirstName(updateUserRequest.getFirstName());
		user.get().setLastName(updateUserRequest.getLastName());
		user.get().setEmail(updateUserRequest.getEmail());
		user.get().setPhoneNumber(updateUserRequest.getPhoneNumber());
		userRepo.save(user.get());
		return ("user info updated successfully");

	}

	@Override
	public List<User> findAllByRole(RoleType role) {
		return userRepo.findByRole(role);
	}

	@Override
	public Optional<User> selectByEmail(String email) {
		System.out.println(userRepo.selectByEmail(email));
		return userRepo.selectByEmail(email);
	}

	@Override
	public String changePassword(ChangePwdRequest request) {
		Optional<User> u = userRepo.findById(request.getId());
		if (u.isPresent()) {
			if (u.get().getPassword().equals(request.getOldPwd())) {
				if (request.getNewPwd().equals(request.getConfirmNewPwd())) {
				u.get().setPassword(request.getNewPwd());
				userRepo.save(u.get());
				return ("password changed successfully");
				} else {
					return ("err: confirmation password and new password are not the same");
				}
				
			} else {
				return ("wrong current password");
			}

		} else {
			return ("nonexistent user");
		}
	}

	@Override
	public List<User> findAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public String resetPassword(ResetPwdRequest request) {
		Optional<User> user = userRepo.findByPhoneNumber(request.getPhoneNumber());	
		if(user.isPresent()) {
			                     /* to implement */
			// once the user found, a code via email or sms will be sent to them
						
		
			// code verification: if code correct rest of function else return wrong code
		
			if (request.getNewPwd().equals(request.getConfirmNewPwd())) {
				user.get().setPassword(request.getNewPwd());
				userRepo.save(user.get());
				return ("password has been reset");
			}
			else {
				return ("passwords don't match");
			}
		
		}
		return ("error");
	}

	@Override
	public String sendSMS(int to) {

		Optional<User> user = userRepo.findByPhoneNumber(to);	
		if (user.isPresent()) {
		int randomCode = (int) ((Math.random() * (5999 - 1001)) + 1001);
		user.get().setCode(randomCode);
		userRepo.save(user.get());
		
        Twilio.init(SmsUtils.TWILIO_ACCOUNT_SID, SmsUtils.TWILIO_AUTH_TOKEN);

        Message.creator(new PhoneNumber("+216"+to),
                        new PhoneNumber(SmsUtils.TWILIO_NUMBER), randomCode+"").create();

        return ("Message sent successfully");
		} else {
			return("no user with this number");
		}
}
	@Override
	public String codeConfirmation(CodeConfirmationRequest request) {
		Optional<User> user = userRepo.findByPhoneNumber(request.getPhoneNumber());	
		if(user.get().getCode()==request.getCode()) {
			return ("wright code");
		} else {
			return("wrong code");
		}
		
	}
	@Override
	public String changeRole(UpdateRoleRequest updateRoleRequest) {
		Optional<User> admin = userRepo.findById(updateRoleRequest.getIdAdmin());
		if (admin.isPresent()) {
			Optional<User> employee = userRepo.findById(updateRoleRequest.getIdEmploye());
			if(employee.isPresent()) {
				employee.get().setRole(updateRoleRequest.getNewRole());
				userRepo.save(employee.get());
				return ("employee role changed");
			}
		}
		return ("error");
	}

	@Override
	public List<User> findAllEmployees() {
		return userRepo.findEmployees();
	
	}
}
