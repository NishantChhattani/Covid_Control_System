package com.loizenai.jwtauthentication.controller;
import com.loizenai.jwtauthentication.repository.OutingRepository;
import com.loizenai.jwtauthentication.model.Outing;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RequestMapping("/api/outing")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class OutingController {

    // standard constructors

    private final OutingRepository outingRepository;

    public OutingController(OutingRepository outingRepository) {
        this.outingRepository = outingRepository;
    }

    @GetMapping("/show")
    public List<Outing> getOuting() {
        return (List<Outing>) outingRepository.findAll();
    }
    @PostMapping("/add")
    void addOuting(@RequestBody Outing outing) {
        outingRepository.save(outing);
    }
}
