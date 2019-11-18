let tehnicar = "<b>Elektrotehničar</b> - min broj bodova <b>61,13</b><br/><b>Tehničar za elektroniku</b> - min broj bodova <b>68,16</b> <br/><b>Tehničar za računarstvo</b> - min.broj bodova <b>71,32</b>";

let strojarstvo = "<b>Strojarsko računalni tehbičar</b> - min broj bodova <b>51,16</b><br/><b>Tehničar za mehanotehniku</b> - min broj bodova <b>66,47</b>";

let gimnazija1 = "<b>Jezična</b> - min broj bodova <b>71,56</b><br/><b>Klasična</b> - min broj bodova <b>62,61</b>";

let gimnazija2 = "<b>Jezična</b> - min broj bodova <b>69,21</b>";

let gimnazija3 = "<b>Prirodoslovno-matematička</b> - min broj bodova <b>75,07</b>";
let gimnazija4 = "<b>Opća gimnazija</b> - min broj bodova <b>71,86</b>";
let gimnazija5 = "<b>Opća gimnazija</b> - min broj bodova <b>76,33</b><br/><b>Opća gimnazija (odjel za sportaše)</b> - min broj bodova <b>127,06</b>";

let ekonomskoBirotehnickaJS = "<b>Ekonomist-odjel za sportase</b> - min broj bodova <b>94,51</b><br/><b>Ekonomist</b> - min broj bodova <b>47,40</b><br/><b>Poslovni tajnik</b> - min broj bodova <b>48,11</b><br/><b>Upravni referent</b> - min broj bodova <b>54,05</b><br/>";

let zdravstvenaJS = "<b>Medicinska sestra opće njege</b> - min broj bodova <b>63,63</b><br/><b>Fermaceutski tehničar</b> - min broj bodova <b>72,47</b><br/><b>Zdravstveno-laboratoriski tehničar</b> - min broj bodova <b>63,34</b><br/><b>Fizioterapeutski tehničar</b> - min broj bodova <b>68,11</b><br/><b>Dentalni asistent</b> - min broj bodova <b>63,79</b><br/><br/><b>Sanitarni tehničar</b> - min broj bodova <b>59,45</b>";

let turistickoUgostiteljskaJS = "<b>Hoteljersko-turistički tehničar</b> - min broj bodova <b>66,87</b><br/><b>Turističko-hoteljerski komercijalist</b> - min broj bodova <b>64,23</b><br/><b>Konobar</b> - min broj bodova <b>22,59</b><br/><b>Kuhar</b> - min broj bodova <b>26,57</b><br/><b>Slastičar</b> - min broj bodova <b>34,29</b><br/><b>Pomoćni konobar - TES</b><br/><b>Pomoćni kuhar i slastičar - TES</b>";



//! ************************************************************


document.getElementById("strojarska").addEventListener("click", function () {
    document.getElementById("nesto").innerHTML = strojarstvo;
});

document.getElementById("elektro").addEventListener("click", function () {
    document.getElementById("nesto").innerHTML = tehnicar;
});

document.getElementById("gimnazijaPrva").addEventListener("click", function () {
    document.getElementById("nesto").innerHTML = gimnazija1;
});

document.getElementById("gimnazijaDruga").addEventListener("click", function () {
    document.getElementById("nesto").innerHTML = gimnazija2;
});

document.getElementById("gimnazijaTreca").addEventListener("click", function () {
    document.getElementById("nesto").innerHTML = gimnazija3;
});

document.getElementById("gimnazijaCetvrta").addEventListener("click", function () {
    document.getElementById("nesto").innerHTML = gimnazija4;
});

document.getElementById("gimnazijaPeta").addEventListener("click", function () {
    document.getElementById("nesto").innerHTML = gimnazija5;
});

document.getElementById("ekonomskoBirotehnicka").addEventListener("click", function () {
    document.getElementById("nesto").innerHTML = ekonomskoBirotehnickaJS;
});

document.getElementById("zdravstvenaSkola").addEventListener("click", function () {
    document.getElementById("nesto").innerHTML = zdravstvenaJS;
});

document.getElementById("turistickoUgostiteljska").addEventListener("click", function () {
    document.getElementById("nesto").innerHTML = turistickoUgostiteljskaJS;
});

//! ************************************************************