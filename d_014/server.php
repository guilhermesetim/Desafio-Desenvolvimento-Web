<?php
    $t = $_POST["t"];
    $f = ($t * 9/5) + 32;

    echo json_encode(['celsius'=>number_format($t,1,',','.'),'fahren'=>number_format($f,1,',','.')])
?>