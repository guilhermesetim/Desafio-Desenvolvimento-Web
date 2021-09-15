<?php

$valor1 = $_POST['valor1'];
$valor2 = $_POST['valor2'];

switch($valor1 <=> $valor2){
    case 1:
        $comparacao = 'O primeiro valor é maior.';
        break;
    case 0:
        $comparacao = 'Ambos os valores são iguais.';
        break;
    case -1:
        $comparacao = 'O segundo valor é maior';
        break;
}


echo json_encode(['comparacao'=>$comparacao]);