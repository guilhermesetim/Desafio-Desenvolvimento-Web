<?php
require_once "StatusAluno.php";

$nota1 = $_POST["nota1"];
$nota2 = $_POST["nota2"];

$aluno = new StatusAluno($nota1,$nota2);
$aluno->avaliar();


echo json_encode(['status'=>$aluno->getStatus(),'media'=>$aluno->getMedia()]);
