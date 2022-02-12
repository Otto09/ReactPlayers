<?php

require '../secret/conn_players.php';

$positions = [];

$cda = "SELECT * FROM positions";
if ($rez = mysqli_query($cnx,$cda)) {
	// Take the lines (ie positions) one at a time
	while ($row = mysqli_fetch_assoc($rez)) {
		$positions[] = $row;
	}
	// I release the memory occupied by the selection set 
    mysqli_free_result($rez);
}
echo json_encode($positions);
?>