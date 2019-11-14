//varijable------------------------------------------------------------
/*
let inputHrvatskiJezikJS = document.getElementById("inputHrvatskiJezik").value;
let inputMatematikaJS = document.getElementById("inputMatematika").value;
let inputEngleskiJezikJS = document.getElementById("inputEngleskiJezik").value;

let btnIzracunajJS = document.getElementById("btnIzracunaj");

*/

//listener------------------------------------------------------------
let btnIzracunajJS = document.getElementById("btnIzracunaj");
let ekranjJS = document.getElementById("ekran");

btnIzracunajJS.addEventListener("click", izracun);

//funkcije------------------------------------------------------------

function izracun() {
  let inputHrvatskiJezikJS = document.getElementById("inputHrvatskiJezik")
    .value;
  console.log(inputHrvatskiJezikJS);
  let inputMatematikaJS = document.getElementById("inputMatematika").value;
  let inputEngleskiJezikJS = document.getElementById("inputEngleskiJezik")
    .value;

  //--------------------

  let inputHrvatskiJezikParseJS = parseFloat("inputHrvatskiJezikJS");
  let inputMatematikaParseJS = parseFloat("inputMatematikaJS");
  let inputEngleskiJezikParseJS = parseFloat("inputEngleskiJezikJS");
  //-----------------------

  let inputHrvatskiJezikBrojJS = Number(inputHrvatskiJezikJS);
  let inputMatematikaBrojJS = Number(inputMatematikaJS);
  let inputEngleskiJezikBrojJS = Number(inputEngleskiJezikJS);

  //btnIzracunajJS.addEventListener("click", izracun);

  //matematika 7.razred-----------------------------------------
  if (document.getElementById("radioMat2").checked) {
    radioMatJS = document.getElementById("radioMat2").value;
  }
  if (document.getElementById("radioMat3").checked) {
    radioMatJS = document.getElementById("radioMat3").value;
  }
  if (document.getElementById("radioMat4").checked) {
    radioMatJS = document.getElementById("radioMat4").value;
  }
  if (document.getElementById("radioMat5").checked) {
    radioMatJS = document.getElementById("radioMat5").value;
  }

  let radioMatBrojJS = Number(radioMatJS);
  //hrvatski 7.razred-----------------------------------------------
  if (document.getElementById("radioHrvatski2").checked) {
    radioHrvatskiJS = document.getElementById("radioHrvatski2").value;
  }
  if (document.getElementById("radioHrvatski3").checked) {
    radioHrvatskiJS = document.getElementById("radioHrvatski3").value;
  }
  if (document.getElementById("radioHrvatski4").checked) {
    radioHrvatskiJS = document.getElementById("radioHrvatski4").value;
  }
  if (document.getElementById("radioHrvatski5").checked) {
    radioHrvatskiJS = document.getElementById("radioHrvatski5").value;
  }

  let radioHrvatskiBrojJS = Number(radioHrvatskiJS);

  //engleski 7.razred-----------------------------------------------

  if (document.getElementById("radioEngleski2").checked) {
    radioEngleskiJS = document.getElementById("radioEngleski2").value;
  }
  if (document.getElementById("radioEngleski3").checked) {
    radioEngleskiJS = document.getElementById("radioEngleski3").value;
  }
  if (document.getElementById("radioEngleski4").checked) {
    radioEngleskiJS = document.getElementById("radioEngleski4").value;
  }
  if (document.getElementById("radioEngleski5").checked) {
    radioEngleskiJS = document.getElementById("radioEngleski5").value;
  }

  let radioEngleskiBrojJS = Number(radioEngleskiJS);

  //Predmet Prvi 7.razred-------------------------------------------

  if (document.getElementById("radioPredmetPrvi2").checked) {
    radioPredmetPrviJS = document.getElementById("radioPredmetPrvi2").value;
  }
  if (document.getElementById("radioPredmetPrvi3").checked) {
    radioPredmetPrviJS = document.getElementById("radioPredmetPrvi3").value;
  }
  if (document.getElementById("radioPredmetPrvi4").checked) {
    radioPredmetPrviJS = document.getElementById("radioPredmetPrvi4").value;
  }
  if (document.getElementById("radioPredmetPrvi5").checked) {
    radioPredmetPrviJS = document.getElementById("radioPredmetPrvi5").value;
  }

  let radioPredmetPrviBrojJS = Number(radioPredmetPrviJS);

  //Predmet Drugi 7.razred-----------------------------------------

  if (document.getElementById("radioPredmetDrugi2").checked) {
    radioPredmetDrugiJS = document.getElementById("radioPredmetDrugi2").value;
  }
  if (document.getElementById("radioPredmetDrugi3").checked) {
    radioPredmetDrugiJS = document.getElementById("radioPredmetDrugi3").value;
  }
  if (document.getElementById("radioPredmetDrugi4").checked) {
    radioPredmetDrugiJS = document.getElementById("radioPredmetDrugi4").value;
  }
  if (document.getElementById("radioPredmetDrugi5").checked) {
    radioPredmetDrugiJS = document.getElementById("radioPredmetDrugi5").value;
  }

  let radioPredmetDrugiBrojJS = Number(radioPredmetDrugiJS);

  //Predmet Treci 7.razred------------------------------------------
  if (document.getElementById("radioPredmetTreci2").checked) {
    radioPredmetTreciJS = document.getElementById("radioPredmetDrugi2").value;
  }
  if (document.getElementById("radioPredmetTreci3").checked) {
    radioPredmetTreciJS = document.getElementById("radioPredmetDrugi3").value;
  }
  if (document.getElementById("radioPredmetTreci4").checked) {
    radioPredmetTreciJS = document.getElementById("radioPredmetDrugi4").value;
  }
  if (document.getElementById("radioPredmetTreci5").checked) {
    radioPredmetTreciJS = document.getElementById("radioPredmetDrugi5").value;
  }

  let radioPredmetTreciBrojJS = Number(radioPredmetTreciJS);
  //----------------------------------------------------------------

  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //matematika 8.razred-----------------------------------------

  if (document.getElementById("radioMatOsmiRazred2").checked) {
    radioMatOsmiRazredJS = document.getElementById("radioMatOsmiRazred2").value;
  }
  if (document.getElementById("radioMatOsmiRazred3").checked) {
    radioMatOsmiRazredJS = document.getElementById("radioMatOsmiRazred3").value;
  }
  if (document.getElementById("radioMatOsmiRazred4").checked) {
    radioMatOsmiRazredJS = document.getElementById("radioMatOsmiRazred4").value;
  }
  if (document.getElementById("radioMatOsmiRazred5").checked) {
    radioMatOsmiRazredJS = document.getElementById("radioMatOsmiRazred5").value;
  }

  let radioMatOsmiRazredBrojJS = Number(radioMatOsmiRazredJS);

  //hrvatski 8.razred-----------------------------------------------
  if (document.getElementById("radioHrvatskiOsmiRazred2").checked) {
    radioHrvatskiOsmiRazredJS = document.getElementById(
      "radioHrvatskiOsmiRazred2"
    ).value;
  }
  if (document.getElementById("radioHrvatskiOsmiRazred3").checked) {
    radioHrvatskiOsmiRazredJS = document.getElementById(
      "radioHrvatskiOsmiRazred3"
    ).value;
  }
  if (document.getElementById("radioHrvatskiOsmiRazred4").checked) {
    radioHrvatskiOsmiRazredJS = document.getElementById(
      "radioHrvatskiOsmiRazred4"
    ).value;
  }
  if (document.getElementById("radioHrvatskiOsmiRazred5").checked) {
    radioHrvatskiOsmiRazredJS = document.getElementById(
      "radioHrvatskiOsmiRazred5"
    ).value;
  }

  let radioHrvatskiOsmiRazredBrojJS = Number(radioHrvatskiOsmiRazredJS);

  //engleski 8.razred-----------------------------------------------

  if (document.getElementById("radioEngleskiOsmiRazred2").checked) {
    radioEngleskiOsmiRazredJS = document.getElementById(
      "radioEngleskiOsmiRazred2"
    ).value;
  }
  if (document.getElementById("radioEngleskiOsmiRazred3").checked) {
    radioEngleskiOsmiRazredJS = document.getElementById(
      "radioEngleskiOsmiRazred3"
    ).value;
  }
  if (document.getElementById("radioEngleskiOsmiRazred4").checked) {
    radioEngleskiOsmiRazredJS = document.getElementById(
      "radioEngleskiOsmiRazred4"
    ).value;
  }
  if (document.getElementById("radioEngleskiOsmiRazred5").checked) {
    radioEngleskiOsmiRazredJS = document.getElementById(
      "radioEngleskiOsmiRazred5"
    ).value;
  }

  let radioEngleskiOsmiRazredBrojJS = Number(radioEngleskiOsmiRazredJS);

  //Predmet Prvi 8.razred-------------------------------------------
  if (document.getElementById("radioPredmetPrviOsmiRazred2").checked) {
    radioPredmetPrviOsmiRazredJS = document.getElementById(
      "radioPredmetPrviOsmiRazred2"
    ).value;
  }
  if (document.getElementById("radioPredmetPrviOsmiRazred3").checked) {
    radioPredmetPrviOsmiRazredJS = document.getElementById(
      "radioPredmetPrviOsmiRazred3"
    ).value;
  }
  if (document.getElementById("radioPredmetPrviOsmiRazred4").checked) {
    radioPredmetPrviOsmiRazredJS = document.getElementById(
      "radioPredmetPrviOsmiRazred4"
    ).value;
  }
  if (document.getElementById("radioPredmetPrviOsmiRazred5").checked) {
    radioPredmetPrviOsmiRazredJS = document.getElementById(
      "radioPredmetPrviOsmiRazred5"
    ).value;
  }

  let radioPredmetPrviOsmiRazredBrojJS = Number(radioPredmetPrviOsmiRazredJS);

  //Predmet Drugi 8.razred-----------------------------------------
  if (document.getElementById("radioPredmetDrugiOsmiRazred2").checked) {
    radioPredmetDrugiOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred2"
    ).value;
  }
  if (document.getElementById("radioPredmetDrugiOsmiRazred3").checked) {
    radioPredmetDrugiOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred3"
    ).value;
  }
  if (document.getElementById("radioPredmetDrugiOsmiRazred4").checked) {
    radioPredmetDrugiOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred4"
    ).value;
  }
  if (document.getElementById("radioPredmetDrugiOsmiRazred5").checked) {
    radioPredmetDrugiOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred5"
    ).value;
  }

  let radioPredmetDrugiOsmiRazredBrojJS = Number(radioPredmetDrugiOsmiRazredJS);

  //Predmet Treci 8.razred------------------------------------------

  if (document.getElementById("radioPredmetTreciOsmiRazred2").checked) {
    radioPredmetTreciOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred2"
    ).value;
  }
  if (document.getElementById("radioPredmetTreciOsmiRazred3").checked) {
    radioPredmetTreciOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred3"
    ).value;
  }
  if (document.getElementById("radioPredmetTreciOsmiRazred4").checked) {
    radioPredmetTreciOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred4"
    ).value;
  }
  if (document.getElementById("radioPredmetTreciOsmiRazred5").checked) {
    radioPredmetTreciOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred5"
    ).value;
  }

  let radioPredmetTreciOsmiRazredBrojJS = Number(radioPredmetTreciOsmiRazredJS);

  //----------------------------------------------------------------
  let sedmi =
    (radioMatBrojJS +
      radioHrvatskiBrojJS +
      radioEngleskiBrojJS +
      radioPredmetPrviBrojJS +
      radioPredmetDrugiBrojJS +
      radioPredmetTreciBrojJS) /
    6;

  let ekranJS = document.getElementById("ekran");

  ekranJS.innerHTML = sedmi;

  let osmi =
    (radioMatOsmiRazredBrojJS +
      radioHrvatskiOsmiRazredBrojJS +
      radioEngleskiOsmiRazredBrojJS +
      radioPredmetPrviOsmiRazredBrojJS +
      radioPredmetDrugiOsmiRazredBrojJS +
      radioPredmetTreciOsmiRazredBrojJS) /
    6;

  console.log(sedmi);
  console.log(osmi);
}
