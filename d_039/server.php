<?php
require_once "Alistamento.php";

$pessoa = new Alistamento($_POST["anoNasc"]);

echo json_encode(['resultado'=>$pessoa->verificarIdade()]);