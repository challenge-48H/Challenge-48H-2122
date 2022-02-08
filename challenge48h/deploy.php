<?php

  $data = print_r($_SERVER, true).json_decode(file_get_contents('php://input'));
  file_put_contents('./logs/'.time().'.txt', $data);

echo "test3"

?>


