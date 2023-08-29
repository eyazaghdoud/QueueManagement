package security;


import repositories.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import entities.User;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class Authentication implements AuthenticationManager {
    @Autowired
    private UserRepo userRepo;

    public void setRepo(UserRepo repo){
        this.userRepo= repo;
    }

    @Override
    public org.springframework.security.core.Authentication authenticate(org.springframework.security.core.Authentication authentication) throws AuthenticationException {

        String username = authentication.getName();
        String password = authentication.getCredentials().toString();
        Optional<User> u = userRepo.selectByEmail(username);
        if (u.isPresent() && password.equals(u.get().getPassword())){
            System.out.println("user found");
            return new UsernamePasswordAuthenticationToken(
                   username, password, new ArrayList<>());
        }
        else {System.out.println("user not found");
            return null;}
    }
}
