const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
];

function csatlakozasMajus(honap) {
    let majus = [];
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.substring(5, 7) == honap) {
            majus.push(EuropaiUnio[i].orszag);
        }
    }
    return majus;
}

function utolsoCsatlakozas() {
    const utolso = EuropaiUnio.reduce(
        (elozo, aktualis) => {
            return elozo.csatlakozas > aktualis.csatlakozas ? elozo : aktualis
        }
    );
    const utolsoOrszag = utolso.orszag;
    return utolsoOrszag;
}

function kiMelyikEvbenCsatlakozott() {
    let tombEvek = [];

    for (let i = 0; i < EuropaiUnio.length; i++) {
        tombEvek.push(EuropaiUnio[i].csatlakozas.substr(0, 4));
    }

    const darab = {};

    for (let j = 0; j < tombEvek.length; j++) {
        darab[tombEvek[j]] = (darab[tombEvek[j]] || 0) + 1;
    }

    document.write("Az europai uniohoz melyik évben hányan csatlakoztak: ");
    for (const kulcs in darab) {
        document.write(` Év: ${kulcs} = ${darab[kulcs]} db ország,`);
    }
}

function csatlakozasEve(ev) {
    let melyikEv = [];
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.startsWith(ev)) {
            melyikEv.push(EuropaiUnio[i].orszag);
        }
    }
    return melyikEv;
}

function csatlakozottMarAzEuhozE(orszag) {
    let csatlakozott = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag == orszag) {
            csatlakozott = true;
        }
    }
    return csatlakozott;
}

function csatlakozottIgazHamis(logikai, igazUzenet, hamisUzenet) {
    if (logikai == true) {
        document.write(igazUzenet);
    }
    else {
        document.write(hamisUzenet);
    }
}


document.write("Az europai uniohoz májusban hónapban csatlakozott országok: " + csatlakozasMajus("05"));
document.write("<hr>");

document.write("Az europai uniohoz legújabb tagja: " + utolsoCsatlakozas() + ".");
document.write("<hr>");

kiMelyikEvbenCsatlakozott();
document.write("<hr>");

let melyikEvreVagyokKivancsi = String(2004);
document.write(`Az europai uniohz ${melyikEvreVagyokKivancsi} csatlakozott országok: ${csatlakozasEve(melyikEvreVagyokKivancsi)} `);
document.write("<hr>");

let orszagNeve = "Spanyolország";
csatlakozottIgazHamis(csatlakozottMarAzEuhozE(orszagNeve), `${orszagNeve} csatlakozott az EU-hoz`, `${orszagNeve} nem csatlakozott az EU-hoz`);
document.write("<hr>");