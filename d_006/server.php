<?php
    $num = $_GET['num'];

    $resposta = "O dobro de $num vale ". ($num*2);
    $resposta .= "<br>O triplo de $num vale ". ($num*3);
    $resposta .= "<br>A raiz quadrada de $num é igual a ". number_format(sqrt($num),2,',','.');

    echo $resposta;
?>