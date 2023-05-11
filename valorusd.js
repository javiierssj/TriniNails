document.addEventListener("DOMContentLoaded", function() {
    var valorUSD = 100; // Valor en dólares que deseas convertir
    var accessKey = "HLPVFtjmsUVlJsB8QvTPKURQSHoAWNbr"; // Reemplaza esto con tu Access Key de Fixer API

    var url = "https://data.fixer.io/api/convert?access_key=" + accessKey + "&from=USD&to=CLP&amount=" + valorUSD;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var valorCLP = data.result;
            console.log("Valor en dólares: $" + valorUSD.toLocaleString());
            console.log("Valor en pesos chilenos: $" + valorCLP.toLocaleString());
        })
        .catch(error => console.error(error));
});