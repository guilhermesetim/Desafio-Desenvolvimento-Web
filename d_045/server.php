<?php
require_once "RegraNegocio.php";

$round = new RegraNegocio($_POST["opcao"]);




echo json_encode(['comp'=>$round->emoj,'result'=>$round->getResult()]);