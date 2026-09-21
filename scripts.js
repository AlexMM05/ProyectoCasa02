window.addEventListener("load", function () {
    let inputNumero = document.getElementById("numero");
    let inputNombre = document.getElementById("nombre");
    let btnConsultar = document.getElementById("btnConsultar");

    btnConsultar.addEventListener("click", function () {
        let numero = inputNumero.value;

        if (numero === "") {
            alert("Por favor, introduce un número de Pokédex");
            return;
        }

        fetch("https://pokeapi.co/api/v2/pokemon/" + numero)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Pokémon no encontrado");
                }
                return response.json();
            })
            .then(function (data) {
                inputNombre.value = data.name;
            })
            .catch(function (error) {
                alert(error.message);
                inputNombre.value = "";
            });
    });
});