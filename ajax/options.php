<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$options = [
	'op1' => 'option1',
	'op2' => 'option2',
];

http_response_code(200);
echo json_encode($options);
?>
