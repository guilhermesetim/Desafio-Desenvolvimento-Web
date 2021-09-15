<?php
    $esc = $_POST["esc"];

    switch($esc){
        case 1:
            $esc = 'music1.mp3';
            break;
        case 2:
            $esc = 'music2.mp3';
            break;
        case 3:
            $esc = "music3.mp3";
            break;
    }

    echo json_encode(['escolha'=>$esc]);
?>