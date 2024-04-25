package com.example.oblig3webprogrammering;

public class Billett {
    private int id;
    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private String telefonnr;
    private String epost;

    public Billett(String film, int antall, String fornavn, String etternavn, String telefonnr, String epost) {
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.telefonnr = telefonnr;
        this.etternavn = etternavn;
        this.epost = epost;
    }

    public Billett(){}

    public int getid() {
        return id;
    }
    public void setid(int id) { this.id = id; }

    public String getFilm() {
        return film;
    }
    public void setFilm(String film) { this.film = film; }

    public int getAntall() {
        return antall;
    }
    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }
    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }
    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnr() {
        return telefonnr;
    }
    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }
    public void setEpost(String epost) { this.epost = epost;
    }
}