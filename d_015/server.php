<?php
    $dias = $_POST['dias'];
    $km = $_POST['km'];

    $p = ($dias*60)+($km*0.15);

    echo json_encode(['dias'=>$dias,'km'=>$km,'p'=>$p])
?>