<?php
    $valor = $_POST["valor"];

    if($valor == ''){
        $valor = date('Y');
    }



    echo json_encode(['ano'=>$valor,'be'=>bissexto($valor)]);




function bissexto($ano){
    if (($ano % 4 == 0 && $ano % 100 != 0) || ($ano % 400 == 0)){
        return '';
    } else {
        return 'não ';
    }
}