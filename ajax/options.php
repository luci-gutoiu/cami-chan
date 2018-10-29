<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$options = [
	'adidasi' => ['name' => 'option1', 'probability' => 20],
	'perie_par' => ['name' => 'option2', 'probability' => 30],
	'ceas' => ['name' => 'option3', 'probability' => 10],
	'lantisor_bratara' => ['name' => 'option4', 'probability' => 10],
	'casti' => ['name' => 'option5', 'probability' => 30],
	'rotring' => ['name' => 'option6', 'probability' => 0],
	'floare_birou' => ['name' => 'option7', 'probability' => 0],
	'carte' => ['name' => 'option8', 'probability' => 0],
	'puzzle' => ['name' => 'option9', 'probability' => 0],
	'op10' => ['name' => 'option10', 'probability' => 0],
];

http_response_code(200);
echo json_encode($options);
exit;
?>
