package com.loizenai.jwtauthentication.model;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.Authentication;
//package com.loizenai.jwtauthentication.model.User;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.security.Principal;
import java.util.Map;

@Entity
@Table(name = "permission")
public class Permission {

    @Id
    private long pid;
    private String msg;
    private String day;
    private int duration;

    public void setName(String name) {
        this.name = name;
    }

    private String name;

    public long getPid() {
        return pid;
    }

    public void setPid(long pid) {
        this.pid = pid;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getName() {


        return name;
    }

}
