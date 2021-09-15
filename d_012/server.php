<?php
    $p = $_POST["p"];
    $desc = 5;
    $d = $p-($p*($desc/100));

    echo json_encode(['precoAnt'=>$p,'desc'=>$desc,'precoAtual'=>$d])
?>