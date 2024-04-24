package oslomet.test;

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
    public void lagreBillett(kjoptBillett solgt){
        rep.lagreKjøp(solgt);
    }
    @PostMapping("/slettAlt")
    public void slettAlt(){
        rep.slettAlleBilletter();
    }
    @GetMapping("hentAlle")
    public List<kjoptBillett> hentAlle(){
        return rep.hentAlleBilletter();
    }
}
