<?php
require_once "Analise.php";

for($i=0;$i<=2;$i++){
    $lado[$i] = $_POST["lado$i"];
}

$triangulo = new Analise;
$triangulo->analisar($lado);

echo json_encode(['resposta'=>$triangulo->getResultado()]);