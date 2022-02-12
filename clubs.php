<?php

require '../secret/conn_players.php';

$clubs = [];

$cda = "SELECT * FROM clubs";
if ($rez = mysqli_query($cnx,$cda)) {
	// Take the lines (ie clubs) one at a time
	while ($row = mysqli_fetch_assoc($rez)) {
		$clubs[] = $row;
	}
	// I release the memory occupied by the selection set 
    mysqli_free_result($rez);
}
echo json_encode($clubs);
?>