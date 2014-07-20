<?php $page_title = "Photography" ?>
<?php include("header.php");?>

	<!-- Min Profil Start -->
   <div class="portfolio flickr">
	<section class="wrap">
	<div class="intro">
		<h1 class="title">Fotografi</h1>
		<section class="intro-text">
			<p>Her kan du se mine seneste fotografier. For at se mere, så tjek min profil på <a href="https://flic.kr/ps/vubFe">flickr</a>.</p>			
	</section>
	</div>
		<?php
			$flickr = json_decode(file_get_contents("https://api.flickr.com/services/feeds/photos_public.gne?id=33367743@N05&format=json&nojsoncallback=1"), true);
			$items = $flickr['items'];
			for ($i = 0; $i <= 19; $i++) {
				$image = $items{$i}{'media'}['m'];
				$title = $items{$i}['title']; 
				$link = $items{$i}['link'];
    			
    			echo '	
							<a class="flickr-link" href="' . $link . '">
								<img src="' . $image . '" alt="' . $title . '"/>
							</a>
				';
			}
		?>

	</section> <!-- wrap END -->

   </div> <!-- min-profil END -->


<?php include("footer.php");?>