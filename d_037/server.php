<?php

$opcao = $_POST["opcao"];
$numero = $_POST["numero"];

switch ($opcao){
    case 1:
        $convertido = decbin($numero);
        $nomeConversao = 'binário';
        break;
    case 2:
        $convertido = decoct($numero);
        $nomeConversao = 'octal';
        break;
    case 3;
        $convertido = dechex($numero);
        $nomeConversao = 'hexadecimal';
        break;
}

echo json_encode(['nomeConversao'=>$nomeConversao,'numeroConvertido'=>$convertido,'numeroDigitado'=>$numero]);