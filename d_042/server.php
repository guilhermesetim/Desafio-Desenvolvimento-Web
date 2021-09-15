<?php
require_once "AnaliseTriangulo.php";


for ($i=1;$i<=3;$i++){
    $segmentos[$i] = $_POST["segmento$i"];
}

$triangulo = new AnaliseTriangulo($segmentos);
$triangulo->validarTriangulo();


echo json_encode(['validade'=>$triangulo->getValidade(),'tipo'=>$triangulo->getTipo()]);