<?php 

function menu_highlight($file_name) {
	if ($file_name == basename($_SERVER['PHP_SELF'])) {
		echo 'class="current-page"';
	}
};

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?php echo $page_title; ?> - Anton Tanderup</title>
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	
	<header class="header">
	   <div class="wrap">
		<h1>Anton Tanderup</h1>
		<nav class="top-nav">
			<div class="nav-button" id="nav-button"></div>
			<ul class="nav-hide" id="top-nav-links">
				<li><a href="profil.php" <?php menu_highlight('profil.php'); ?>>Profil</a></li>
				<li><a href="index.php" <?php menu_highlight('index.php'); ?>>Portefølje</a></li>
				<li><a href="photography.php" <?php menu_highlight('photography.php'); ?>>Fotografi</a></li>
				<li><a href="kontakt.php" <?php menu_highlight('kontakt.php'); ?>>Kontakt</a></li>
			</ul>
		</nav>
	   </div> <!-- wrap END -->
	</header> <!-- header END -->