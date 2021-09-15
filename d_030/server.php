<?php
    $num = $_POST["num"];

    if ($num % 2 == 0){
        $paridade = "Par";
    } else {
        $paridade = 'Impar';
    }

    echo json_encode(['num'=>$num,'paridade'=>$paridade]);
?>