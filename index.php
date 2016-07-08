<?php get_header(); ?>
<div class="container">
<div class="row">
	<div class="col-lg-8">
		<main role="main">
		<!-- section -->
		<section>
		
			<h1><?php _e( 'Latest Posts', 'html5blank' ); ?></h1>

			<?php get_template_part('loop'); ?>

			<?php get_template_part('pagination'); ?>

		
		</section>
		<!-- /section -->
	</main>
	</div>

	<div class="col-lg-4">
		<?php get_sidebar(); ?>
	</div>

	<div class="col-lg-12">
		<?php get_footer(); ?>
	</div>
</div>
	
</div>



