package controllers;

import dto.LoginResponse;
import dto.LoginRequest;
import entities.User;
import repositories.UserRepo;
import security.Authentication;
import security.JwtTokenUtil;
import security.JwtUserDetailsService;
import security.dto.JwtResponse;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins= "https://localhost:3000/")
public class JwtAuthenticationController {


    @Autowired
    Authentication auth;
    

    public void setAuth(Authentication auth) {
		this.auth = auth;
	}


	@Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;
    @Autowired
    UserRepo userRepo;

    @CrossOrigin(origins= "https://localhost:3000/")
    @RequestMapping(value = "/authentication", method = RequestMethod.POST)
    public ResponseEntity<?> AuthenticationService(@RequestBody LoginRequest authenticationRequest) throws Exception {

        org.springframework.security.core.Authentication auth1 = authenticate(authenticationRequest.getEmail(), authenticationRequest.getPassword());
        if (auth1 != null){
                final UserDetails userDetails = userDetailsService
                        .loadUserByUsername(authenticationRequest.getEmail());

                final String token = jwtTokenUtil.generateToken(userDetails);

                Optional<User> user = userRepo.selectByEmail(authenticationRequest.getEmail());
                LoginResponse userInfo = new LoginResponse(user.get().getId(),user.get().getEmail(), user.get().getFirstName(),
                		user.get().getLastName(), user.get().getPhoneNumber(),user.get().getRole());
                
                 return ResponseEntity.ok(new JwtResponse(token, userInfo)); 
        }
        
        else return ResponseEntity.ok(new JwtResponse("failed"));
    }
    

    private org.springframework.security.core.Authentication authenticate(String username, String password) throws Exception {
        try {
            auth.setRepo(userRepo);
            return auth.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }

    }
}