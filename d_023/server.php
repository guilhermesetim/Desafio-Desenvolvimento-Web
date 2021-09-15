<?php
    $num = $_POST["num"];

    $m = intdiv($num,1000);
    $c = intdiv($num-($m*1000),100);
    $d = intdiv($num-($m*1000)-($c*100),10);
    $u = $num-($m*1000)-($c*100)-($d*10);


    echo json_encode(['m'=>$m,'c'=>$c,'d'=>$d,'u'=>$u,'num'=>$num]);
?>