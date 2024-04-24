$(document).ready(function (){
    $("#kjopBillett").click(function (){
        /* SjekkNummer();
         SjekkFnavn();
         SjekkEnavn();
         SjekkTlfnr();
         SjekkEpost();

         */


        if (SjekkNummer() === true & SjekkFnavn() === true & SjekkEnavn() === true & SjekkTlfnr() === true & SjekkEpost() === true){
            register();
        }
        else {
            altIOrden = false;
        }
    })
    function hentAlle(){
        $.get("/hentAlle", function (kjopteBilletter){
            formater(kjopteBilletter);
        })
    }
    function formater(kjopteBilletter){
        let ut = "<table class='table table-bordered'><tr><th>Type film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" + "<th>Telefon</th><th>Epost</th></tr>";
        for (const billett of kjopteBilletter){
            ut += "<tr><td>" + billett.typeFilm + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td><td>" + billett.etternavn +
                "</td><td>" + billett.telefon + "</td><td>" + billett.epost + "</td></tr>";
        }
        ut += "</table>";
        // HER SENDER VI UT LISTEN AV SOLGTE BILLETTER!
        $("#visBilletter").html(ut);
    }
    $("#slettAlt").click(function (){
        $.post("/slettAlt", function (){
            hentAlle();
        })
    })
    function SjekkNummer(){
        let utNummer = "tallet kan ikke være mindre enn en.";
        antallNr = parseInt($("#antall").val());
        if (antallNr < 1 || $("#antall").val().length === 0){
            $("#antallFeilmld").html(utNummer);
            return false;
        }
        else{
            $("#antallFeilmld").html("");
            return true;
        }
    }
    function SjekkFnavn() {
        let utFnavnFeil = "Du må skrive noe inn i Fornavn.";
        if ($("#Fnavn").val().length === 0) {
            $("#FnavnFeilmld").html(utFnavnFeil);
            return false;
        }
        else{
            $("#FnavnFeilmld").html("");
            return true;
        }
    }
    function SjekkEnavn() {
        let utEnavnFeil = "Du må skrive noe inn i Etternavn.";
        if ($("#Enavn").val().length === 0) {
            $("#EnavnFeilmld").html(utEnavnFeil);
            return false;
        }
        else{
            $("#EnavnFeilmld").html("");
            return true;
        }
    }
    function SjekkTlfnr(){
        let utFeilTlfnr = "Dette er ikke et gyldig norsk telefonnr.";
        let tlfString = parseInt($("#tlfNr"));
        if (tlfString < 10000000 || tlfString > 99999999 || $("#tlfNr").val().length === 0 ){
            $("#tlfNrFeilmld").html(utFeilTlfnr);
            console.log("noe feil med tlf")
            return false;
        }
        else{
            $("#tlfNrFeilmld").html("");
            return true;
        }
    }
    function SjekkEpost(){
        const utEpostFeil = "Dette er ikke en godkjent Epost.";
        const sjekkEpost = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let sjekk = sjekkEpost.test($("#mail").val());
        if (sjekk === false){
            $("#mailFeilmld").html(utEpostFeil);
            return false;
        }
        else{
            $("#mailFeilmld").html("");
            return true;
        }
    }
    function register(){
        const kjoptBillett = {
            typeFilm : $("#typeFilm").val(),
            antall : $("#antall").val(),
            fornavn : $("#Fnavn").val(),
            etternavn : $("#Enavn").val(),
            telefon : $("#tlfNr").val(),
            epost : $("#mail").val()
        };
        $.post("/lagre", kjoptBillett, function (){
            hentAlle();
        })
    }
})