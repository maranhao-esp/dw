function mostrar() {
    let nome=document.getElementById("nome").value;
    document.getElementById("resposta").textContent = `ola ${nome}` ;
}
    const mostrar = document.getElementById("mostrar");
    mostrar.addeventlistener("click", mostrarola);