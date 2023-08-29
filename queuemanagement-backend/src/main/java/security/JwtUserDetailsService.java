package security;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import repositories.UserRepo;

@Service
public class JwtUserDetailsService implements UserDetailsService {


	@Autowired
	private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

    	 Optional<entities.User> u = userRepo.selectByEmail(username);
        return new User(username, u.get().getPassword(), new ArrayList<>());
    }
}