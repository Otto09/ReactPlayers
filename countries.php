<?php

require '../secret/conn_players.php';

$countries = [];

$cda = "SELECT * FROM countries";
if ($rez = mysqli_query($cnx,$cda)) {
	// Take the lines (ie countries) one at a time
	while ($row = mysqli_fetch_assoc($rez)) {
		$countries[] = $row;
	}
	// I release the memory occupied by the selection set 
    mysqli_free_result($rez);
}
echo json_encode($countries);
?>