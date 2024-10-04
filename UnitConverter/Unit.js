function ValP(n) {
    n = parseInt(n)
    a = ["Select","Area","Energy","Length","Power","Pressure","Speed","Temperature","Volume","Weight"]
    b = a[n]
    for (i=1;i<a.length;i++) {
        document.getElementById(a[i]).style.display = "none"
    }
    document.getElementById(b).style.display = "block"
}
function ESubmit() {
    i = parseFloat(document.frm_E.i.value)
    di = document.frm_E.from.value
    dt = document.frm_E.to.value
    fn = di + dt
    o = 0
    if ((fn == "cc") || (fn == "jj") || (fn == "CC") || (fn == "JJ")) {
        o = i
    }
    else if (fn == "cj") {
        o = (i*4.184)
    }
    else if (fn == "jc") {
        o = i/4.184
    }
    else if (fn == "cC") {
        o = i/1000
    }
    else if (fn == "Cc") {
        o = i*1000
    }
    else if (fn == "cJ") {
        o = ((i/1000)*4.184)
    }
    else if (fn == "jC") {
        o = ((i/1000)/4.184)
    }
    else if (fn == "Cj") {
        o = i*4184
    }
    else if (fn == "jJ") {
        o = i/1000
    }
    else if (fn == "Jj") {
        o = i*1000
    }
    else if (fn == "CJ") {
        o = i*4.184
    }
    else if (fn == "JC") {
        o = i/4.184
    }
    else {
    o = (i/4.184)*1000
    }
    document.frm_E.o.value = o
}
function EExchange() {
    a = document.frm_E.i.value
    document.frm_E.i.value = document.frm_E.o.value
    document.frm_E.o.value = a
    b = document.frm_E.from.value
    document.frm_E.from.value = document.frm_E.to.value
    document.frm_E.to.value = b
}
function TSubmit() {
    i = parseFloat(document.frm_T.i.value)
    di = document.frm_T.from.value
    dt = document.frm_T.to.value
    fn = di + dt
    o = 0
    if ((fn == "cc") || (fn == "ff") || (fn == "kk")) {
        o = i
    }
    else if (fn == "cf") {
        o = (((9*i)+160)/5)
    }
    else if (fn == "ck") {
        o = i+273
    }
    else if (fn == "fc") {
        o = (((5*i)-160) /9)
    }
    else if (fn == "fk") {
        o = (((5*i)-160) /9)+273
    }
    else if (fn == "kc") {
        o = i-273
    }
    else {
    o = (((9*(i-273))+160)/5)
    }
    document.frm_T.o.value = o
}
function TExchange() {
    a = document.frm_T.o.value
    document.frm_T.o.value = document.frm_T.i.value
    document.frm_T.i.value = a
    b = document.frm_T.from.value
    document.frm_T.from.value = document.frm_T.to.value
    document.frm_T.to.value = b
}