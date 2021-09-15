<?php
    $alunos = array();

    for($i=0;$i<=3;$i++){
        array_push($alunos,$_POST["a$i"]);
    }

    shuffle($alunos);

    echo json_encode(['p'=>$alunos[0],'s'=>$alunos[1],'t'=>$alunos[2],'q'=>$alunos[3]])
    
?>