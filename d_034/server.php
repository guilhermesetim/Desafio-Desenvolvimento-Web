<?php
require_once "Aumento.php";

$salario = $_POST['salario'];

$func = new Aumento();
$func->aumentar($salario);

echo json_encode(['aum'=> $func->getAum(),
'ant'=> $func->getSal()]);