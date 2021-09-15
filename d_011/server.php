<?php
    $larg = $_POST["l"];
    $alt = $_POST["a"];

    $area = $larg * $alt;
    $tinta = $area / 2;

    echo json_encode(['altura'=>$alt,'largura'=>$larg,'area'=>$area,'litros'=>$tinta])
?>