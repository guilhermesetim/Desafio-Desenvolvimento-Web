<?php
$v1 = $_POST['v1'];
$v2 = $_POST['v2'];
$v3 = $_POST['v3'];

$lista =  [$v1,$v2,$v3];
sort($lista);

echo json_encode(['maior'=> $lista[2], 'menor'=> $lista[0]]);