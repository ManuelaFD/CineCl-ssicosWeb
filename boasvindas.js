
function mostrarNome(){

    let inputNome = document.querySelector ("#nome");
    let texto = document.createTextNode (`Não encontrado ${inputNome.value}!`);
    let pes = document.createElement('pes')
    pes.appendChild (texto);
    document.body.appendChild (pes);
} 



