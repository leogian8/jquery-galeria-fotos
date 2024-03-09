$(document).ready(function() {
    
    $('header button').click(function() {  //ANIMAÇAO, AO CLICAR ADICIONAR IMAGEM (BUTTON) IRA DESCER O FORMULARIO (SLIDE DOWN)
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() { //ANIMAÇAO, AO CLICAR CANCELAR (ID #BOTAO-CANCELAR) IRA SUBIR O FORMULARIO (SLIDE UP)
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {        //ADICIONANDO AO DAR SUBMIT NOVA IMAGEM A PARTIR DO URL
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" tittle="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo (novoItem);
        
        $(novoItem).appendTo('ul');     //anexando novo item ao ul

        $(novoItem).fadeIn(1000);       //animação ao adicionar imagem

        $('#endereco-imagem-nova').val('')  //resetando

    })
})