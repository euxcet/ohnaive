<?php
$action = $_GET['action'];
$con = mysqli_connect('localhost', 'root', 'MysqlRooT', 'ohnaive');
if (!$con) {
	die("Could not connect.");
}
mysqli_select_db($con, "ohnaive");

if ($action == "build") {
	$sql = "SELECT * FROM led";
	$result = mysqli_query($con, $sql);
	while ($row = mysqli_fetch_array($result)) {
		echo $row['row']." ".$row['col']." ".$row['type']." ";
	}
}
if ($action == "modify") {
	$r = intval($_GET['r']);
	$c = intval($_GET['c']);
	$t = intval($_GET['t']);
	$sql = "UPDATE led SET type=".$t." WHERE row=".$r." AND col =".$c;
	$result = mysqli_query($con, $sql);
}

mysqli_close($con);
?>
