<?php
    $frase = strtolower($_POST["frase"]);

    $v = substr_count($frase,'a');
    $p = strpos($frase,'a')+1;
    $u = strrpos($frase,'a')+1;

    echo json_encode(['vezes'=>$v,'primeira'=>$p,'ultima'=>$u]);
?>