<?php $page_title = "Kontakt mig" ?>
<?php include("header.php");?>

	<!-- kontakt Start -->
   <div class="kontakt-side">

	<section class="wrap">

		<aside class="social">
			<img src="img/antontanderup.jpg" alt="Anton Tanderup" class="profile-picture" />	
			<h2 class="subhead">Sociale netværk</h2>
			<a class="social-button" href="https://www.linkedin.com/pub/anton-tanderup/48/40b/966"><span><?php include("icons/linkedin.svg");?></span></a>
			<a class="social-button" href="https://flic.kr/ps/vubFe"><span><?php include("icons/flickr.svg");?></span></a>
			<a class="social-button" href="https://twitter.com/AntonTanderup"><span><?php include("icons/twitter.svg");?></span></a>
			<a class="social-button" href="https://plus.google.com/+AntonTanderup/"><span><?php include("icons/googleplus.svg");?></span></a>
			<a class="social-button" href="https://www.facebook.com/antontanderup/"><span><?php include("icons/facebook.svg");?></span></a>
		</aside> <!-- social END -->

		<div class="intro">
			<h1 class="title">Kontakt mig</h1>
			<section class="intro-text">
				<p>Jeg kan kontaktes ved brug af formularen nedenfor, på email <a href="mailto:antontandrup@gmail.com">antontandrup@gmail.com</a> eller telefon <a href="tel:28730450">28 73 04 50</a>.</p>			
			</section>
		</div> <!-- intro-text END -->
	
		<section class="contact-form">
			<h2 class="subhead">Send en besked</h2>
			<form>
				<label for="name">Dit navn</label>
				<input type="tekst" id="name" name="name">				
				<label for="email">Din email</label>
				<input type="email" id="email" name="email">			
				<label for="message">Din besked</label>
				<textarea name="message" id="message"></textarea>			
				<input type="submit" value="Send" class="button" />
			</form>
		</section> <!-- contact-form END -->

	</section> <!-- wrap END -->

   </div> <!-- kontakt-side END -->


<?php include("footer.php");?>
