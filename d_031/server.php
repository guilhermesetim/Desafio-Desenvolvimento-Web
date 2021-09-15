<?php
    $km = $_POST["km"];

    $km > 200 ? $coef = 0.45 : $coef = 0.5;

    echo json_encode(['valor'=>$km*$coef,'km'=>$km])
    
?>