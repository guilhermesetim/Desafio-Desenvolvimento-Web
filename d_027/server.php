<?php
    $nome = ucwords($_POST["nome"]);

    $p = substr($nome,0,strpos($nome,' '));
    $u = substr($nome,strrpos($nome,' '));

    echo json_encode(['p'=>$p,'u'=>$u]);
?>