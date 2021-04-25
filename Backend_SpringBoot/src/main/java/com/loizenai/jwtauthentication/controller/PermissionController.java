package com.loizenai.jwtauthentication.controller;
import com.loizenai.jwtauthentication.message.request.LoginForm;
import com.loizenai.jwtauthentication.model.User;
import com.loizenai.jwtauthentication.repository.PermissionRepository;
import com.loizenai.jwtauthentication.model.Permission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.validation.Valid;
import java.security.Certificate;
import java.security.Principal;
import java.util.List;

@RequestMapping("/api/permission")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class PermissionController {

    private final PermissionRepository permissionRepository;

    public PermissionController(PermissionRepository permissionRepository) {
        this.permissionRepository = permissionRepository;
    }

    @GetMapping("/show")
    public List<Permission> getPermission() {
        return (List<Permission>) permissionRepository.findAll();
    }
    @PostMapping("/add")
    void addPermission(@RequestBody Permission permission) {

        permission.setName(getCurrentUsername());
        permissionRepository.save(permission);
    }

    private String getCurrentUsername() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            return ((UserDetails) principal).getUsername();
        }
        if (principal instanceof Principal) {
            return ((Principal) principal).getName();
        }
        return String.valueOf(principal);
    }

}
