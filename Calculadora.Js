 //Calculadora Dinamica

        // Queremos um número inicial
        // Queremos um sinal(tipo de operação)
        // Queremo um número final

        var numeroInicial = prompt("Informe o primeiro número: ");

        var sinal = prompt("Informe o sinal de operação: ");

        /*Verificando se o Operador digitado é Valido para Operação básica */
        // Se o sinal "!=" for diferente de + e - e / e *.
        while(sinal != '+' && sinal != '-' && sinal != '/' && sinal != '*'){
            alert("Por gentileza, Informe o operador correto")
            sinal = prompt("Informe o sinal Validor!");
        }

        var numeroFinal = prompt("Informe o último número: ");

        /*Convertendo uma string em um número inteiro*/
        //A variável númeroInicial vai ser igual a ela mesma, só que em forma de número inteiro em razão da conversão.
        numeroInicial = parseInt(numeroInicial);
        numeroFinal = parseInt(numeroFinal);

        var resultadoFinal = 0;

        /*Se você não definir no prompt inicial que o valor é um número inteiro, ocorrerá um concatenação(no sinal de mais) e não uma soma */
        if(sinal == '+'){
            resultadoFinal = numeroInicial + numeroFinal;
        }else if(sinal == '-'){
            resultadoFinal = numeroInicial - numeroFinal;
        }else if(sinal == '*'){
            resultadoFinal = numeroInicial * numeroFinal;
        }else if(sinal == '/'){
            resultadoFinal = numeroInicial / numeroFinal;
        }

        alert("O resultado final é: "+ resultadoFinal);