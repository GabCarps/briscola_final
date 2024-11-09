// funzioni somma / sottrazione
plus2 = function(punteggio) {
    punteggio = punteggio + 2;
    return punteggio;
}
plus1 = function(punteggio) {
    punteggio = punteggio + 1;
    return punteggio;
}
minus1 = function(punteggio) {
    punteggio = punteggio - 1;
    return punteggio;
}
minus2 = function(punteggio) {
    punteggio = punteggio - 2;
    return punteggio;
}
plus4 = function(punteggio) {
    punteggio = punteggio + 4;
    return punteggio;
}
minus4 = function(punteggio) {
    punteggio = punteggio - 4;
    return punteggio;
}
//------------------------------------------------
// GIOCATORE 1
c1 = 0;
//------------------------------------------------
function p21_fun() {
    //c = c + 2;
    c1 = plus2(c1)
    render1();
    addRes1();
}
function p11_fun() {
    //c = c + 1;
    c1 = plus1(c1)
    render1();
    addRes1();
}
function m11_fun() {
    //c = c - 1;
    c1 = minus1(c1)
    render1();
    addRes1();
}
function m21_fun() {
    //c = c - 2;
    c1 = minus2(c1)
    render1();
    addRes1();
}
function p41_fun() {
    
    c1 = plus4(c1)
    render1();
    addRes1();
}
function m41_fun() {
    
    c1 = minus4(c1)
    render1();
    addRes1();
}
//------------------------------------------------
function render1() {
    punteggio1.textContent = c1;
}

addRes1 = function() {
    e1 = document.createElement("div")
    e1.classList.add("res")
    e1.textContent = c1;
    container1.appendChild(e1)
}

p21.onclick = p21_fun;
p11.onclick = p11_fun;
m11.onclick = m11_fun;
m21.onclick = m21_fun;
p41.onclick = p41_fun;
m41.onclick = m41_fun;
//------------------------------------------------
// GIOCATORE 2
c2 = 0;
//------------------------------------------------
function p22_fun() {
    c2 = plus2(c2)
    render2();
    addRes2();
}
function p12_fun() {
    //c = c + 1;
    c2 = plus1(c2)
    render2();
    addRes2();
}
function m12_fun() {
    //c = c - 1;
    c2 = minus1(c2)
    render2();
    addRes2();
}
function m22_fun() {
    c2 = minus2(c2)
    render2();
    addRes2();
}
function p42_fun() {
    
    c2 = plus4(c2)
    render2();
    addRes2();
}
function m42_fun() {
    
    c2 = minus4(c2)
    render2();
    addRes2();
}
//-----------------------------------------------
function render2() {
    punteggio2.textContent = c2;
}

addRes2 = function() {
    e1 = document.createElement("div")
    e1.classList.add("res")
    e1.textContent = c2;
    container2.appendChild(e1)
}

p22.onclick = p22_fun;
p12.onclick = p12_fun;
m12.onclick = m12_fun;
m22.onclick = m22_fun;
p42.onclick = p42_fun;
m42.onclick = m42_fun;
//-----------------------------------------------
// GIOCATORE 3
c3 = 0;
//------------------------------------------------
function p23_fun() {
    c3 = plus2(c3)
    render3();
    addRes3();
}
function p13_fun() {
    c3 = plus1(c3)
    render3();
    addRes3();
}
function m13_fun() {
    c3 = minus1(c3)
    render3();
    addRes3();
}
function m23_fun() {
    c3 = minus2(c3)
    render3();
    addRes3();
}
function p43_fun() {
    
    c3 = plus4(c3)
    render3();
    addRes3();
}
function m43_fun() {
    
    c3 = minus4(c3)
    render3();
    addRes3();
}
//------------------------------------------------
function render3() {
    punteggio3.textContent = c3;
}

addRes3 = function() {
    e1 = document.createElement("div")
    e1.classList.add("res")
    e1.textContent = c3;
    container3.appendChild(e1)
}
  
p23.onclick = p23_fun;
p13.onclick = p13_fun;
m13.onclick = m13_fun;
m23.onclick = m23_fun;
p43.onclick = p43_fun;
m43.onclick = m43_fun;
//------------------------------------------------
// GIOCATORE 4
c4 = 0;
//------------------------------------------------
function p24_fun() {
    c4 = plus2(c4)
    render4();
    addRes4();
}
function p14_fun() {
    c4 = plus1(c4)
    render4();
    addRes4();
}
function m14_fun() {
    c4 = minus1(c4)
    render4();
    addRes4();
}
function m24_fun() {
    c4 = minus2(c4)
    render4();
    addRes4();
}
function p44_fun() {
    
    c4 = plus4(c4)
    render4();
    addRes4();
}
function m44_fun() {
    
    c4 = minus4(c4)
    render4();
    addRes4();
}
//------------------------------------------------
function render4() {
    punteggio4.textContent = c4;
}
  
addRes4 = function() {
    e1 = document.createElement("div")
    e1.classList.add("res")
    e1.textContent = c4;
    container4.appendChild(e1)
}
  
p24.onclick = p24_fun;
p14.onclick = p14_fun;
m14.onclick = m14_fun;
m24.onclick = m24_fun;
p44.onclick = p44_fun;
m44.onclick = m44_fun;
//------------------------------------------------
// GIOCATORE 4
c5 = 0;
//------------------------------------------------
function p25_fun() {
    c5 = plus2(c5)
    render5();
    addRes5();
}
function p15_fun() {
    c5 = plus1(c5)
    render5();
    addRes5();
}
function m15_fun() {
    c5 = minus1(c5)
    render5();
    addRes5();
}
function m25_fun() {
    c5 = minus2(c5)
    render5();
    addRes5();
}
function p45_fun() {
    
    c5 = plus4(c5)
    render5();
    addRes5();
}
function m45_fun() {
    
    c5 = minus4(c5)
    render5();
    addRes5();
}
//------------------------------------------------
function render5() {
    punteggio5.textContent = c5;
}
  
addRes5 = function() {
    e1 = document.createElement("div")
    e1.classList.add("res")
    e1.textContent = c5;
    container5.appendChild(e1)
}
  
p25.onclick = p25_fun;
p15.onclick = p15_fun;
m15.onclick = m15_fun;
m25.onclick = m25_fun;
p45.onclick = p45_fun;
m45.onclick = m45_fun;
//------------------------------------------------