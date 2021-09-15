<?php
$anoNascimento = $_POST['anoNascimento'];
$idade = date('Y') - $anoNascimento;

if ($idade <= 9){
    $categoria = 'MIRIM';
} elseif ($idade <= 14){
    $categoria = 'INFANTIL';
} elseif ($idade <= 19){
    $categoria = 'JUNIOR';
} elseif ($idade <= 25){
    $categoria = 'Sênior';
} else {
    $categoria = 'Master';
}

echo json_encode(['categoria'=>$categoria, 'idade'=>$idade]);