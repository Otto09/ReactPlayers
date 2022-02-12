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

$idhistory = corectez($sir['idhistory']);
settype($idhistory, "integer");

$cda = "DELETE FROM history WHERE idhistory = $idhistory";
$raspuns = [];

if (mysqli_query($cnx, $cda)) {
    $raspuns[] = ['rezultat' => "OK"];
} else {
    $raspuns[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
}
echo json_encode($raspuns);
?>