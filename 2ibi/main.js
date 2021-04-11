
const listar = document.querySelector('#listar')



// Renderiza os dados  na taabela

var mostrarDados = function (resultados){
    let output = '';
    resultados.forEach(element => {
         output += '<tr>'+
        `<td>${element.name}</td>`+
        `<td>${element.capital}</td>`+
        `<td>${element.region}</td>`+
        `<td>${element.subregion}</td>`+
        `<td>${element.area}</td>`+
        `<td >${element.timezones}</td>`+
        `<td>${element.nativeName}</td>`+
        `<td><a href='${element.flag}'>${element.flag} </a></td>`+
        '</tr>'

    });
    
    document.querySelector('#table').innerHTML = output;
    
    }

    














