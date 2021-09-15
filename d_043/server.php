<?php

require_once "Imc.php";

$indiv = new Imc($_POST["altura"],$_POST["peso"]);
$indiv->classificar();

echo json_encode(['categoria'=>$indiv->getCategoria()]);