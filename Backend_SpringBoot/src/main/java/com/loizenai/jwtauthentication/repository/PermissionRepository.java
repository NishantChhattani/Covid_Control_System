package com.loizenai.jwtauthentication.repository;

import com.loizenai.jwtauthentication.model.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissionRepository extends JpaRepository<Permission, Long> {}
