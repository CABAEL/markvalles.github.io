<?php


if(isset($_POST['email']) AND isset($_POST['password'])){
    echo json_encode("success");
}

?>