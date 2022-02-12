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

$club = corectez($sir['club']);

$raspuns = [];
$stmt = mysqli_prepare($cnx, "INSERT INTO clubs (club) VALUES (?);");
mysqli_stmt_bind_param($stmt, 's', $club);

if(mysqli_stmt_execute($stmt)) {
	$raspuns[] = ['rezultat' => "OK"];
	$raspuns[] = ['id' => mysqli_stmt_insert_id($stmt)];
} else {
	$raspuns[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
}

echo json_encode($club);
mysqli_stmt_close($stmt);
mysqli_close($cnx);

?>