package oslomet.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class BillettRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreKjøp(kjoptBillett billett){
        String sql = "INSERT INTO Billetter (typeFilm, antall, fornavn, etternavn, telefon, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, billett.getTypeFilm(),billett.getAntall(),billett.getFornavn(),
                billett.getEtternavn(),billett.getTelefon(),billett.getEpost());
    }
    public List<kjoptBillett> hentAlleBilletter(){
        String sql = "SELECT * FROM Billetter" +
                " ORDER BY etternavn";
        List<kjoptBillett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(kjoptBillett.class));
        return alleBilletter;
    }
    public void slettAlleBilletter(){
        String sql = "DELETE FROM Billetter";
        db.update(sql);
    }
}