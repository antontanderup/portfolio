<?php $page_title = "Kontakt mig" ?>
<?php include("header.php");?>

	<!-- Min Profil Start -->
   <div class="portfolio">

	<section class="wrap">

		<div class="intro">
			<h1 class="title">Kontakt mig</h1>
			<section class="intro-text">
				<p>Jeg kan kontaktes ved brug af formularen nedenfor, på email eller telefon.</p>			
			</section>
		</div> <!-- intro-text END -->

		<section class="contact-form">
			<form>
				<label>Dit navn
					<input type="tekst" name="name">
				</label>
				<label>Din email
					<input type="email" name="email">
				</label>
				<label>Din besked
					<textarea name="message"></textarea>
				</label>
				<input type="submit" value="Send" />
			</form>
		</section> <!-- contact-form END -->


	</section> <!-- wrap END -->

   </div> <!-- min-profil END -->


<?php include("footer.php");?>
