<?php 
    require '../secret/conn_players.php';

    // I will return all the players. I declare the series of jucatori
    $jucatori = [];

    $cda = "SELECT players.id, players.name, players.image, countries.idcountry, positions.idposition FROM players  NATURAL JOIN countries NATURAL JOIN positions ORDER BY players.id";

    if ($rez = mysqli_query($cnx,$cda)) {

        // Take the lines (ie players) one at a time
        while ($jucatorul = mysqli_fetch_assoc($rez)) {
            $idjucatorul = $jucatorul['id'];

            // Knowing $idjucatorul, I also take the clubs
            $cda_2 = "SELECT clubs.idclub, history.period, history.idhistory FROM history INNER JOIN clubs ON history.idclub = clubs.idclub WHERE history.idplayer = $idjucatorul";

            if ($rez_2 = mysqli_query($cnx,$cda_2)) {
                $club = [];

                // Take the lines (ie clubs) one at a time
                while ($linie_2 = mysqli_fetch_assoc($rez_2)) {
                    $club[] = $linie_2;
                }

                // I complete the current player (from $jucatorul) with another field, cluburi.
                // The cluburi field receives as value the associative array $club.
                $jucatorul['cluburi'] = $club;

                // Add the current player in the $jucatori string
                $jucatori[] = $jucatorul;

                // I release the memory occupied by the selection set
                mysqli_free_result($rez_2);
            }
        }
        // I release the memory occupied by the selection set $rez
        mysqli_free_result($rez);       
    }
    echo json_encode($jucatori); 
?>
