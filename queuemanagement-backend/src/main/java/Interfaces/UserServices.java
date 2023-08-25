package Interfaces;

import java.util.List;
import java.util.Optional;

import dto.ChangePwdRequest;
import dto.DeleteUserRequest;
import dto.ResetPwdRequest;
import dto.UpdateRoleRequest;
import dto.UpdateUserInfoRequest;
import entities.User;
import entities.User.RoleType;


public interface UserServices {
	
	public String addUser(User u);
	public String deleteUser(int id);
	public String adminDeleteUser(DeleteUserRequest deleteUserRequest);
	public String updateUser(UpdateUserInfoRequest updateUseRequest);
	public String changeRole(UpdateRoleRequest updateRoleRequest);
	public List<User> findAllUsers();
	public List<User> findAllByRole(RoleType role);
	public List<User> findAllEmployees();
    public Optional<User> selectByEmail(String email) ;
    public String changePassword(ChangePwdRequest request);
    public String resetPassword(ResetPwdRequest request);

}
