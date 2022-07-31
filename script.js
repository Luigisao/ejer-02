

let producto = prompt( "¿Que producto deseas comprar? \n1.Tv \n2.Pc \n3.Webcam" ) 
let cuotas = 2;
let tv = 50000;
let pc = 100000;
let webcam = 20000;




const calcularValorCuota = ( cuotas ) => {
    
if((producto == "1") || (producto == "tv") || (producto == "Tv") || (producto == "TV")){
    do{
        alert(` El precio de lista de la TV es de: $${tv}`)
        porcentajeCuota = tv * 0.10;
        valorFinal = porcentajeCuota * cuotas;
        nuevoPrecioTv = tv + valorFinal;
        valorCuota = nuevoPrecioTv / cuotas;
        alert(`En ${cuotas} cuotas te quedaria el precio de la tv en $${nuevoPrecioTv} y el valor de cada cuota en $${valorCuota}`);
        cuotas ++;
    } while( cuotas <= 12)
}
 else if((producto == "2") || (producto == "pc") || (producto == "Pc") || (producto == "PC")){
    do{
        alert(` El precio de lista de la PC es de: $${pc}`)
        porcentajeCuota = pc * 0.10;
        valorFinal = porcentajeCuota * cuotas;
        nuevoPrecioPc = pc + valorFinal;
        valorCuota = nuevoPrecioPc / cuotas;
        alert(`En ${cuotas} cuotas te quedaria el precio de la PC en $${nuevoPrecioPc} y el valor de cada cuota en $${valorCuota}`);
        cuotas ++;
    } while( cuotas <= 12)
}
 else if((producto == "3") || (producto == "webcam") || (producto == "Webcam") || (producto == "WEBCAM")){
    do{
        alert(` El precio de lista de la Webcam es de: ${webcam}`)
        porcentajeCuota = webcam * 0.10;
        valorFinal = porcentajeCuota * cuotas;
        nuevoPrecioweb = webcam + valorFinal;
        valorCuota = nuevoPrecioweb / cuotas;
        alert(`En ${cuotas} cuotas te quedaria el precio de la Webcam en $${nuevoPrecioweb} y el valor de cada cuota en $${valorCuota}`);
        cuotas ++;
    } while( cuotas <= 12)
}


}


calcularValorCuota(cuotas)