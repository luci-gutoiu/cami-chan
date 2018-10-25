<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$options = [
	'op1' => 'option1',
	'op2' => 'option2',
	'op3' => 'option3',
	'op4' => 'option4',
	'op5' => 'option5',
	'op6' => 'option6',
	'op7' => 'option7',
	'op8' => 'option8',
	'op9' => 'option9',
	'op10' => 'option10',
];

http_response_code(200);
echo json_encode($options);
exit;
?>
