<?php
    $alunos = [];

   for($i=1;$i<=4;$i++){
        array_push($alunos,$_POST["a$i"]); 
   }

    echo json_encode(['s'=>$alunos[array_rand($alunos,1)]])
?>