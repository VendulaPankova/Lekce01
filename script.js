//výplata

const hodSazba = 320
const pracDoba = 7 * 21
const prijem = hodSazba * pracDoba

document.body.innerHTML += "<p> Měsíční příjem: " + prijem + " CZK </p>"

const pausal = prijem * 0.4
const dan = Math.floor(pausal * 0.15)

document.body.innerHTML += "<p> Daň z paušálního přijmu: " + dan + " CZK </p>"

// délka filmu

const delkaFilmu = 223
const hodiny = 223 / 60
const minuty = delkaFilmu % 60

document.body.innerHTML += "<p> film Pán prestenů: Dvě věže trvá " + hodiny + "</p>"
document.body.innerHTML += "<p> film Pán prestenů: Dvě věže trvá " + Math.floor(hodiny) + "</p>"
document.body.innerHTML += "<p> film Pán prestenů: Dvě věže trvá " + Math.ceil(hodiny) + "</p>"
document.body.innerHTML += "<p> film Pán prestenů: Dvě věže trvá " + Math.floor(hodiny) + " hodin a " + minuty + " minut </p>"

//email
const jmeno = "vendula"
const prijmeni = "pankova"
const znak = "."

document.body.innerHTML += "<p> e-mail: " + jmeno + znak + prijmeni + "@gmail.com </p>"

//ultramaraton

const start = 15
const delka = start + 20
const konec = delka %  24

document.body.innerHTML += "<p> Běžec doběhl v " + konec + "hodin </p>"

// Náhodná čísla

document.body.innerHTML = Math.random()

//převod měny

const wageInEur = 20
const rate = 24.55
const wageInCzk = Math.round(wageInEur * rate)

document.body.innerHTML += "<h1> hodinová mzda v českých korunách je " + wageInCzk + " czk </h1>"










