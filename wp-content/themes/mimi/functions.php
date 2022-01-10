<?php 
    

    /**
     * Save and load ACF Json in theme root.
     */
    add_filter('acf/settings/save_json', function ($path) {
        return get_template_directory() .'/acf-json/';
    });

    add_filter('acf/settings/load_json', function ($path) {
        return [get_template_directory() .'/acf-json/'];
    });

    // Add featured image to posts
    add_theme_support( "post-thumbnails" );

    /*
    * Limit gutenberg blocks
    */
    function restrict_blocks( $allowed_blocks, $post ) {
        $allowed_blocks = [
            'core/block',
            'core/image',
            'core/paragraph',
            'core/heading',
            'core/list',
            'core/separator'
        ];
        return $allowed_blocks;
    }
    add_filter( 'allowed_block_types', 'restrict_blocks', 10, 2);

    if( function_exists('acf_add_options_page') ) {
        acf_add_options_page();
    }

    foreach (glob(__DIR__.'/src/posttypes/*') as $file) {
        require_once $file;
    }