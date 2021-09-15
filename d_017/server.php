<?php
    $co = $_POST["catOposto"];
    $ca = $_POST["catAdjacente"];

    $hip = number_format(hypot($co,$ca),2,',','.');

    echo json_encode(['hip'=> $hip])
?>