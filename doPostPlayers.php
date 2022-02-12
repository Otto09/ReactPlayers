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

$name = corectez($sir['name']);
$image = corectez($sir['image']);
$idcountry = corectez($sir['idcountry']);
settype($idcountry, "integer");
$idposition = corectez($sir['idposition']);
settype($idposition, "integer");
$cluburi = $sir['cluburi'];

$length = count($cluburi);

$raspuns = [];
$stmt = mysqli_prepare($cnx, "INSERT INTO players (name, image, idcountry, idposition) VALUES (?, ?, ?, ?);");
mysqli_stmt_bind_param($stmt, 'ssii', $name, $image, $idcountry, $idposition);

if(mysqli_stmt_execute($stmt)) {
	$raspuns[] = ['rezultat' => "OK"];
	$raspuns[] = ['id' => mysqli_stmt_insert_id($stmt)];
} else {
	$raspuns[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
}

$idplayer = mysqli_stmt_insert_id($stmt);

$stmt_2 = mysqli_prepare($cnx, "INSERT INTO history (idplayer, idclub, period) VALUES (?, ?, ?);");

for ($i = 0; $i < $length; $i++) {
	mysqli_stmt_bind_param($stmt_2, 'iis', $idplayer, $cluburi[$i]['idclub'], 
		$cluburi[$i]['period']);
	mysqli_stmt_execute($stmt_2);
};

$raspuns[] = ['rezultat_2' => 'Eroare: ' . mysqli_error($cnx)];

echo json_encode($raspuns);

mysqli_stmt_close($stmt_2);
mysqli_stmt_close($stmt);
mysqli_close($cnx);

?>
