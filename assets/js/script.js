let formulario   = document.getElementById('formulario');
let diaInput     = document.getElementById("day");
let mesInput     = document.getElementById("month");
let anoInput     = document.getElementById("year");

let dayHelper    = document.getElementById("day-helper");
let monthHelper  = document.getElementById("month-helper");
let yearHelper   = document.getElementById("year-helper");

let yearResult   = document.getElementById("yearResult");
let monthResult  = document.getElementById("monthResult");
let dayResult    = document.getElementById("dayResult");

let dayLabel     = document.getElementById("dayLabel");
let monthLabel   = document.getElementById("monthLabel");
let yearLabel    = document.getElementById("yearLabel");
    

formulario.addEventListener('submit', function (e){

    e.preventDefault();

    validarDia();
    validarMes();
    validarAno();
    
    if (dayHelper.innerText === "" && monthHelper.innerText === "" && yearHelper.innerText === "") {
        calcularIdade();
    }
    
})


function validarDia() {
    let dia = parseInt(diaInput.value);
    let mes = parseInt(mesInput.value);
    let ano = parseInt(anoInput.value);
    let diaAtual = new Date().getDate();
    let mesAtual = new Date().getMonth() + 1;
    let anoAtual = new Date().getFullYear();
    
    if (diaInput.value === "") {
        dayHelper.innerText = "This Field is Required";
        dayHelper.classList.add("error");
        diaInput.classList.add("input-error");
        dayLabel.classList.add("label-error"); 

    } else if(dia < 1) {
        dayHelper.innerText = "Invalid Day";
        dayHelper.classList.add("error");
        diaInput.classList.add("input-error");
        dayLabel.classList.add("label-error");

    } else if(dia > 31) {
        dayHelper.innerText = "Invalid Day";
        dayHelper.classList.add("error");
        diaInput.classList.add("input-error");
        dayLabel.classList.add("label-error");

    } else if(ano === anoAtual && mes === mesAtual && dia > diaAtual) {
        dayHelper.innerText = "Must be a Valid Date";
        dayHelper.classList.add("error");
        diaInput.classList.add("input-error");
        dayLabel.classList.add("label-error");

    } else  {
        dayHelper.innerText = "";
        dayHelper.classList.remove("error");
        diaInput.classList.remove("input-error");
        dayLabel.classList.remove("label-error");
    }
     
}


function validarMes() {
    let dia = parseInt(diaInput.value);
    let mes = parseInt(mesInput.value);
    let ano = parseInt(anoInput.value);
    let mesAtual = new Date().getMonth() + 1;
    let anoAtual = new Date().getFullYear();

    if (mesInput.value === "") {
        monthHelper.innerText = "This Field is Required";
        monthHelper.classList.add("error");
        mesInput.classList.add("input-error");
        monthLabel.classList.add("label-error");

    } else if (mes < 1 || mes > 12) {
        monthHelper.innerText = "Between 1 and 12";
        monthHelper.classList.add("error");
        mesInput.classList.add("input-error");
        monthLabel.classList.add("label-error");

    } else if((mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) && dia > 31){
        dayHelper.innerText = "Invalid Day";
        dayHelper.classList.add("error");
        diaInput.classList.add("input-error");
        dayLabel.classList.add("label-error");

    } else if((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia >= 31){
        dayHelper.innerText = "Invalid Day";
        dayHelper.classList.add("error");
        diaInput.classList.add("input-error");
        dayLabel.classList.add("label-error");

    } else if(mes === 2 && dia > 29){
        dayHelper.innerText = "Invalid Day";
        dayHelper.classList.add("error");
        diaInput.classList.add("input-error");
        dayLabel.classList.add("label-error");

    } else if(mes === 2 && dia === 29 && !((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)){
        dayHelper.innerText = "Invalid Day";
        dayHelper.classList.add("error");
        diaInput.classList.add("input-error");
        dayLabel.classList.add("label-error");

    } else if(ano === anoAtual && mes > mesAtual) {
        monthHelper.innerText = "Must be a Valid Date";
        monthHelper.classList.add("error");
        mesInput.classList.add("input-error");
        monthLabel.classList.add("label-error");
    
    }else {
        monthHelper.innerText = "";
        monthHelper.classList.remove("error");
        mesInput.classList.remove("input-error");
        monthLabel.classList.remove("label-error");
    }
}


function validarAno() {
    let ano = parseInt(anoInput.value);
    let anoAtual = new Date().getFullYear();

    if (anoInput.value === "") {
        yearHelper.innerText = "This Field is Required";
        yearHelper.classList.add("error");
        anoInput.classList.add("input-error");
        yearLabel.classList.add("label-error");

    } else if (ano < 1900 || ano > anoAtual) {
        yearHelper.innerText = "Must be Between 1900 and " + anoAtual;
        yearHelper.classList.add("error");
        anoInput.classList.add("input-error");
        yearLabel.classList.add("label-error");

    }else {
        yearHelper.innerText = "";
        yearHelper.classList.remove("error");
        anoInput.classList.remove("input-error");
        yearLabel.classList.remove("label-error");
    }
}
   

function calcularIdade() {
    let dia = parseInt(diaInput.value);
    let mes = parseInt(mesInput.value);
    let ano = parseInt(anoInput.value);
    let diaAtual = new Date().getDate();
    let mesAtual = new Date().getMonth() + 1;
    let anoAtual = new Date().getFullYear();

    let anos = anoAtual - ano;
    let meses = mesAtual - mes;
    let dias = diaAtual - dia;

    if (dias < 0) {
        meses--;
        dias += new Date(anoAtual, mesAtual - 1, 0).getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    yearResult.innerHTML = "<span>" + anos + "</span> years";
    monthResult.innerHTML = "<span>" + meses + "</span> months";
    dayResult.innerHTML = "<span>" + dias + "</span> days";
}
