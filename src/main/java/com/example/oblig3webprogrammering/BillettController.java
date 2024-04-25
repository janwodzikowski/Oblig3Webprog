package com.example.oblig3webprogrammering;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettController {

    @Autowired
    BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreBilletter(Billett nyBillett){
        rep.lagreBillett(nyBillett); }

    @GetMapping("/hentData")
    public List<Billett> hentData(){
        return rep.hentData(); }

    @GetMapping("/slettBilletter")
    public void slettBilletter(){
        rep.slettBilletter();
    }
}