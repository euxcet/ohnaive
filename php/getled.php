<?php
$r = intval($_GET['r']);
$c = intval($_GET['c']);
$con = mysqli_connect('localhost', 'root', 'MysqlRooT', 'ohnaive');
if (!$con) {
    die("Could not connect.");
}
mysqli_select_db($con, "ohnaive");
$sql = "SELECT * FROM user WHERE row=".$r." AND col=".$c;
$result = mysqli_query($con, $sql);
while ($row = mysqli_fetch_array($result)) {
    echo $row['type'];
}
mysqli_close($con);
?>