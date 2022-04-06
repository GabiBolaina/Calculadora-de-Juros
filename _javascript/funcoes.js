function calculoJuros() {
    
    var tipoJuros = document.getElementById('cTipoJuro').value;
    var valorInicial = Number(document.getElementById('cValorInicial').value);
    var tempo = Number.parseInt(document.getElementById('cTempo').value);
    var rentabilidade = (Number(document.getElementById('cRentabilidade').value))/100;
    var tipoTempo = document.getElementById('cTipoTempo').value;
    var tipoRentabilidade = document.getElementById('cTipoRentabilidade').value;

    if(tipoTempo != tipoRentabilidade){
        if(tipoTempo == "A" && tipoRentabilidade == "M"){
            tempo = tempo*12;
        }
        if(tipoTempo == "A" && tipoRentabilidade == "D"){
            tempo = tempo*365;
        }
        if(tipoTempo == "M" && tipoRentabilidade == "D"){
            tempo = tempo*30;            
        }
    }

    /* Passando rentabilidade e tempo pro mesmo tipo */

    /* fim Passando rentabilidade e tempo pro mesmo tipo */

    /* para juros simples */
    if(tipoJuros == 'JS'){
        var total = valorInicial + valorInicial*tempo*rentabilidade;
    }

    /* fim juros simples */
    
    /* para juros compostos */
    if(tipoJuros == 'JC'){
        var total = valorInicial*(1+rentabilidade)**tempo
    }
    /* fim juros composto */

    total = Number.parseFloat(total).toFixed(2);
    
    document.getElementById('cTotal').value = total;
}