<?php
    $angulo = $_POST["angulo"];

    $seno = number_format(sin(deg2rad($angulo)),2);
    $cosseno = number_format(cos(deg2rad($angulo)),2);
    $tangente = number_format(tan(deg2rad($angulo)),2);

    echo json_encode(['s'=>$seno,'c'=>$cosseno,'t'=>$tangente,'a'=>$angulo])
?>