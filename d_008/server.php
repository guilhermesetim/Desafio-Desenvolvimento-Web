<?php
    $m = $_POST["medida"];

    $conversor = ['km'=>0.001,'hm'=>0.01,'dam'=>0.1,'m'=>1,'dm'=>10,'cm'=>100,'mm'=>1000];

    echo "A medida de $m corresponde:";

    foreach($conversor as $k=>$v){
        printf("<br>convertido em %s: $v %s",$k,$k);
    }

?>