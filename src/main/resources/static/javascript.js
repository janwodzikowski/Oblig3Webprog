var antallFeil = document.getElementById("antallFeil");

$(function() {hentData()})
function riktigInput() {
    $("#antallF").html("");
    $("#fornavnF").html("");
    $("#etternavnF").html("");
    $("#telefonnrF").html("");
    $("#epostF").html("");

    let gyldig = true;

    let film = $("#film").val();
    if (film === "velgFilm") {
        gyldig = false;
    }
    else {
        antallFeil.textContent = ""
    }

    let antall = $("#antall").val();
    if (isNaN(antall) || antall <= 0) {
        antallFeil.textContent = "Skrive noe inn i antall";
        gyldig = false;
    } else {
        antallFeil.textContent = "";
    }

    let fornavn = $("#fornavn").val();
    if (!/^[a-zA-Z]+$/.test(fornavn)) {
        fornavnFeil.textContent = "Skrive noe inn i fornavnet";
        gyldig = false;
    } else {
        fornavnFeil.textContent = "";
    }

    let etternavn = $("#etternavn").val();
    if (!/^[a-zA-Z]+$/.test(etternavn)) {
        etternavnFeil.textContent = "Skrive noe inn i etternavnet";
        gyldig = false;
    } else {
        etternavnFeil.textContent = "";
    }

    let telefonnr = $("#telefonnr").val();
    if ((telefonnr.replace(/\s/g, "").length !== 8)) { // sjekker om telefonnr uten mellomrom har en lengde på 8
        telefonnrFeil.textContent = "Skrive et gyldig telefonnr";
        gyldig = false;
    } else {
        telefonnrFeil.textContent = "";
    }

    let epost = $("#epost").val();
    if (epost.trim().length === 0) { // sjekker at lengden på inputet ikke er 0
        epostFeil.textContent = "Skriv inn en e-postadresse";
        gyldig = false;
    } else if (epost.includes(" ") || !epost.includes("@")) { // sørger for at eposten ikke har mellomrom og har en @ i seg
        epostFeil.textContent = "Skriv inn en gyldig e-postadresse";
        gyldig = false;
    } else {
        epostFeil.textContent = "";
    }

    if (gyldig) {
        const kunde = {
            film: $("#film").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefonnr: $("#telefonnr").val(),
            epost: $("#epost").val()
        };
        $.post("/lagre", kunde, function (){
            hentData();
        });
    }

}

function hentData() {
    $.get("/hentData", function (data) {
        utTabell(data);
    });
}

function utTabell(kunde) {
    let ut = "<table class='table table-striped'><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>Epost</th></tr>";
    for (const enKunde of kunde) {
        ut += "<tr>" +
            "<td>" + enKunde.film + "</td>" +
            "<td>" + enKunde.antall + "</td>" +
            "<td>" + enKunde.fornavn + "</td>" +
            "<td>" + enKunde.etternavn + "</td>" +
            "<td>" + enKunde.telefonnr + "</td>" +
            "<td>" + enKunde.epost + "</td></tr>";
    }
    ut += "</table>";
    $("#billettTabell").html(ut);

    $("#film").val("Velg film her");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}

function slettData() {
    $.get("/slettBilletter", function () {
        hentData();
    });
}