<?php
    $num = $_POST["num"];
    $comp = rand(0,5);
    
    if($num == $comp){
        $status = "Parabéns! Você conseguiu me vencer! Era o número $num";
    } else {
        $status = "Ganhei! Eu pensei no número $comp e não no $num";
    }

    echo json_encode(['status'=>$status])
?>