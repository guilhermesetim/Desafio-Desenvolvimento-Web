<?php
    $n = $_POST["n"];

    $maiuscula = strtoupper($n);
    $minuscula = strtolower($n);
    $letras = strlen(str_replace(' ','',$n));
    
    $primeiroNome = substr($n,0,strpos($n,' '));
    

    echo json_encode(['nome'=>$n,'maiuscula'=>$maiuscula,'minuscula'=>$minuscula,'letras'=>$letras,'primeiro'=>$primeiroNome]);
?>