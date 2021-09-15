<?php
    //funções
    function maiuscula($n){
        $nTratada = strtoupper($n);
        return $n == $nTratada ? 'Sim':'Não';
    }

    function minuscula($n){
        $nTratada = strtolower($n);
        return $n == $nTratada ? 'Sim':'Não';
    }

    function capitalize($n){
        //relativo ao comando .istitle()
        $nTratada = ucwords($n);
        return $n == $nTratada ? 'Sim':'Não';
    }

    //variavel
    $v = $_POST["variavel"] ?? '';

    //montando o retorno
    $resposta = "O tipo desse valor é: ". gettype($v);
    $resposta .= "<br>É vazia: ". (empty($v)? 'Sim':'Não');
    $resposta .= "<br>É um número: ". (is_numeric($v)?'Sim':'Não');
    $resposta .= "<br>É alfabetico: ". (ctype_alpha($v)?'Sim':'Não');
    $resposta .= "<br>É alfanumérico: ". (ctype_alnum($v)?'Sim':'Não');
    $resposta .= "<br>Esta em maiúscula: ". maiuscula($v);
    $resposta .= "<br>Esta em minúscula: ". minuscula($v);
    $resposta .= "<br>Esta capitalizado: ". capitalize($v);
    
    echo $resposta;
?>