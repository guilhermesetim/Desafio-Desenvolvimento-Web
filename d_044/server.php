<?php
require_once "Pagamento.php";

$preco = $_POST["preco"];
$formaPagamento = $_POST["formaPagamento"];

$venda = new Pagamento($preco,$formaPagamento);
$venda->calcularValorFinal();


echo json_encode(['precoAnterior'=>$venda->getValorPrev(),'precoPosterior'=>$venda->getValorNext()]);