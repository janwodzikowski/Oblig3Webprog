package com.example.oblig3webprogrammering;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett billett){
        String sql ="INSERT INTO Billett (film,antall,fornavn,etternavn,telefonnr,epost) VALUES(?,?,?,?,?,?)";
        db.update(sql,billett.getFilm(),billett.getAntall(),billett.getFornavn(),billett.getEtternavn(),
                billett.getTelefonnr(),billett.getEpost());
    }

    public List<Billett> hentData() {
        String sql = "SELECT * FROM Billett";
        return db.query(sql, new BeanPropertyRowMapper(Billett.class));
    }

    public void slettBilletter() {
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}
