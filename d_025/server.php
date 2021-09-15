<?php
    $nome = strtolower($_POST["nome"]);

    $silva = substr_count($nome,'silva');

    echo json_encode(['nome'=>($silva < 1)?'não tem':'tem']);
?>