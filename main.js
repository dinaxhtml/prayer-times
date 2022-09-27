let fajrAbha= document.querySelector('.abha-pray-time-fajr');
let shorouqAbha= document.querySelector('.abha-pray-time-shorouq');
let duhrAbha= document.querySelector('.abha-pray-time-duhr');
let asrAbha= document.querySelector('.abha-pray-time-asr');
let maghribAbha= document.querySelector('.abha-pray-time-maghrib');
let ishaAbha= document.querySelector('.abha-pray-time-isha');
let dateAbha= document.querySelector('.date-abha');
getAbha();
function getAbha() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=abha&country=saudi%20Arabia&method=8')
    .then(response => response.json())
    .then(data =>{
        let abha = data.data.timings;
        let abhaDate= data.data.date.gregorian.date;
        fajrAbha.innerHTML=`${abha["Fajr"]}`
        shorouqAbha.innerHTML=`${abha["Sunrise"]}`
        duhrAbha.innerHTML=`${abha["Dhuhr"]}`
        asrAbha.innerHTML=`${abha["Asr"]}`
        maghribAbha.innerHTML=`${abha["Maghrib"]}`
        ishaAbha.innerHTML=`${abha["Isha"]}`
        dateAbha.innerHTML= `${abhaDate}`

    })
}

let fajrAbudhabi= document.querySelector('.abudhabi-pray-time-fajr');
let shorouqAbudhabi= document.querySelector('.abudhabi-pray-time-shorouq');
let duhrAbudhabi= document.querySelector('.abudhabi-pray-time-duhr');
let asrAbudhabi= document.querySelector('.abudhabi-pray-time-asr');
let maghribAbudhabi= document.querySelector('.abudhabi-pray-time-maghrib');
let ishaAbudhabi= document.querySelector('.abudhabi-pray-time-isha');
let dateAbudhabi= document.querySelector('.date-abudhabi');
getAbudhabi();
function getAbudhabi() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=abudhabi&country=United%20Arab%20Emirates&method=8')
    .then(response => response.json())
    .then(data =>{
        let abudhabi = data.data.timings;
        let abudhabiDate= data.data.date.gregorian.date;
        fajrAbudhabi.innerHTML=`${abudhabi["Fajr"]}`
        shorouqAbudhabi.innerHTML=`${abudhabi["Sunrise"]}`
        duhrAbudhabi.innerHTML=`${abudhabi["Dhuhr"]}`
        asrAbudhabi.innerHTML=`${abudhabi["Asr"]}`
        maghribAbudhabi.innerHTML=`${abudhabi["Maghrib"]}`
        ishaAbudhabi.innerHTML=`${abudhabi["Isha"]}`
        dateAbudhabi.innerHTML= `${abudhabiDate}`

    })
}

let fajrAlain= document.querySelector('.alain-pray-time-fajr');
let shorouqAlain= document.querySelector('.alain-pray-time-shorouq');
let duhrAlain= document.querySelector('.alain-pray-time-duhr');
let asrAlain= document.querySelector('.alain-pray-time-asr');
let maghribAlain= document.querySelector('.alain-pray-time-maghrib');
let ishaAlain= document.querySelector('.alain-pray-time-isha');
let dateAlain= document.querySelector('.date-alain');
getAlain();
function getAlain() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=alain&country=United%20Arab%20Emirates&method=8')
    .then(response => response.json())
    .then(data =>{
        let alain = data.data.timings;
        let alainDate= data.data.date.gregorian.date;
        fajrAlain.innerHTML=`${alain["Fajr"]}`
        shorouqAlain.innerHTML=`${alain["Sunrise"]}`
        duhrAlain.innerHTML=`${alain["Dhuhr"]}`
        asrAlain.innerHTML=`${alain["Asr"]}`
        maghribAlain.innerHTML=`${alain["Maghrib"]}`
        ishaAlain.innerHTML=`${alain["Isha"]}`
        dateAlain.innerHTML= `${alainDate}`

    })
}

let fajrAlexandria= document.querySelector('.alexandria-pray-time-fajr');
let shorouqAlexandria= document.querySelector('.alexandria-pray-time-shorouq');
let duhrAlexandria= document.querySelector('.alexandria-pray-time-duhr');
let asrAlexandria= document.querySelector('.alexandria-pray-time-asr');
let maghribAlexandria= document.querySelector('.alexandria-pray-time-maghrib');
let ishaAlexandria= document.querySelector('.alexandria-pray-time-isha');
let dateAlexandria= document.querySelector('.date-alexandria');
getAlexandria();
function getAlexandria() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=alexandria&country=egypt&method=8')
    .then(response => response.json())
    .then(data =>{
        let alexandria = data.data.timings;
        let alexandriaDate= data.data.date.gregorian.date;
        fajrAlexandria.innerHTML=`${alexandria["Fajr"]}`
        shorouqAlexandria.innerHTML=`${alexandria["Sunrise"]}`
        duhrAlexandria.innerHTML=`${alexandria["Dhuhr"]}`
        asrAlexandria.innerHTML=`${alexandria["Asr"]}`
        maghribAlexandria.innerHTML=`${alexandria["Maghrib"]}`
        ishaAlexandria.innerHTML=`${alexandria["Isha"]}`
        dateAlexandria.innerHTML= `${alexandriaDate}`

    })
}

let fajrAmman= document.querySelector('.amman-pray-time-fajr');
let shorouqAmman= document.querySelector('.amman-pray-time-shorouq');
let duhrAmman= document.querySelector('.amman-pray-time-duhr');
let asrAmman= document.querySelector('.amman-pray-time-asr');
let maghribAmman= document.querySelector('.amman-pray-time-maghrib');
let ishaAmman= document.querySelector('.amman-pray-time-isha');
let dateAmman= document.querySelector('.date-amman');
getAmman();
function getAmman() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Amman&country=Jordan&method=8')
    .then(response => response.json())
    .then(data =>{
        let amman = data.data.timings;
        let ammanDate= data.data.date.gregorian.date;
        fajrAmman.innerHTML=`${amman["Fajr"]}`
        shorouqAmman.innerHTML=`${amman["Sunrise"]}`
        duhrAmman.innerHTML=`${amman["Dhuhr"]}`
        asrAmman.innerHTML=`${amman["Asr"]}`
        maghribAmman.innerHTML=`${amman["Maghrib"]}`
        ishaAmman.innerHTML=`${amman["Isha"]}`
        dateAmman.innerHTML= `${ammanDate}`

    })
}

let fajrAqaba= document.querySelector('.aqaba-pray-time-fajr');
let shorouqAqaba= document.querySelector('.aqaba-pray-time-shorouq');
let duhrAqaba= document.querySelector('.aqaba-pray-time-duhr');
let asrAqaba= document.querySelector('.aqaba-pray-time-asr');
let maghribAqaba= document.querySelector('.aqaba-pray-time-maghrib');
let ishaAqaba= document.querySelector('.aqaba-pray-time-isha');
let dateAqaba= document.querySelector('.date-aqaba');
getAqaba();
function getAqaba() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=aqaba&country=Jordan&method=8')
    .then(response => response.json())
    .then(data =>{
        let aqaba = data.data.timings;
        let aqabaDate= data.data.date.gregorian.date;
        fajrAqaba.innerHTML=`${aqaba["Fajr"]}`
        shorouqAqaba.innerHTML=`${aqaba["Sunrise"]}`
        duhrAqaba.innerHTML=`${aqaba["Dhuhr"]}`
        asrAqaba.innerHTML=`${aqaba["Asr"]}`
        maghribAqaba.innerHTML=`${aqaba["Maghrib"]}`
        ishaAqaba.innerHTML=`${aqaba["Isha"]}`
        dateAqaba.innerHTML= `${aqabaDate}`

    })
}

let fajrArish= document.querySelector('.arish-pray-time-fajr');
let shorouqArish= document.querySelector('.arish-pray-time-shorouq');
let duhrArish= document.querySelector('.arish-pray-time-duhr');
let asrArish= document.querySelector('.arish-pray-time-asr');
let maghribArish= document.querySelector('.arish-pray-time-maghrib');
let ishaArish= document.querySelector('.arish-pray-time-isha');
let dateArish= document.querySelector('.date-arish');
getArish();
function getArish() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=arish&country=egypt&method=8')
    .then(response => response.json())
    .then(data =>{
        let arish = data.data.timings;
        let arishDate= data.data.date.gregorian.date;
        fajrArish.innerHTML=`${arish["Fajr"]}`
        shorouqArish.innerHTML=`${arish["Sunrise"]}`
        duhrArish.innerHTML=`${arish["Dhuhr"]}`
        asrArish.innerHTML=`${arish["Asr"]}`
        maghribArish.innerHTML=`${arish["Maghrib"]}`
        ishaArish.innerHTML=`${arish["Isha"]}`
        dateArish.innerHTML= `${arishDate}`

    })
}

let fajrBabylon= document.querySelector('.babylon-pray-time-fajr');
let shorouqBabylon= document.querySelector('.babylon-pray-time-shorouq');
let duhrBabylon= document.querySelector('.babylon-pray-time-duhr');
let asrBabylon= document.querySelector('.babylon-pray-time-asr');
let maghribBabylon= document.querySelector('.babylon-pray-time-maghrib');
let ishaBabylon= document.querySelector('.babylon-pray-time-isha');
let dateBabylon= document.querySelector('.date-babylon');
getBabylon();
function getBabylon() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=babylon&country=iraq&method=8')
    .then(response => response.json())
    .then(data =>{
        let babylon = data.data.timings;
        let babylonDate= data.data.date.gregorian.date;
        fajrBabylon.innerHTML=`${babylon["Fajr"]}`
        shorouqBabylon.innerHTML=`${babylon["Sunrise"]}`
        duhrBabylon.innerHTML=`${babylon["Dhuhr"]}`
        asrBabylon.innerHTML=`${babylon["Asr"]}`
        maghribBabylon.innerHTML=`${babylon["Maghrib"]}`
        ishaBabylon.innerHTML=`${babylon["Isha"]}`
        dateBabylon.innerHTML= `${babylonDate}`

    })
}

let fajrBaghdad= document.querySelector('.baghdad-pray-time-fajr');
let shorouqBaghdad= document.querySelector('.baghdad-pray-time-shorouq');
let duhrBaghdad= document.querySelector('.baghdad-pray-time-duhr');
let asrBaghdad= document.querySelector('.baghdad-pray-time-asr');
let maghribBaghdad= document.querySelector('.baghdad-pray-time-maghrib');
let ishaBaghdad= document.querySelector('.baghdad-pray-time-isha');
let dateBaghdad= document.querySelector('.date-baghdad');
getBaghdad();
function getBaghdad() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=baghdad&country=iraq&method=8')
    .then(response => response.json())
    .then(data =>{
        let baghdad = data.data.timings;
        let baghdadDate= data.data.date.gregorian.date;
        fajrBaghdad.innerHTML=`${baghdad["Fajr"]}`
        shorouqBaghdad.innerHTML=`${baghdad["Sunrise"]}`
        duhrBaghdad.innerHTML=`${baghdad["Dhuhr"]}`
        asrBaghdad.innerHTML=`${baghdad["Asr"]}`
        maghribBaghdad.innerHTML=`${baghdad["Maghrib"]}`
        ishaBaghdad.innerHTML=`${baghdad["Isha"]}`
        dateBaghdad.innerHTML= `${baghdadDate}`

    })
}

let fajrBasra= document.querySelector('.basra-pray-time-fajr');
let shorouqBasra= document.querySelector('.basra-pray-time-shorouq');
let duhrBasra= document.querySelector('.basra-pray-time-duhr');
let asrBasra= document.querySelector('.basra-pray-time-asr');
let maghribBasra= document.querySelector('.basra-pray-time-maghrib');
let ishaBasra= document.querySelector('.basra-pray-time-isha');
let dateBasra= document.querySelector('.date-basra');
getBasra();
function getBasra() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=basrah&country=iraq&method=8')
    .then(response => response.json())
    .then(data =>{
        let basra = data.data.timings;
        let basraDate= data.data.date.gregorian.date;
        fajrBasra.innerHTML=`${basra["Fajr"]}`
        shorouqBasra.innerHTML=`${basra["Sunrise"]}`
        duhrBasra.innerHTML=`${basra["Dhuhr"]}`
        asrBasra.innerHTML=`${basra["Asr"]}`
        maghribBasra.innerHTML=`${basra["Maghrib"]}`
        ishaBasra.innerHTML=`${basra["Isha"]}`
        dateBasra.innerHTML= `${basraDate}`

    })
}

let fajrCairo= document.querySelector('.cairo-pray-time-fajr');
let shorouqCairo= document.querySelector('.cairo-pray-time-shorouq');
let duhrCairo= document.querySelector('.cairo-pray-time-duhr');
let asrCairo= document.querySelector('.cairo-pray-time-asr');
let maghribCairo= document.querySelector('.cairo-pray-time-maghrib');
let ishaCairo= document.querySelector('.cairo-pray-time-isha');
let dateCairo= document.querySelector('.date-cairo');
getCairo();
function getCairo() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8')
    .then(response => response.json())
    .then(data =>{
        let cairo = data.data.timings;
        let cairoDate= data.data.date.gregorian.date;
        fajrCairo.innerHTML=`${cairo["Fajr"]}`
        shorouqCairo.innerHTML=`${cairo["Sunrise"]}`
        duhrCairo.innerHTML=`${cairo["Dhuhr"]}`
        asrCairo.innerHTML=`${cairo["Asr"]}`
        maghribCairo.innerHTML=`${cairo["Maghrib"]}`
        ishaCairo.innerHTML=`${cairo["Isha"]}`
        dateCairo.innerHTML= `${cairoDate}`

    })
}

let fajrDamietta= document.querySelector('.damietta-pray-time-fajr');
let shorouqDamietta= document.querySelector('.damietta-pray-time-shorouq');
let duhrDamietta= document.querySelector('.damietta-pray-time-duhr');
let asrDamietta= document.querySelector('.damietta-pray-time-asr');
let maghribDamietta= document.querySelector('.damietta-pray-time-maghrib');
let ishaDamietta= document.querySelector('.damietta-pray-time-isha');
let dateDamietta= document.querySelector('.date-damietta');
getDamietta();
function getDamietta() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=damietta&country=egypt&method=8')
    .then(response => response.json())
    .then(data =>{
        let damietta = data.data.timings;
        let damiettaDate= data.data.date.gregorian.date;
        fajrDamietta.innerHTML=`${damietta["Fajr"]}`
        shorouqDamietta.innerHTML=`${damietta["Sunrise"]}`
        duhrDamietta.innerHTML=`${damietta["Dhuhr"]}`
        asrDamietta.innerHTML=`${damietta["Asr"]}`
        maghribDamietta.innerHTML=`${damietta["Maghrib"]}`
        ishaDamietta.innerHTML=`${damietta["Isha"]}`
        dateDamietta.innerHTML= `${damiettaDate}`

    })
}

let fajrDammam= document.querySelector('.dammam-pray-time-fajr');
let shorouqDammam= document.querySelector('.dammam-pray-time-shorouq');
let duhrDammam= document.querySelector('.dammam-pray-time-duhr');
let asrDammam= document.querySelector('.dammam-pray-time-asr');
let maghribDammam= document.querySelector('.dammam-pray-time-maghrib');
let ishaDammam= document.querySelector('.dammam-pray-time-isha');
let dateDammam= document.querySelector('.date-dammam');
getDammam();
function getDammam() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=dammam&country=saudi%20Arabia&method=8')
    .then(response => response.json())
    .then(data =>{
        let dammam = data.data.timings;
        let dammamDate= data.data.date.gregorian.date;
        fajrDammam.innerHTML=`${dammam["Fajr"]}`
        shorouqDammam.innerHTML=`${dammam["Sunrise"]}`
        duhrDammam.innerHTML=`${dammam["Dhuhr"]}`
        asrDammam.innerHTML=`${dammam["Asr"]}`
        maghribDammam.innerHTML=`${dammam["Maghrib"]}`
        ishaDammam.innerHTML=`${dammam["Isha"]}`
        dateDammam.innerHTML= `${dammamDate}`

    })
}

let fajrDuhok= document.querySelector('.duhok-pray-time-fajr');
let shorouqDuhok= document.querySelector('.duhok-pray-time-shorouq');
let duhrDuhok= document.querySelector('.duhok-pray-time-duhr');
let asrDuhok= document.querySelector('.duhok-pray-time-asr');
let maghribDuhok= document.querySelector('.duhok-pray-time-maghrib');
let ishaDuhok= document.querySelector('.duhok-pray-time-isha');
let dateDuhok= document.querySelector('.date-duhok');
getDuhok();
function getDuhok() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=duhok&country=iraq&method=8')
    .then(response => response.json())
    .then(data =>{
        let duhok = data.data.timings;
        let duhokDate= data.data.date.gregorian.date;
        fajrDuhok.innerHTML=`${duhok["Fajr"]}`
        shorouqDuhok.innerHTML=`${duhok["Sunrise"]}`
        duhrDuhok.innerHTML=`${duhok["Dhuhr"]}`
        asrDuhok.innerHTML=`${duhok["Asr"]}`
        maghribDuhok.innerHTML=`${duhok["Maghrib"]}`
        ishaDuhok.innerHTML=`${duhok["Isha"]}`
        dateDuhok.innerHTML= `${duhokDate}`

    })
}

let fajrDubai= document.querySelector('.dubai-pray-time-fajr');
let shorouqDubai= document.querySelector('.dubai-pray-time-shorouq');
let duhrDubai= document.querySelector('.dubai-pray-time-duhr');
let asrDubai= document.querySelector('.dubai-pray-time-asr');
let maghribDubai= document.querySelector('.dubai-pray-time-maghrib');
let ishaDubai= document.querySelector('.dubai-pray-time-isha');
let dateDubai= document.querySelector('.date-dubai');
getDubai();
function getDubai() {
    fetch('http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United%20Arab%20Emirates&method=8')
    .then(response => response.json())
    .then(data =>{
        let dubai = data.data.timings;
        let dubaiDate= data.data.date.gregorian.date;
        fajrDubai.innerHTML=`${dubai["Fajr"]}`
        shorouqDubai.innerHTML=`${dubai["Sunrise"]}`
        duhrDubai.innerHTML=`${dubai["Dhuhr"]}`
        asrDubai.innerHTML=`${dubai["Asr"]}`
        maghribDubai.innerHTML=`${dubai["Maghrib"]}`
        ishaDubai.innerHTML=`${dubai["Isha"]}`
        dateDubai.innerHTML= `${dubaiDate}`

    })
}

let fajrArbil= document.querySelector('.arbil-pray-time-fajr');
let shorouqArbil= document.querySelector('.arbil-pray-time-shorouq');
let duhrArbil= document.querySelector('.arbil-pray-time-duhr');
let asrArbil= document.querySelector('.arbil-pray-time-asr');
let maghribArbil= document.querySelector('.arbil-pray-time-maghrib');
let ishaArbil= document.querySelector('.arbil-pray-time-isha');
let dateArbil= document.querySelector('.date-arbil');
getArbil();
function getArbil() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=arbil&country=iraq&method=8')
    .then(response => response.json())
    .then(data =>{
        let arbil = data.data.timings;
        let arbilDate= data.data.date.gregorian.date;
        fajrArbil.innerHTML=`${arbil["Fajr"]}`
        shorouqArbil.innerHTML=`${arbil["Sunrise"]}`
        duhrArbil.innerHTML=`${arbil["Dhuhr"]}`
        asrArbil.innerHTML=`${arbil["Asr"]}`
        maghribArbil.innerHTML=`${arbil["Maghrib"]}`
        ishaArbil.innerHTML=`${arbil["Isha"]}`
        dateArbil.innerHTML= `${arbilDate}`

    })
}

let fajrEuphrates= document.querySelector('.euphrates-pray-time-fajr');
let shorouqEuphrates= document.querySelector('.euphrates-pray-time-shorouq');
let duhrEuphrates= document.querySelector('.euphrates-pray-time-duhr');
let asrEuphrates= document.querySelector('.euphrates-pray-time-asr');
let maghribEuphrates= document.querySelector('.euphrates-pray-time-maghrib');
let ishaEuphrates= document.querySelector('.euphrates-pray-time-isha');
let dateEuphrates= document.querySelector('.date-euphrates');
getEuphrates();
function getEuphrates() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Euphrates&country=iraq&method=8')
    .then(response => response.json())
    .then(data =>{
        let euphrates = data.data.timings;
        let euphratesDate= data.data.date.gregorian.date;
        fajrEuphrates.innerHTML=`${euphrates["Fajr"]}`
        shorouqEuphrates.innerHTML=`${euphrates["Sunrise"]}`
        duhrEuphrates.innerHTML=`${euphrates["Dhuhr"]}`
        asrEuphrates.innerHTML=`${euphrates["Asr"]}`
        maghribEuphrates.innerHTML=`${euphrates["Maghrib"]}`
        ishaEuphrates.innerHTML=`${euphrates["Isha"]}`
        dateEuphrates.innerHTML= `${euphratesDate}`

    })
}

let fajrFujairah= document.querySelector('.fujairah-pray-time-fajr');
let shorouqFujairah= document.querySelector('.fujairah-pray-time-shorouq');
let duhrFujairah= document.querySelector('.fujairah-pray-time-duhr');
let asrFujairah= document.querySelector('.fujairah-pray-time-asr');
let maghribFujairah= document.querySelector('.fujairah-pray-time-maghrib');
let ishaFujairah= document.querySelector('.fujairah-pray-time-isha');
let dateFujairah= document.querySelector('.date-fujairah');
getFujairah();
function getFujairah() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=fujairah&country=United%20Arab%20Emirates&method=8')
    .then(response => response.json())
    .then(data =>{
        let fujairah = data.data.timings;
        let fujairahDate= data.data.date.gregorian.date;
        fajrFujairah.innerHTML=`${fujairah["Fajr"]}`
        shorouqFujairah.innerHTML=`${fujairah["Sunrise"]}`
        duhrFujairah.innerHTML=`${fujairah["Dhuhr"]}`
        asrFujairah.innerHTML=`${fujairah["Asr"]}`
        maghribFujairah.innerHTML=`${fujairah["Maghrib"]}`
        ishaFujairah.innerHTML=`${fujairah["Isha"]}`
        dateFujairah.innerHTML= `${fujairahDate}`

    })
}

let fajrGhaza= document.querySelector('.ghaza-pray-time-fajr');
let shorouqGhaza= document.querySelector('.ghaza-pray-time-shorouq');
let duhrGhaza= document.querySelector('.ghaza-pray-time-duhr');
let asrGhaza= document.querySelector('.ghaza-pray-time-asr');
let maghribGhaza= document.querySelector('.ghaza-pray-time-maghrib');
let ishaGhaza= document.querySelector('.ghaza-pray-time-isha');
let dateGhaza= document.querySelector('.date-ghaza');
getGhaza();
function getGhaza() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=ghaza&country=palestine&method=8')
    .then(response => response.json())
    .then(data =>{
        let ghaza = data.data.timings;
        let ghazaDate= data.data.date.gregorian.date;
        fajrGhaza.innerHTML=`${ghaza["Fajr"]}`
        shorouqGhaza.innerHTML=`${ghaza["Sunrise"]}`
        duhrGhaza.innerHTML=`${ghaza["Dhuhr"]}`
        asrGhaza.innerHTML=`${ghaza["Asr"]}`
        maghribGhaza.innerHTML=`${ghaza["Maghrib"]}`
        ishaGhaza.innerHTML=`${ghaza["Isha"]}`
        dateGhaza.innerHTML= `${ghazaDate}`

    })
}

let fajrHaifa= document.querySelector('.haifa-pray-time-fajr');
let shorouqHaifa= document.querySelector('.haifa-pray-time-shorouq');
let duhrHaifa= document.querySelector('.haifa-pray-time-duhr');
let asrHaifa= document.querySelector('.haifa-pray-time-asr');
let maghribHaifa= document.querySelector('.haifa-pray-time-maghrib');
let ishaHaifa= document.querySelector('.haifa-pray-time-isha');
let dateHaifa= document.querySelector('.date-haifa');
getHaifa();
function getHaifa() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=haifa&country=palestine&method=8')
    .then(response => response.json())
    .then(data =>{
        let haifa = data.data.timings;
        let haifaDate= data.data.date.gregorian.date;
        fajrHaifa.innerHTML=`${haifa["Fajr"]}`
        shorouqHaifa.innerHTML=`${haifa["Sunrise"]}`
        duhrHaifa.innerHTML=`${haifa["Dhuhr"]}`
        asrHaifa.innerHTML=`${haifa["Asr"]}`
        maghribHaifa.innerHTML=`${haifa["Maghrib"]}`
        ishaHaifa.innerHTML=`${haifa["Isha"]}`
        dateHaifa.innerHTML= `${haifaDate}`

    })
}

let fajrIrbid= document.querySelector('.irbid-pray-time-fajr');
let shorouqIrbid= document.querySelector('.irbid-pray-time-shorouq');
let duhrIrbid= document.querySelector('.irbid-pray-time-duhr');
let asrIrbid= document.querySelector('.irbid-pray-time-asr');
let maghribIrbid= document.querySelector('.irbid-pray-time-maghrib');
let ishaIrbid= document.querySelector('.irbid-pray-time-isha');
let dateIrbid= document.querySelector('.date-irbid');
getIrbid();
function getIrbid() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=irbid&country=jordan&method=8')
    .then(response => response.json())
    .then(data =>{
        let irbid = data.data.timings;
        let irbidDate= data.data.date.gregorian.date;
        fajrIrbid.innerHTML=`${irbid["Fajr"]}`
        shorouqIrbid.innerHTML=`${irbid["Sunrise"]}`
        duhrIrbid.innerHTML=`${irbid["Dhuhr"]}`
        asrIrbid.innerHTML=`${irbid["Asr"]}`
        maghribIrbid.innerHTML=`${irbid["Maghrib"]}`
        ishaIrbid.innerHTML=`${irbid["Isha"]}`
        dateIrbid.innerHTML= `${irbidDate}`

    })
}

let fajrJarash= document.querySelector('.jarash-pray-time-fajr');
let shorouqJarash= document.querySelector('.jarash-pray-time-shorouq');
let duhrJarash= document.querySelector('.jarash-pray-time-duhr');
let asrJarash= document.querySelector('.jarash-pray-time-asr');
let maghribJarash= document.querySelector('.jarash-pray-time-maghrib');
let ishaJarash= document.querySelector('.jarash-pray-time-isha');
let dateJarash= document.querySelector('.date-jarash');
getJarash();
function getJarash() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=jarash&country=jordan&method=8')
    .then(response => response.json())
    .then(data =>{
        let jarash = data.data.timings;
        let jarashDate= data.data.date.gregorian.date;
        fajrJarash.innerHTML=`${jarash["Fajr"]}`
        shorouqJarash.innerHTML=`${jarash["Sunrise"]}`
        duhrJarash.innerHTML=`${jarash["Dhuhr"]}`
        asrJarash.innerHTML=`${jarash["Asr"]}`
        maghribJarash.innerHTML=`${jarash["Maghrib"]}`
        ishaJarash.innerHTML=`${jarash["Isha"]}`
        dateJarash.innerHTML= `${jarashDate}`

    })
}

let fajrJeddah= document.querySelector('.jeddah-pray-time-fajr');
let shorouqJeddah= document.querySelector('.jeddah-pray-time-shorouq');
let duhrJeddah= document.querySelector('.jeddah-pray-time-duhr');
let asrJeddah= document.querySelector('.jeddah-pray-time-asr');
let maghribJeddah= document.querySelector('.jeddah-pray-time-maghrib');
let ishaJeddah= document.querySelector('.jeddah-pray-time-isha');
let dateJeddah= document.querySelector('.date-jeddah');
getJeddah();
function getJeddah() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=jeddah&country=saudi%20Arabia&method=8')
    .then(response => response.json())
    .then(data =>{
        let jeddah = data.data.timings;
        let jeddahDate= data.data.date.gregorian.date;
        fajrJeddah.innerHTML=`${jeddah["Fajr"]}`
        shorouqJeddah.innerHTML=`${jeddah["Sunrise"]}`
        duhrJeddah.innerHTML=`${jeddah["Dhuhr"]}`
        asrJeddah.innerHTML=`${jeddah["Asr"]}`
        maghribJeddah.innerHTML=`${jeddah["Maghrib"]}`
        ishaJeddah.innerHTML=`${jeddah["Isha"]}`
        dateJeddah.innerHTML= `${jeddahDate}`

    })
}

let fajrGiza= document.querySelector('.giza-pray-time-fajr');
let shorouqGiza= document.querySelector('.giza-pray-time-shorouq');
let duhrGiza= document.querySelector('.giza-pray-time-duhr');
let asrGiza= document.querySelector('.giza-pray-time-asr');
let maghribGiza= document.querySelector('.giza-pray-time-maghrib');
let ishaGiza= document.querySelector('.giza-pray-time-isha');
let dateGiza= document.querySelector('.date-giza');
getGiza();
function getGiza() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=giza&country=egypt&method=8')
    .then(response => response.json())
    .then(data =>{
        let giza = data.data.timings;
        let gizaDate= data.data.date.gregorian.date;
        fajrGiza.innerHTML=`${giza["Fajr"]}`
        shorouqGiza.innerHTML=`${giza["Sunrise"]}`
        duhrGiza.innerHTML=`${giza["Dhuhr"]}`
        asrGiza.innerHTML=`${giza["Asr"]}`
        maghribGiza.innerHTML=`${giza["Maghrib"]}`
        ishaGiza.innerHTML=`${giza["Isha"]}`
        dateGiza.innerHTML= `${gizaDate}`

    })
}

let fajrKarak= document.querySelector('.karak-pray-time-fajr');
let shorouqKarak= document.querySelector('.karak-pray-time-shorouq');
let duhrKarak= document.querySelector('.karak-pray-time-duhr');
let asrKarak= document.querySelector('.karak-pray-time-asr');
let maghribKarak= document.querySelector('.karak-pray-time-maghrib');
let ishaKarak= document.querySelector('.karak-pray-time-isha');
let dateKarak= document.querySelector('.date-karak');
getKarak();
function getKarak() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=karak&country=jordan&method=8')
    .then(response => response.json())
    .then(data =>{
        let karak = data.data.timings;
        let karakDate= data.data.date.gregorian.date;
        fajrKarak.innerHTML=`${karak["Fajr"]}`
        shorouqKarak.innerHTML=`${karak["Sunrise"]}`
        duhrKarak.innerHTML=`${karak["Dhuhr"]}`
        asrKarak.innerHTML=`${karak["Asr"]}`
        maghribKarak.innerHTML=`${karak["Maghrib"]}`
        ishaKarak.innerHTML=`${karak["Isha"]}`
        dateKarak.innerHTML= `${karakDate}`

    })
}

let fajrKarbala= document.querySelector('.karbala-pray-time-fajr');
let shorouqKarbala= document.querySelector('.karbala-pray-time-shorouq');
let duhrKarbala= document.querySelector('.karbala-pray-time-duhr');
let asrKarbala= document.querySelector('.karbala-pray-time-asr');
let maghribKarbala= document.querySelector('.karbala-pray-time-maghrib');
let ishaKarbala= document.querySelector('.karbala-pray-time-isha');
let dateKarbala= document.querySelector('.date-karbala');
getKarbala();
function getKarbala() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=karbala&country=iraq&method=8')
    .then(response => response.json())
    .then(data =>{
        let karbala = data.data.timings;
        let karbalaDate= data.data.date.gregorian.date;
        fajrKarbala.innerHTML=`${karbala["Fajr"]}`
        shorouqKarbala.innerHTML=`${karbala["Sunrise"]}`
        duhrKarbala.innerHTML=`${karbala["Dhuhr"]}`
        asrKarbala.innerHTML=`${karbala["Asr"]}`
        maghribKarbala.innerHTML=`${karbala["Maghrib"]}`
        ishaKarbala.innerHTML=`${karbala["Isha"]}`
        dateKarbala.innerHTML= `${karbalaDate}`

    })
}

let fajrKhalil= document.querySelector('.khalil-pray-time-fajr');
let shorouqKhalil= document.querySelector('.khalil-pray-time-shorouq');
let duhrKhalil= document.querySelector('.khalil-pray-time-duhr');
let asrKhalil= document.querySelector('.khalil-pray-time-asr');
let maghribKhalil= document.querySelector('.khalil-pray-time-maghrib');
let ishaKhalil= document.querySelector('.khalil-pray-time-isha');
let dateKhalil= document.querySelector('.date-khalil');
getKhalil();
function getKhalil() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=khalil&country=palestine&method=8')
    .then(response => response.json())
    .then(data =>{
        let khalil = data.data.timings;
        let khalilDate= data.data.date.gregorian.date;
        fajrKhalil.innerHTML=`${khalil["Fajr"]}`
        shorouqKhalil.innerHTML=`${khalil["Sunrise"]}`
        duhrKhalil.innerHTML=`${khalil["Dhuhr"]}`
        asrKhalil.innerHTML=`${khalil["Asr"]}`
        maghribKhalil.innerHTML=`${khalil["Maghrib"]}`
        ishaKhalil.innerHTML=`${khalil["Isha"]}`
        dateKhalil.innerHTML= `${khalilDate}`

    })
}

let fajrKharga= document.querySelector('.kharga-pray-time-fajr');
let shorouqKharga= document.querySelector('.kharga-pray-time-shorouq');
let duhrKharga= document.querySelector('.kharga-pray-time-duhr');
let asrKharga= document.querySelector('.kharga-pray-time-asr');
let maghribKharga= document.querySelector('.kharga-pray-time-maghrib');
let ishaKharga= document.querySelector('.kharga-pray-time-isha');
let dateKharga= document.querySelector('.date-kharga');
getKharga();
function getKharga() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=kharga&country=egypt&method=8')
    .then(response => response.json())
    .then(data =>{
        let kharga = data.data.timings;
        let khargaDate= data.data.date.gregorian.date;
        fajrKharga.innerHTML=`${kharga["Fajr"]}`
        shorouqKharga.innerHTML=`${kharga["Sunrise"]}`
        duhrKharga.innerHTML=`${kharga["Dhuhr"]}`
        asrKharga.innerHTML=`${kharga["Asr"]}`
        maghribKharga.innerHTML=`${kharga["Maghrib"]}`
        ishaKharga.innerHTML=`${kharga["Isha"]}`
        dateKharga.innerHTML= `${khargaDate}`

    })
}

let fajrKirkuk= document.querySelector('.kirkuk-pray-time-fajr');
let shorouqKirkuk= document.querySelector('.kirkuk-pray-time-shorouq');
let duhrKirkuk= document.querySelector('.kirkuk-pray-time-duhr');
let asrKirkuk= document.querySelector('.kirkuk-pray-time-asr');
let maghribKirkuk= document.querySelector('.kirkuk-pray-time-maghrib');
let ishaKirkuk= document.querySelector('.kirkuk-pray-time-isha');
let dateKirkuk= document.querySelector('.date-kirkuk');
getKirkuk();
function getKirkuk() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=kirkuk&country=iraq&method=8')
    .then(response => response.json())
    .then(data =>{
        let kirkuk = data.data.timings;
        let kirkukDate= data.data.date.gregorian.date;
        fajrKirkuk.innerHTML=`${kirkuk["Fajr"]}`
        shorouqKirkuk.innerHTML=`${kirkuk["Sunrise"]}`
        duhrKirkuk.innerHTML=`${kirkuk["Dhuhr"]}`
        asrKirkuk.innerHTML=`${kirkuk["Asr"]}`
        maghribKirkuk.innerHTML=`${kirkuk["Maghrib"]}`
        ishaKirkuk.innerHTML=`${kirkuk["Isha"]}`
        dateKirkuk.innerHTML= `${kirkukDate}`

    })
}

let fajrKufa= document.querySelector('.kufa-pray-time-fajr');
let shorouqKufa= document.querySelector('.kufa-pray-time-shorouq');
let duhrKufa= document.querySelector('.kufa-pray-time-duhr');
let asrKufa= document.querySelector('.kufa-pray-time-asr');
let maghribKufa= document.querySelector('.kufa-pray-time-maghrib');
let ishaKufa= document.querySelector('.kufa-pray-time-isha');
let dateKufa= document.querySelector('.date-kufa');
getKufa();
function getKufa() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=kufa&country=iraq&method=8')
    .then(response => response.json())
    .then(data =>{
        let kufa = data.data.timings;
        let kufaDate= data.data.date.gregorian.date;
        fajrKufa.innerHTML=`${kufa["Fajr"]}`
        shorouqKufa.innerHTML=`${kufa["Sunrise"]}`
        duhrKufa.innerHTML=`${kufa["Dhuhr"]}`
        asrKufa.innerHTML=`${kufa["Asr"]}`
        maghribKufa.innerHTML=`${kufa["Maghrib"]}`
        ishaKufa.innerHTML=`${kufa["Isha"]}`
        dateKufa.innerHTML= `${kufaDate}`

    })
}

let fajrMadinah= document.querySelector('.madinah-pray-time-fajr');
let shorouqMadinah= document.querySelector('.madinah-pray-time-shorouq');
let duhrMadinah= document.querySelector('.madinah-pray-time-duhr');
let asrMadinah= document.querySelector('.madinah-pray-time-asr');
let maghribMadinah= document.querySelector('.madinah-pray-time-maghrib');
let ishaMadinah= document.querySelector('.madinah-pray-time-isha');
let dateMadinah= document.querySelector('.date-madinah');
getMadinah();
function getMadinah() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=madinah&country=saudi%20Arabia&method=8')
    .then(response => response.json())
    .then(data =>{
        let madinah = data.data.timings;
        let madinahDate= data.data.date.gregorian.date;
        fajrMadinah.innerHTML=`${madinah["Fajr"]}`
        shorouqMadinah.innerHTML=`${madinah["Sunrise"]}`
        duhrMadinah.innerHTML=`${madinah["Dhuhr"]}`
        asrMadinah.innerHTML=`${madinah["Asr"]}`
        maghribMadinah.innerHTML=`${madinah["Maghrib"]}`
        ishaMadinah.innerHTML=`${madinah["Isha"]}`
        dateMadinah.innerHTML= `${madinahDate}`

    })
}

let fajrMafraq= document.querySelector('.mafraq-pray-time-fajr');
let shorouqMafraq= document.querySelector('.mafraq-pray-time-shorouq');
let duhrMafraq= document.querySelector('.mafraq-pray-time-duhr');
let asrMafraq= document.querySelector('.mafraq-pray-time-asr');
let maghribMafraq= document.querySelector('.mafraq-pray-time-maghrib');
let ishaMafraq= document.querySelector('.mafraq-pray-time-isha');
let dateMafraq= document.querySelector('.date-mafraq');
getMafraq();
function getMafraq() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=almafraq&country=jordan&method=8')
    .then(response => response.json())
    .then(data =>{
        let mafraq = data.data.timings;
        let mafraqDate= data.data.date.gregorian.date;
        fajrMafraq.innerHTML=`${mafraq["Fajr"]}`
        shorouqMafraq.innerHTML=`${mafraq["Sunrise"]}`
        duhrMafraq.innerHTML=`${mafraq["Dhuhr"]}`
        asrMafraq.innerHTML=`${mafraq["Asr"]}`
        maghribMafraq.innerHTML=`${mafraq["Maghrib"]}`
        ishaMafraq.innerHTML=`${mafraq["Isha"]}`
        dateMafraq.innerHTML= `${mafraqDate}`

    })
}

let fajrMansoura= document.querySelector('.mansoura-pray-time-fajr');
let shorouqMansoura= document.querySelector('.mansoura-pray-time-shorouq');
let duhrMansoura= document.querySelector('.mansoura-pray-time-duhr');
let asrMansoura= document.querySelector('.mansoura-pray-time-asr');
let maghribMansoura= document.querySelector('.mansoura-pray-time-maghrib');
let ishaMansoura= document.querySelector('.mansoura-pray-time-isha');
let dateMansoura= document.querySelector('.date-mansoura');
getMansoura();
function getMansoura() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=mansoura&country=egypt&method=8')
    .then(response => response.json())
    .then(data =>{
        let mansoura = data.data.timings;
        let mansouraDate= data.data.date.gregorian.date;
        fajrMansoura.innerHTML=`${mansoura["Fajr"]}`
        shorouqMansoura.innerHTML=`${mansoura["Sunrise"]}`
        duhrMansoura.innerHTML=`${mansoura["Dhuhr"]}`
        asrMansoura.innerHTML=`${mansoura["Asr"]}`
        maghribMansoura.innerHTML=`${mansoura["Maghrib"]}`
        ishaMansoura.innerHTML=`${mansoura["Isha"]}`
        dateMansoura.innerHTML= `${mansouraDate}`

    })
}

let fajrMatareyah= document.querySelector('.matareyah-pray-time-fajr');
let shorouqMatareyah= document.querySelector('.matareyah-pray-time-shorouq');
let duhrMatareyah= document.querySelector('.matareyah-pray-time-duhr');
let asrMatareyah= document.querySelector('.matareyah-pray-time-asr');
let maghribMatareyah= document.querySelector('.matareyah-pray-time-maghrib');
let ishaMatareyah= document.querySelector('.matareyah-pray-time-isha');
let dateMatareyah= document.querySelector('.date-matareyah');
getMatareyah();
function getMatareyah() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=almatareyah&country=egypt&method=8')
    .then(response => response.json())
    .then(data =>{
        let matareyah = data.data.timings;
        let matareyahDate= data.data.date.gregorian.date;
        fajrMatareyah.innerHTML=`${matareyah["Fajr"]}`
        shorouqMatareyah.innerHTML=`${matareyah["Sunrise"]}`
        duhrMatareyah.innerHTML=`${matareyah["Dhuhr"]}`
        asrMatareyah.innerHTML=`${matareyah["Asr"]}`
        maghribMatareyah.innerHTML=`${matareyah["Maghrib"]}`
        ishaMatareyah.innerHTML=`${matareyah["Isha"]}`
        dateMatareyah.innerHTML= `${matareyahDate}`

    })
}

let fajrMakkah= document.querySelector('.makkah-pray-time-fajr');
let shorouqMakkah= document.querySelector('.makkah-pray-time-shorouq');
let duhrMakkah= document.querySelector('.makkah-pray-time-duhr');
let asrMakkah= document.querySelector('.makkah-pray-time-asr');
let maghribMakkah= document.querySelector('.makkah-pray-time-maghrib');
let ishaMakkah= document.querySelector('.makkah-pray-time-isha');
let dateMakkah= document.querySelector('.date-makkah');
getMakkah();
function getMakkah() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=makkah&country=saudi&method=8')
    .then(response => response.json())
    .then(data =>{
        let makkah = data.data.timings;
        let makkahDate= data.data.date.gregorian.date;
        fajrMakkah.innerHTML=`${makkah["Fajr"]}`
        shorouqMakkah.innerHTML=`${makkah["Sunrise"]}`
        duhrMakkah.innerHTML=`${makkah["Dhuhr"]}`
        asrMakkah.innerHTML=`${makkah["Asr"]}`
        maghribMakkah.innerHTML=`${makkah["Maghrib"]}`
        ishaMakkah.innerHTML=`${makkah["Isha"]}`
        dateMakkah.innerHTML= `${makkahDate}`

    })
}

let fajrNablus= document.querySelector('.nablus-pray-time-fajr');
let shorouqNablus= document.querySelector('.nablus-pray-time-shorouq');
let duhrNablus= document.querySelector('.nablus-pray-time-duhr');
let asrNablus= document.querySelector('.nablus-pray-time-asr');
let maghribNablus= document.querySelector('.nablus-pray-time-maghrib');
let ishaNablus= document.querySelector('.nablus-pray-time-isha');
let dateNablus= document.querySelector('.date-nablus');
getNablus();
function getNablus() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=nablus&country=palestine&method=8')
    .then(response => response.json())
    .then(data =>{
        let nablus = data.data.timings;
        let nablusDate= data.data.date.gregorian.date;
        fajrNablus.innerHTML=`${nablus["Fajr"]}`
        shorouqNablus.innerHTML=`${nablus["Sunrise"]}`
        duhrNablus.innerHTML=`${nablus["Dhuhr"]}`
        asrNablus.innerHTML=`${nablus["Asr"]}`
        maghribNablus.innerHTML=`${nablus["Maghrib"]}`
        ishaNablus.innerHTML=`${nablus["Isha"]}`
        dateNablus.innerHTML= `${nablusDate}`

    })
}

let fajrQalqilyah= document.querySelector('.qalqilyah-pray-time-fajr');
let shorouqQalqilyah= document.querySelector('.qalqilyah-pray-time-shorouq');
let duhrQalqilyah= document.querySelector('.qalqilyah-pray-time-duhr');
let asrQalqilyah= document.querySelector('.qalqilyah-pray-time-asr');
let maghribQalqilyah= document.querySelector('.qalqilyah-pray-time-maghrib');
let ishaQalqilyah= document.querySelector('.qalqilyah-pray-time-isha');
let dateQalqilyah= document.querySelector('.date-qalqilyah');
getQalqilyah();
function getQalqilyah() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=qalqilyah&country=palestine&method=8')
    .then(response => response.json())
    .then(data =>{
        let qalqilyah = data.data.timings;
        let qalqilyahDate= data.data.date.gregorian.date;
        fajrQalqilyah.innerHTML=`${qalqilyah["Fajr"]}`
        shorouqQalqilyah.innerHTML=`${qalqilyah["Sunrise"]}`
        duhrQalqilyah.innerHTML=`${qalqilyah["Dhuhr"]}`
        asrQalqilyah.innerHTML=`${qalqilyah["Asr"]}`
        maghribQalqilyah.innerHTML=`${qalqilyah["Maghrib"]}`
        ishaQalqilyah.innerHTML=`${qalqilyah["Isha"]}`
        dateQalqilyah.innerHTML= `${qalqilyahDate}`

    })
}

let fajrQassim= document.querySelector('.qassim-pray-time-fajr');
let shorouqQassim= document.querySelector('.qassim-pray-time-shorouq');
let duhrQassim= document.querySelector('.qassim-pray-time-duhr');
let asrQassim= document.querySelector('.qassim-pray-time-asr');
let maghribQassim= document.querySelector('.qassim-pray-time-maghrib');
let ishaQassim= document.querySelector('.qassim-pray-time-isha');
let dateQassim= document.querySelector('.date-qassim');
getQassim();
function getQassim() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=alqassim&country=saudi&method=8')
    .then(response => response.json())
    .then(data =>{
        let qassim = data.data.timings;
        let qassimDate= data.data.date.gregorian.date;
        fajrQassim.innerHTML=`${qassim["Fajr"]}`
        shorouqQassim.innerHTML=`${qassim["Sunrise"]}`
        duhrQassim.innerHTML=`${qassim["Dhuhr"]}`
        asrQassim.innerHTML=`${qassim["Asr"]}`
        maghribQassim.innerHTML=`${qassim["Maghrib"]}`
        ishaQassim.innerHTML=`${qassim["Isha"]}`
        dateQassim.innerHTML= `${qassimDate}`

    })
}

let fajrRamallah= document.querySelector('.ramallah-pray-time-fajr');
let shorouqRamallah= document.querySelector('.ramallah-pray-time-shorouq');
let duhrRamallah= document.querySelector('.ramallah-pray-time-duhr');
let asrRamallah= document.querySelector('.ramallah-pray-time-asr');
let maghribRamallah= document.querySelector('.ramallah-pray-time-maghrib');
let ishaRamallah= document.querySelector('.ramallah-pray-time-isha');
let dateRamallah= document.querySelector('.date-ramallah');
getRamallah();
function getRamallah() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=ramallah&country=palestine&method=8')
    .then(response => response.json())
    .then(data =>{
        let ramallah = data.data.timings;
        let ramallahDate= data.data.date.gregorian.date;
        fajrRamallah.innerHTML=`${ramallah["Fajr"]}`
        shorouqRamallah.innerHTML=`${ramallah["Sunrise"]}`
        duhrRamallah.innerHTML=`${ramallah["Dhuhr"]}`
        asrRamallah.innerHTML=`${ramallah["Asr"]}`
        maghribRamallah.innerHTML=`${ramallah["Maghrib"]}`
        ishaRamallah.innerHTML=`${ramallah["Isha"]}`
        dateRamallah.innerHTML= `${ramallahDate}`

    })
}

let fajrRasalkhaimah= document.querySelector('.rasalkhaimah-pray-time-fajr');
let shorouqRasalkhaimah= document.querySelector('.rasalkhaimah-pray-time-shorouq');
let duhrRasalkhaimah= document.querySelector('.rasalkhaimah-pray-time-duhr');
let asrRasalkhaimah= document.querySelector('.rasalkhaimah-pray-time-asr');
let maghribRasalkhaimah= document.querySelector('.rasalkhaimah-pray-time-maghrib');
let ishaRasalkhaimah= document.querySelector('.rasalkhaimah-pray-time-isha');
let dateRasalkhaimah= document.querySelector('.date-rasalkhaimah');
getRasalkhaimah();
function getRasalkhaimah() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=rasalkhaimah&country=United%20Arab%20Emirates&method=8')
    .then(response => response.json())
    .then(data =>{
        let rasalkhaimah = data.data.timings;
        let rasalkhaimahDate= data.data.date.gregorian.date;
        fajrRasalkhaimah.innerHTML=`${rasalkhaimah["Fajr"]}`
        shorouqRasalkhaimah.innerHTML=`${rasalkhaimah["Sunrise"]}`
        duhrRasalkhaimah.innerHTML=`${rasalkhaimah["Dhuhr"]}`
        asrRasalkhaimah.innerHTML=`${rasalkhaimah["Asr"]}`
        maghribRasalkhaimah.innerHTML=`${rasalkhaimah["Maghrib"]}`
        ishaRasalkhaimah.innerHTML=`${rasalkhaimah["Isha"]}`
        dateRasalkhaimah.innerHTML= `${rasalkhaimahDate}`

    })
}

let fajrRiyadh= document.querySelector('.riyadh-pray-time-fajr');
let shorouqRiyadh= document.querySelector('.riyadh-pray-time-shorouq');
let duhrRiyadh= document.querySelector('.riyadh-pray-time-duhr');
let asrRiyadh= document.querySelector('.riyadh-pray-time-asr');
let maghribRiyadh= document.querySelector('.riyadh-pray-time-maghrib');
let ishaRiyadh= document.querySelector('.riyadh-pray-time-isha');
let dateRiyadh= document.querySelector('.date-riyadh');
getRiyadh();
function getRiyadh() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=alriyadh&country=saudi&method=8')
    .then(response => response.json())
    .then(data =>{
        let riyadh = data.data.timings;
        let riyadhDate= data.data.date.gregorian.date;
        fajrRiyadh.innerHTML=`${riyadh["Fajr"]}`
        shorouqRiyadh.innerHTML=`${riyadh["Sunrise"]}`
        duhrRiyadh.innerHTML=`${riyadh["Dhuhr"]}`
        asrRiyadh.innerHTML=`${riyadh["Asr"]}`
        maghribRiyadh.innerHTML=`${riyadh["Maghrib"]}`
        ishaRiyadh.innerHTML=`${riyadh["Isha"]}`
        dateRiyadh.innerHTML= `${riyadhDate}`

    })
}

let fajrRuwais= document.querySelector('.ruwais-pray-time-fajr');
let shorouqRuwais= document.querySelector('.ruwais-pray-time-shorouq');
let duhrRuwais= document.querySelector('.ruwais-pray-time-duhr');
let asrRuwais= document.querySelector('.ruwais-pray-time-asr');
let maghribRuwais= document.querySelector('.ruwais-pray-time-maghrib');
let ishaRuwais= document.querySelector('.ruwais-pray-time-isha');
let dateRuwais= document.querySelector('.date-ruwais');
getRuwais();
function getRuwais() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=ruwais&country=United%20Arab%20Emirates&method=8')
    .then(response => response.json())
    .then(data =>{
        let ruwais = data.data.timings;
        let ruwaisDate= data.data.date.gregorian.date;
        fajrRuwais.innerHTML=`${ruwais["Fajr"]}`
        shorouqRuwais.innerHTML=`${ruwais["Sunrise"]}`
        duhrRuwais.innerHTML=`${ruwais["Dhuhr"]}`
        asrRuwais.innerHTML=`${ruwais["Asr"]}`
        maghribRuwais.innerHTML=`${ruwais["Maghrib"]}`
        ishaRuwais.innerHTML=`${ruwais["Isha"]}`
        dateRuwais.innerHTML= `${ruwaisDate}`

    })
}

let fajrSharmelsheikh= document.querySelector('.sharmelsheikh-pray-time-fajr');
let shorouqSharmelsheikh= document.querySelector('.sharmelsheikh-pray-time-shorouq');
let duhrSharmelsheikh= document.querySelector('.sharmelsheikh-pray-time-duhr');
let asrSharmelsheikh= document.querySelector('.sharmelsheikh-pray-time-asr');
let maghribSharmelsheikh= document.querySelector('.sharmelsheikh-pray-time-maghrib');
let ishaSharmelsheikh= document.querySelector('.sharmelsheikh-pray-time-isha');
let dateSharmelsheikh= document.querySelector('.date-sharmelsheikh');
getSharmelsheikh();
function getSharmelsheikh() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=sharmelsheikh&country=egypt&method=8')
    .then(response => response.json())
    .then(data =>{
        let sharmelsheikh = data.data.timings;
        let sharmelsheikhDate= data.data.date.gregorian.date;
        fajrSharmelsheikh.innerHTML=`${sharmelsheikh["Fajr"]}`
        shorouqSharmelsheikh.innerHTML=`${sharmelsheikh["Sunrise"]}`
        duhrSharmelsheikh.innerHTML=`${sharmelsheikh["Dhuhr"]}`
        asrSharmelsheikh.innerHTML=`${sharmelsheikh["Asr"]}`
        maghribSharmelsheikh.innerHTML=`${sharmelsheikh["Maghrib"]}`
        ishaSharmelsheikh.innerHTML=`${sharmelsheikh["Isha"]}`
        dateSharmelsheikh.innerHTML= `${sharmelsheikhDate}`

    })
}

let fajrSharqah= document.querySelector('.sharqah-pray-time-fajr');
let shorouqSharqah= document.querySelector('.sharqah-pray-time-shorouq');
let duhrSharqah= document.querySelector('.sharqah-pray-time-duhr');
let asrSharqah= document.querySelector('.sharqah-pray-time-asr');
let maghribSharqah= document.querySelector('.sharqah-pray-time-maghrib');
let ishaSharqah= document.querySelector('.sharqah-pray-time-isha');
let dateSharqah= document.querySelector('.date-sharqah');
getSharqah();
function getSharqah() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=sharqah&country=United%20Arab%20Emirates&method=8')
    .then(response => response.json())
    .then(data =>{
        let sharqah = data.data.timings;
        let sharqahDate= data.data.date.gregorian.date;
        fajrSharqah.innerHTML=`${sharqah["Fajr"]}`
        shorouqSharqah.innerHTML=`${sharqah["Sunrise"]}`
        duhrSharqah.innerHTML=`${sharqah["Dhuhr"]}`
        asrSharqah.innerHTML=`${sharqah["Asr"]}`
        maghribSharqah.innerHTML=`${sharqah["Maghrib"]}`
        ishaSharqah.innerHTML=`${sharqah["Isha"]}`
        dateSharqah.innerHTML= `${sharqahDate}`

    })
}

let fajrTafilah= document.querySelector('.tafilah-pray-time-fajr');
let shorouqTafilah= document.querySelector('.tafilah-pray-time-shorouq');
let duhrTafilah= document.querySelector('.tafilah-pray-time-duhr');
let asrTafilah= document.querySelector('.tafilah-pray-time-asr');
let maghribTafilah= document.querySelector('.tafilah-pray-time-maghrib');
let ishaTafilah= document.querySelector('.tafilah-pray-time-isha');
let dateTafilah= document.querySelector('.date-tafilah');
getTafilah();
function getTafilah() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=tafilah&country=jordan&method=8')
    .then(response => response.json())
    .then(data =>{
        let tafilah = data.data.timings;
        let tafilahDate= data.data.date.gregorian.date;
        fajrTafilah.innerHTML=`${tafilah["Fajr"]}`
        shorouqTafilah.innerHTML=`${tafilah["Sunrise"]}`
        duhrTafilah.innerHTML=`${tafilah["Dhuhr"]}`
        asrTafilah.innerHTML=`${tafilah["Asr"]}`
        maghribTafilah.innerHTML=`${tafilah["Maghrib"]}`
        ishaTafilah.innerHTML=`${tafilah["Isha"]}`
        dateTafilah.innerHTML= `${tafilahDate}`

    })
}

let fajrTaif= document.querySelector('.taif-pray-time-fajr');
let shorouqTaif= document.querySelector('.taif-pray-time-shorouq');
let duhrTaif= document.querySelector('.taif-pray-time-duhr');
let asrTaif= document.querySelector('.taif-pray-time-asr');
let maghribTaif= document.querySelector('.taif-pray-time-maghrib');
let ishaTaif= document.querySelector('.taif-pray-time-isha');
let dateTaif= document.querySelector('.date-taif');
getTaif();
function getTaif() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=taif&country=saudi&method=8')
    .then(response => response.json())
    .then(data =>{
        let taif = data.data.timings;
        let taifDate= data.data.date.gregorian.date;
        fajrTaif.innerHTML=`${taif["Fajr"]}`
        shorouqTaif.innerHTML=`${taif["Sunrise"]}`
        duhrTaif.innerHTML=`${taif["Dhuhr"]}`
        asrTaif.innerHTML=`${taif["Asr"]}`
        maghribTaif.innerHTML=`${taif["Maghrib"]}`
        ishaTaif.innerHTML=`${taif["Isha"]}`
        dateTaif.innerHTML= `${taifDate}`

    })
}

let fajrYanbu= document.querySelector('.yanbu-pray-time-fajr');
let shorouqYanbu= document.querySelector('.yanbu-pray-time-shorouq');
let duhrYanbu= document.querySelector('.yanbu-pray-time-duhr');
let asrYanbu= document.querySelector('.yanbu-pray-time-asr');
let maghribYanbu= document.querySelector('.yanbu-pray-time-maghrib');
let ishaYanbu= document.querySelector('.yanbu-pray-time-isha');
let dateYanbu= document.querySelector('.date-yanbu');
getYanbu();
function getYanbu() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=yanbu&country=saudi&method=8')
    .then(response => response.json())
    .then(data =>{
        let yanbu = data.data.timings;
        let yanbuDate= data.data.date.gregorian.date;
        fajrYanbu.innerHTML=`${yanbu["Fajr"]}`
        shorouqYanbu.innerHTML=`${yanbu["Sunrise"]}`
        duhrYanbu.innerHTML=`${yanbu["Dhuhr"]}`
        asrYanbu.innerHTML=`${yanbu["Asr"]}`
        maghribYanbu.innerHTML=`${yanbu["Maghrib"]}`
        ishaYanbu.innerHTML=`${yanbu["Isha"]}`
        dateYanbu.innerHTML= `${yanbuDate}`

    })
}

let fajrZarqa= document.querySelector('.zarqa-pray-time-fajr');
let shorouqZarqa= document.querySelector('.zarqa-pray-time-shorouq');
let duhrZarqa= document.querySelector('.zarqa-pray-time-duhr');
let asrZarqa= document.querySelector('.zarqa-pray-time-asr');
let maghribZarqa= document.querySelector('.zarqa-pray-time-maghrib');
let ishaZarqa= document.querySelector('.zarqa-pray-time-isha');
let dateZarqa= document.querySelector('.date-zarqa');
getZarqa();
function getZarqa() {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=alzarqa&country=jordan&method=8')
    .then(response => response.json())
    .then(data =>{
        let zarqa = data.data.timings;
        let zarqaDate= data.data.date.gregorian.date;
        fajrZarqa.innerHTML=`${zarqa["Fajr"]}`
        shorouqZarqa.innerHTML=`${zarqa["Sunrise"]}`
        duhrZarqa.innerHTML=`${zarqa["Dhuhr"]}`
        asrZarqa.innerHTML=`${zarqa["Asr"]}`
        maghribZarqa.innerHTML=`${zarqa["Maghrib"]}`
        ishaZarqa.innerHTML=`${zarqa["Isha"]}`
        dateZarqa.innerHTML= `${zarqaDate}`

    })
}