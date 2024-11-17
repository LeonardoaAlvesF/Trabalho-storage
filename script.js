function mascara_telefone() {
    //limitador
    var tel = document.getElementById("telefone").value
    console.log(tel)
    tel = tel.slice(0, 16) //(pode limitar a quantidade de char na entrada pelo java script)
    console.log(tel)
    document.getElementById("telefone").value = tel
    tel = document.getElementById("telefone").value.slice(0, 10)
    console.log(tel)

    //máscara
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[4] != " ") {
        if (tel_formatado[4] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 4) + " " + tel_formatado[4]
        }
    }

    if (tel_formatado[6] != " ") {
        if (tel_formatado[6] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 6) + " " + tel_formatado[6]
        }
    }

    if (tel_formatado[11] != "-") {
        if (tel_formatado[11] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 11) + "-" + tel_formatado[11]
        }
    }
}


function mascara_cpf() {
    var cpf_formatado = document.getElementById("cpf").value
    if (cpf_formatado[3] != ".") {
        if (cpf_formatado[3] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11];
        }
    }
}