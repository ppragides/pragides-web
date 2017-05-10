<?php
	$db_host = "localhost";
	$db_user = "paolo";
	$db_pass = "ponti101";
	$db_name = "pragides";

	$connection = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

	if (!$connection) {
		echo "Error: Unable to connect to MySQL.";
		exit;
	}
?>