//varijable------------------------------------------------------------
/*
let inputEngleskiJezikJS = document.getElementById("inputEngleskiJezik").value;

let btnIzracunajJS = document.getElementById("btnIzracunaj");

*/
let btnIzracunajJS = document.getElementById("btnIzracunaj");
let ekranjJS = document.getElementById("ekran");

btnIzracunajJS.addEventListener("click", izracun);

//funkcije------------------------------------------------------------

function izracun() {
  let petiRazredJS = document.getElementById("petiRazred").value || 0;
  let sestiRazredJS = document.getElementById("sestiRazred").value || 0;
  let sedmiRazredJS = document.getElementById("sedmiRazred").value || 0;
  let osmiRazredJS = document.getElementById("osmiRazred").value || 0;

  let petiRazredBrojJS = Number(petiRazredJS);
  let sestiRazredBrojJS = Number(sestiRazredJS);
  let sedmiRazredBrojJS = Number(sedmiRazredJS);
  let osmiRazredBrojJS = Number(osmiRazredJS);

  let prosjek =
    petiRazredBrojJS + sestiRazredBrojJS + sedmiRazredBrojJS + osmiRazredBrojJS;
  console.log(prosjek);
  //todo---------------------------


  //todo---------------------------


  //!matematika 7.razred-----------------------------------------
  if (document.getElementById("radioMat2").checked) {
    radioMatJS = document.getElementById("radioMat2").value;
  } else if (document.getElementById("radioMat3").checked) {
    radioMatJS = document.getElementById("radioMat3").value;
  } else if (document.getElementById("radioMat4").checked) {
    radioMatJS = document.getElementById("radioMat4").value;
  } else if (document.getElementById("radioMat5").checked) {
    radioMatJS = document.getElementById("radioMat5").value;
  } else {
    radioMatJS = 0
  }

  let radioMatBrojJS = Number(radioMatJS);

  //!hrvatski 7.razred-----------------------------------------------
  if (document.getElementById("radioHrvatski2").checked) {
    radioHrvatskiJS = document.getElementById("radioHrvatski2").value;
  } else if (document.getElementById("radioHrvatski3").checked) {
    radioHrvatskiJS = document.getElementById("radioHrvatski3").value;
  } else if (document.getElementById("radioHrvatski4").checked) {
    radioHrvatskiJS = document.getElementById("radioHrvatski4").value;
  } else if (document.getElementById("radioHrvatski5").checked) {
    radioHrvatskiJS = document.getElementById("radioHrvatski5").value;
  } else {
    radioHrvatskiJS = 0;
  }

  let radioHrvatskiBrojJS = Number(radioHrvatskiJS);

  //!engleski 7.razred-----------------------------------------------

  if (document.getElementById("radioEngleski2").checked) {
    radioEngleskiJS = document.getElementById("radioEngleski2").value;
  } else if (document.getElementById("radioEngleski3").checked) {
    radioEngleskiJS = document.getElementById("radioEngleski3").value;
  } else if (document.getElementById("radioEngleski4").checked) {
    radioEngleskiJS = document.getElementById("radioEngleski4").value;
  } else if (document.getElementById("radioEngleski5").checked) {
    radioEngleskiJS = document.getElementById("radioEngleski5").value;
  } else {
    radioEngleskiJS = 0;
  }

  let radioEngleskiBrojJS = Number(radioEngleskiJS);

  //!Predmet Prvi 7.razred-------------------------------------------

  if (document.getElementById("radioPredmetPrvi2").checked) {
    radioPredmetPrviJS = document.getElementById("radioPredmetPrvi2").value;
  } else if (document.getElementById("radioPredmetPrvi3").checked) {
    radioPredmetPrviJS = document.getElementById("radioPredmetPrvi3").value;
  } else if (document.getElementById("radioPredmetPrvi4").checked) {
    radioPredmetPrviJS = document.getElementById("radioPredmetPrvi4").value;
  } else if (document.getElementById("radioPredmetPrvi5").checked) {
    radioPredmetPrviJS = document.getElementById("radioPredmetPrvi5").value;
  } else {
    radioPredmetPrviJS = 0;
  }

  let radioPredmetPrviBrojJS = Number(radioPredmetPrviJS);

  //!Predmet Drugi 7.razred-----------------------------------------

  if (document.getElementById("radioPredmetDrugi2").checked) {
    radioPredmetDrugiJS = document.getElementById("radioPredmetDrugi2").value;
  } else if (document.getElementById("radioPredmetDrugi3").checked) {
    radioPredmetDrugiJS = document.getElementById("radioPredmetDrugi3").value;
  } else if (document.getElementById("radioPredmetDrugi4").checked) {
    radioPredmetDrugiJS = document.getElementById("radioPredmetDrugi4").value;
  } else if (document.getElementById("radioPredmetDrugi5").checked) {
    radioPredmetDrugiJS = document.getElementById("radioPredmetDrugi5").value;
  } else {
    radioPredmetDrugiJS = 0;
  }

  let radioPredmetDrugiBrojJS = Number(radioPredmetDrugiJS);

  //!Predmet Treci 7.razred------------------------------------------
  if (document.getElementById("radioPredmetTreci2").checked) {
    radioPredmetTreciJS = document.getElementById("radioPredmetDrugi2").value;
  } else if (document.getElementById("radioPredmetTreci3").checked) {
    radioPredmetTreciJS = document.getElementById("radioPredmetDrugi3").value;
  } else if (document.getElementById("radioPredmetTreci4").checked) {
    radioPredmetTreciJS = document.getElementById("radioPredmetDrugi4").value;
  } else if (document.getElementById("radioPredmetTreci5").checked) {
    radioPredmetTreciJS = document.getElementById("radioPredmetDrugi5").value;
  } else {
    radioPredmetTreciJS = 0;
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
  } else if (document.getElementById("radioMatOsmiRazred3").checked) {
    radioMatOsmiRazredJS = document.getElementById("radioMatOsmiRazred3").value;
  } else if (document.getElementById("radioMatOsmiRazred4").checked) {
    radioMatOsmiRazredJS = document.getElementById("radioMatOsmiRazred4").value;
  } else if (document.getElementById("radioMatOsmiRazred5").checked) {
    radioMatOsmiRazredJS = document.getElementById("radioMatOsmiRazred5").value;
  } else {
    radioMatOsmiRazredJS = 0;
  }

  let radioMatOsmiRazredBrojJS = Number(radioMatOsmiRazredJS);

  //!hrvatski 8.razred-----------------------------------------------
  if (document.getElementById("radioHrvatskiOsmiRazred2").checked) {
    radioHrvatskiOsmiRazredJS = document.getElementById(
      "radioHrvatskiOsmiRazred2"
    ).value;
  } else if (document.getElementById("radioHrvatskiOsmiRazred3").checked) {
    radioHrvatskiOsmiRazredJS = document.getElementById(
      "radioHrvatskiOsmiRazred3"
    ).value;
  } else if (document.getElementById("radioHrvatskiOsmiRazred4").checked) {
    radioHrvatskiOsmiRazredJS = document.getElementById(
      "radioHrvatskiOsmiRazred4"
    ).value;
  } else if (document.getElementById("radioHrvatskiOsmiRazred5").checked) {
    radioHrvatskiOsmiRazredJS = document.getElementById(
      "radioHrvatskiOsmiRazred5"
    ).value;
  } else {
    radioHrvatskiOsmiRazredJS = 0;
  }

  let radioHrvatskiOsmiRazredBrojJS = Number(radioHrvatskiOsmiRazredJS);

  //!engleski 8.razred-----------------------------------------------

  if (document.getElementById("radioEngleskiOsmiRazred2").checked) {
    radioEngleskiOsmiRazredJS = document.getElementById(
      "radioEngleskiOsmiRazred2"
    ).value;
  } else if (document.getElementById("radioEngleskiOsmiRazred3").checked) {
    radioEngleskiOsmiRazredJS = document.getElementById(
      "radioEngleskiOsmiRazred3"
    ).value;
  } else if (document.getElementById("radioEngleskiOsmiRazred4").checked) {
    radioEngleskiOsmiRazredJS = document.getElementById(
      "radioEngleskiOsmiRazred4"
    ).value;
  } else if (document.getElementById("radioEngleskiOsmiRazred5").checked) {
    radioEngleskiOsmiRazredJS = document.getElementById(
      "radioEngleskiOsmiRazred5"
    ).value;
  } else {
    radioEngleskiOsmiRazredJS = 0;
  }

  let radioEngleskiOsmiRazredBrojJS = Number(radioEngleskiOsmiRazredJS);

  //!Predmet Prvi 8.razred-------------------------------------------
  if (document.getElementById("radioPredmetPrviOsmiRazred2").checked) {
    radioPredmetPrviOsmiRazredJS = document.getElementById(
      "radioPredmetPrviOsmiRazred2"
    ).value;
  } else if (document.getElementById("radioPredmetPrviOsmiRazred3").checked) {
    radioPredmetPrviOsmiRazredJS = document.getElementById(
      "radioPredmetPrviOsmiRazred3"
    ).value;
  } else if (document.getElementById("radioPredmetPrviOsmiRazred4").checked) {
    radioPredmetPrviOsmiRazredJS = document.getElementById(
      "radioPredmetPrviOsmiRazred4"
    ).value;
  } else if (document.getElementById("radioPredmetPrviOsmiRazred5").checked) {
    radioPredmetPrviOsmiRazredJS = document.getElementById(
      "radioPredmetPrviOsmiRazred5"
    ).value;
  } else {
    radioPredmetPrviOsmiRazredJS = 0;
  }

  let radioPredmetPrviOsmiRazredBrojJS = Number(radioPredmetPrviOsmiRazredJS);

  //!Predmet Drugi 8.razred-----------------------------------------
  if (document.getElementById("radioPredmetDrugiOsmiRazred2").checked) {
    radioPredmetDrugiOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred2"
    ).value;
  } else if (document.getElementById("radioPredmetDrugiOsmiRazred3").checked) {
    radioPredmetDrugiOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred3"
    ).value;
  } else if (document.getElementById("radioPredmetDrugiOsmiRazred4").checked) {
    radioPredmetDrugiOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred4"
    ).value;
  } else if (document.getElementById("radioPredmetDrugiOsmiRazred5").checked) {
    radioPredmetDrugiOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred5"
    ).value;
  } else {
    radioPredmetDrugiOsmiRazredJS = 0;
  }

  let radioPredmetDrugiOsmiRazredBrojJS = Number(radioPredmetDrugiOsmiRazredJS);

  //!Predmet Treci 8.razred------------------------------------------

  if (document.getElementById("radioPredmetTreciOsmiRazred2").checked) {
    radioPredmetTreciOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred2"
    ).value;
  } else if (document.getElementById("radioPredmetTreciOsmiRazred3").checked) {
    radioPredmetTreciOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred3"
    ).value;
  } else if (document.getElementById("radioPredmetTreciOsmiRazred4").checked) {
    radioPredmetTreciOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred4"
    ).value;
  } else if (document.getElementById("radioPredmetTreciOsmiRazred5").checked) {
    radioPredmetTreciOsmiRazredJS = document.getElementById(
      "radioPredmetDrugiOsmiRazred5"
    ).value;
  } else {
    radioPredmetTreciOsmiRazredJS = 0;
  }

  let radioPredmetTreciOsmiRazredBrojJS = Number(radioPredmetTreciOsmiRazredJS);

  //! izracun-----------------------------------------------------------

  let sedmi =
    radioMatBrojJS +
    radioHrvatskiBrojJS +
    radioEngleskiBrojJS +
    radioPredmetPrviBrojJS +
    radioPredmetDrugiBrojJS +
    radioPredmetTreciBrojJS;

  let sedmiPlusProsjek = sedmi + sedmiRazredBrojJS;

  let osmi =
    radioMatOsmiRazredBrojJS +
    radioHrvatskiOsmiRazredBrojJS +
    radioEngleskiOsmiRazredBrojJS +
    radioPredmetPrviOsmiRazredBrojJS +
    radioPredmetDrugiOsmiRazredBrojJS +
    radioPredmetTreciOsmiRazredBrojJS;

  let osmiPlusProsjek = osmi + osmiRazredBrojJS;


  let ukupnoBodova =
    prosjek +
    sedmi +
    osmi;


  let ekranSedmiJS = document.getElementById("ekranSedmi");
  ekranSedmiJS.innerHTML = sedmiPlusProsjek;

  let ekranOsmiJS = document.getElementById("ekranOsmi");
  ekranOsmiJS.innerHTML = osmiPlusProsjek;



  let ekranJS = document.getElementById("ekran-ukupno");
  ekranJS.innerHTML = ukupnoBodova;

  console.log(petiRazredBrojJS);
  console.log(sestiRazredBrojJS);

  console.log(sedmi);
  console.log(osmi);
  console.log(ukupnoBodova);

  //! ********************************************** */
  //todo-----
  /*
  if (ukupnoBodova < 60) {
    alert("kurac od ovce");
  }
  */
  //todo-----

}