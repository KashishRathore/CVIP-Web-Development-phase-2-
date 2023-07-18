let fahrenheitInput = document.getElementById('fahrenheitInput');
let celsiusInput = document.getElementById('celsiusInput');
let kelvinInput = document.getElementById('kelvinInput');
let rankineInput = document.getElementById('rankineInput');
let centigradeInput = document.getElementById('centigradeInput');
let reaumurInput = document.getElementById('reaumurInput');
let convert = document.getElementById('convert');
let resetBtn = document.querySelector('#reset')

let c, k, r, ce, f, re;


fahrenheitInput.oninput = (e) => {
    let c = ((parseFloat(fahrenheitInput.value - 32) * 5) / 9);
    celsiusInput.value = parseFloat(c.toFixed(2));

    let k = parseFloat(fahrenheitInput.value - 32) * 5 / 9 + 273.15;
    kelvinInput.value = parseFloat(k.toFixed(2));

    let r = (parseFloat(fahrenheitInput.value + 459.67));
    rankineInput.value = parseFloat(r.toFixed(2))

    let ce = ((parseFloat(fahrenheitInput.value - 32) * 5) / 9);
    centigradeInput.value = parseFloat(c.toFixed(2));

    let re = (parseFloat(fahrenheitInput.value - 32)/2.25);
    reaumurInput.value = parseFloat(re.toFixed(2))
    
}


celsiusInput.oninput = (e) => {
    let f = (parseFloat(celsiusInput.value * 9) / 5 + 32)
    fahrenheitInput.value = parseFloat(f.toFixed(2));

    let k = (parseFloat(celsiusInput.value) + 273.15)
    kelvinInput.value = parseFloat(k.toFixed(2));

    let r = (parseFloat(celsiusInput.value + 273.15) * 1.8)
    rankineInput.value = parseFloat(r.toFixed(2));

    centigradeInput.value = celsiusInput.value;

    let re = (parseFloat(celsiusInput.value)*0.8)
    reaumurInput.value = parseFloat(re.toFixed(2))
}

centigradeInput.oninput = (e) => {
    let f = (parseFloat(centigradeInput.value * 9) / 5 + 32)
    fahrenheitInput.value = parseFloat(f.toFixed(2));

    let k = (parseFloat(centigradeInput.value) + 273.15)
    kelvinInput.value = parseFloat(k.toFixed(2));

    let r = (parseFloat(centigradeInput.value + 273.15) * 1.8)
    rankineInput.value = parseFloat(r.toFixed(2));

    celsiusInput.value = centigradeInput.value;

    let re = (parseFloat(centigradeInput.value)*0.8)
    reaumurInput.value = parseFloat(re.toFixed(2))
}

kelvinInput.oninput = (e) => {
    let f = ((parseFloat((kelvinInput.value - 273.15) * 9) / 5) + 32);
    fahrenheitInput.value = parseFloat(f.toFixed(2));

    let c = (parseFloat(kelvinInput.value) - 273.15)
    celsiusInput.value = parseFloat(c.toFixed(2));

    let r = (parseFloat(kelvinInput.value)*1.8)
    rankineInput.value = parseFloat(r.toFixed(2));

    let ce = (parseFloat(kelvinInput.value) - 273.15)
    centigradeInput.value = parseFloat(c.toFixed(2));

    let re = (parseFloat(kelvinInput.value - 273.15)*0.8)
    reaumurInput.value = parseFloat(re.toFixed(2))
    
}

rankineInput.oninput = (e) => {
   let f = (parseFloat(rankineInput.value) - 459.67 )
   fahrenheitInput.value = parseFloat(f.toFixed(2));

   let c = (parseFloat(rankineInput.value-491.67)/1.8)
   celsiusInput.value = parseFloat(c.toFixed(2));

   let k = (parseFloat(rankineInput.value)/1.8)
   kelvinInput.value = parseFloat(k.toFixed(2));

   let ce = (parseFloat(rankineInput.value-491.67)/1.8)
   centigradeInput.value = parseFloat(ce.toFixed(2));

   let re = (parseFloat(rankineInput.value - 491.67) / 2.25)
   reaumurInput.value = parseFloat(re.toFixed(2))
   
}


reaumurInput.oninput = () => {
    let f = (parseFloat(reaumurInput.value * 2.25) + 32 )
    fahrenheitInput.value = parseFloat(f.toFixed(2));
 
    let c = (parseFloat(reaumurInput.value)*1.25)
    celsiusInput.value = parseFloat(c.toFixed(2));
 
    let k = (parseFloat(reaumurInput.value * 1.25 ) + 273.15)
    kelvinInput.value = parseFloat(k.toFixed(2));
 
    let ce = (parseFloat(reaumurInput.value)*1.25)
    centigradeInput.value = parseFloat(ce.toFixed(2));
 
    let ra = (parseFloat(reaumurInput.value * 2.25 ) + 32 + 459.67 )
    rankineInput.value = parseFloat(ra.toFixed(2))
}


resetBtn.addEventListener('click',function(){
    fahrenheitInput.value = ' ';
    celsiusInput.value = ' ';
    rankineInput.value = ' ';
    kelvinInput.value = ' ';
    centigradeInput.value = ' ';
    reaumurInput.value = ' ';
})
