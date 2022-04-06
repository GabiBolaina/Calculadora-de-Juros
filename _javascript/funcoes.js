function calculoJuros() {
    
    var tipoJuros = document.getElementById('cTipoJuro').value;
    var valorInicial = Number(document.getElementById('cValorInicial').value);
    var tempo = Number.parseInt(document.getElementById('cTempo').value);
    var rentabilidade = (Number(document.getElementById('cRentabilidade').value))/100;

    /* para juros simples */
    if(tipoJuros == 'JS'){
        var total = valorInicial + valorInicial*tempo*rentabilidade;
    }

    /* fim juros simples */
    
    /* para juros compostos */
    if(tipoJuros == 'JC'){
    }
    /* fim juros composto */

    
    
    document.getElementById('cTotal').value = total;
}