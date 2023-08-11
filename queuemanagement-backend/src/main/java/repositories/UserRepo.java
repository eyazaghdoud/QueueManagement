package repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import entities.User;
import entities.User.RoleType;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	
	
	
	@Query("SELECT u FROM user u WHERE u.email = ?1")
	Optional<User> findByEmail(String email);
	
	@Query("SELECT u FROM user u WHERE u.role = ?1")
    List<User> findByRole(RoleType role);
	
	@Query("SELECT u FROM user u WHERE u.phoneNumber = ?1")
    Optional<User> findByPhoneNumber(int number);
	
	
    

}
