<?php
    $s = $_POST["s"];
    $porc = 15;
    $sNovo = $s + ($s*$porc/100);

    echo json_encode(['salAnt' => $s,'porc' => $porc,'salAtual'=> $sNovo])
?>