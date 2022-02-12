<?php
require '../secret/conn_players.php';

function corectez($sir) {
  $sir = trim($sir);
  $sir = stripslashes($sir);
  $sir = htmlspecialchars($sir);
  return $sir;
}

$json = file_get_contents('php://input');
// The associative string $sir is created
$sir = json_decode($json, true); // JSON decoding

$position = corectez($sir['position']);

$raspuns = [];
$stmt = mysqli_prepare($cnx, "INSERT INTO positions (position) VALUES (?);");
mysqli_stmt_bind_param($stmt, 's', $position);

if(mysqli_stmt_execute($stmt)) {
	$raspuns[] = ['rezultat' => "OK"];
	$raspuns[] = ['id' => mysqli_stmt_insert_id($stmt)];
} else {
	$raspuns[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
}

echo json_encode($position);
mysqli_stmt_close($stmt);
mysqli_close($cnx);

?>