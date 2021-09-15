<?php
    $real = $_POST['real'];
    $int = intval($real);
    
    echo json_encode(['int'=> $int,'real'=>$real]);
?>