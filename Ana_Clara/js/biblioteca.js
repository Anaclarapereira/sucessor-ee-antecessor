function exercicio1(){
    if(document.frm_aninha.botao.value == "Mostrar"){
        numero = parseInt(document.frm_aninha.Entrada.value);
        sucessor = numero + 1;
        antecessor = numero - 1;
        document.frm_aninha.Antecessor.value = antecessor;
        document.frm_aninha.Sucessor.value = sucessor;
        document.frm_aninha.botao.value = "Limpar";
    }
    else
    {
        document.frm_aninha.Entrada.value = "";
        document.frm_aninha.Antecessor.value = "";
        document.frm_aninha.Sucessor.value = "";
        document.frm_aninha.botao.value = "Mostrar";
    }
}