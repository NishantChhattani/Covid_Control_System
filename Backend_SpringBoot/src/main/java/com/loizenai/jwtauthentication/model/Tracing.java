package com.loizenai.jwtauthentication.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tracing")
public class Tracing {
    @Id
    private String id;
    private  String email;
    private String name;
    private  int room;
    private  String Drivername;
    private  int drivercontact;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRoom() {
        return room;
    }

    public void setRoom(int room) {
        this.room = room;
    }

    public String getDrivername() {
        return Drivername;
    }

    public void setDrivername(String drivername) {
        Drivername = drivername;
    }

    public int getDrivercontact() {
        return drivercontact;
    }

    public void setDrivercontact(int drivercontact) {
        this.drivercontact = drivercontact;
    }




    }

