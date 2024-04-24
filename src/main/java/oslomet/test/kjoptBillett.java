package oslomet.test;

public class kjoptBillett {
    private String typeFilm;
    private int antall;
    private String fornavn;
    private String etternavn;
    private int telefon;
    private String epost;

    public kjoptBillett(int antall, String fornavn, String etternavn, int telefon, String epost, String typeFilm) {
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefon = telefon;
        this.epost = epost;
        this.typeFilm = typeFilm;
    }
    public kjoptBillett(){}

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

    public int getTelefon() {
        return telefon;
    }

    public void setTelefon(int telefon) {
        this.telefon = telefon;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
    public String getTypeFilm() {
        return typeFilm;
    }

    public void setTypeFilm(String typeFilm) {
        this.typeFilm = typeFilm;
    }
}
