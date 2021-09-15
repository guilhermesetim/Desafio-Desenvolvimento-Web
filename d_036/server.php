<?php

require_once "Simlacao.php";

$pessoa = new Simulacao;
$pessoa->setValorCasa($_POST["valorCasa"]);
$pessoa->setSalarioComprador($_POST["salarioComprador"]);
$pessoa->setAnosFinanciamento($_POST["anosFinanciamento"]);
$pessoa->simular();

//print_r($pessoa);



echo json_encode(['resultado'=> $pessoa->getResultado(),
'valor'=>$pessoa->getValorCasa(),
'anos'=>$pessoa->getAnosFinanciamento(),
'prestacao'=>$pessoa->getMensalidade()]);