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

$id = corectez($sir['id']);
settype($id, "integer");
$name = corectez($sir['name']);
$image = corectez($sir['image']);

$idcountry = corectez($sir['idcountry']);
settype($idcountry, "integer");
$idposition = corectez($sir['idposition']);
settype($idposition, "integer");
$cluburi = $sir['cluburi'];

$length = count($cluburi);

$raspuns = [];
$stmt = mysqli_prepare($cnx, "UPDATE players SET name=?, image=?, idcountry=?, idposition=? WHERE id=?;");
mysqli_stmt_bind_param($stmt, 'ssiii', $name, $image, $idcountry, $idposition, $id);

if(mysqli_stmt_execute($stmt)) {
	$raspuns[] = ['rezultat' => "OK"];
} else {
	$raspuns[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
}

$id_get = [];
$idhistory = [];

$cda = "SELECT idhistory FROM history WHERE idplayer=$id LIMIT 1;";
if ($rez = mysqli_query($cnx,$cda)) {
	// Take the line (ie idhistory)
	while ($row = mysqli_fetch_assoc($rez)) {
		$id_get[] = $row;
	}
	$idhistory = $id_get[0]['idhistory'];
}

$stmt_2 = mysqli_prepare($cnx, "UPDATE history SET idclub=?, period=?  WHERE idhistory=?;");

mysqli_stmt_bind_param($stmt_2, 'isi', $idclub, $period, $idhistory);
/*
$i = 0;
while ($i < $length) {
	mysqli_stmt_bind_param($stmt_2, 'isi', $cluburi[$i]['idclub'], 
		$cluburi[$i]['period'], $idhistory);
	mysqli_stmt_execute($stmt_2);

	$idhistory += 1;
	$i += 1;
}
*/
/*
foreach($cluburi as $value) {
	$idclub = $value['idclub'];
	$period = $value['period'];
	mysqli_stmt_bind_param($stmt_2, 'isi', $idclub, $period, $idhistory);
	mysqli_stmt_execute($stmt_2);

	$idhistory += 1;
}
*/

for ($i = 0; $i < $length; $i++) {
	$idclub = $cluburi[$i]['idclub'];
	$period = $cluburi[$i]['period'];
	mysqli_stmt_execute($stmt_2);

	$idhistory += 1;
}

/*
for ($i = 0; $i < $length; $i++) {
	mysqli_stmt_bind_param($stmt_2, 'isi', $cluburi[$i]['idclub'], 
		$cluburi[$i]['period'], $idhistory);
	mysqli_stmt_execute($stmt_2);

	$idhistory += 1;
};
*/

$raspuns[] = ['rezultat_2' => 'Eroare: ' . mysqli_error($cnx)];
$raspuns[] = ['rezultat_2' => 'id: ' . $idhistory];

echo json_encode($raspuns);

mysqli_stmt_close($stmt_2);
mysqli_stmt_close($stmt);
mysqli_close($cnx);

?>