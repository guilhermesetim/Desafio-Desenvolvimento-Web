<?php
    $local = $_POST["local"];
    $uf = substr($local,-2);

    $estados = ['AC'=>'Acre','BA'=>'Bahia','PR'=>'Paraná'];

    $ufNome = "Estado não cadastrado";

    foreach($estados as $k=>$v){
        if ($k == $uf){
            $ufNome = $v;
        }
    }



    echo json_encode(['est'=>$ufNome]);
?>