<?php
require_once './unirest-php/src/Unirest.php';
$secretKey = 'sk_test_kQPamE4klJnNnHb1bclOYA:';
$base64SecretKey = base64_encode($secretKey);


$headers = array('Accept' => 'application/json', 'Authorization' => "Basic $base64SecretKey");

$query = [
	"amount" => $_POST['amount'],
	"currency" => "php",
	"source" => $_POST['id'],
	"description" => "Pet food and other supplies",
	"statement_descriptor" => "Pet Shop Inc",
	"capture" => true
];

$response = Unirest\Request::post('https://api.magpie.im/v1.1/charges', $headers, $query);

echo json_encode($response->body);
