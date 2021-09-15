<?php
    $km = $_POST["km"];

    if ($km > 80){
        echo json_encode(['status'=>true,'multa'=>($km-80)*7]);

    } else {
        echo json_encode(['status'=>false]);
        
    }

?>