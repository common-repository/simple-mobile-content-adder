//fixing the menus in admin page 

jQuery(document).ready(function($){
	
	if( $('body[class*=" msdav_"]').length || $('body[class*=" post-type-msdav_"]').length ) {

		$msdav_menu_li = $('#toplevel_page_msdav_dashboard_admin_page');
		
		$msdav_menu_li
		.removeClass('wp-not-current-submenu')
		.addClass('wp-has-current-submenu')
		.addClass('wp-menu-open');
		
		$('a:first',$msdav_menu_li)
		.removeClass('wp-not-current-submenu')
		.addClass('wp-has-submenu')
		.addClass('wp-has-current-submenu')
		.addClass('wp-menu-open');
		
	}
    
    //uncheck thickboxes if footer selected as it doesn't take all the options (above, below content etc.) 
    
    $scaFooterNote = "<p id='sca-note'><b>Note:</b> Content added to the footer can't be filtered by above content, below content, posts or pages. The footer feature is theme-dependent - it will only work if your theme uses wp_footer (most themes do). "; 
    
    $scaEverywhereNote = "<p id='sca-note2'><b>Note:</b> Include everywhere is only compatible with the footer position."; 
    
    $('#acf-msdav_position').append($scaFooterNote);
        $('#acf-msdav_include').append($scaEverywhereNote)
    
    //if footer is checked 
    
$('#acf-field-msdav_position-FixedPosition').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-msdav_position-BelowContent').attr('checked', false);
        $('#acf-field-msdav_position').attr('checked', false);
        $('#acf-field-msdav_include').attr('checked', false);
        $('#acf-field-msdav_include-Pages').attr('checked', false);
        $('#acf-field-msdav_include-Pages').attr('checked', false);
        $('#acf-field-msdav_include-Footer').attr('checked', true);
        $('#sca-note').show();
        $('#sca-note2').show();
        $('#acf-msdav_front').hide(); 
         
    } else {
        
        $('#sca-note').hide();
        $('#sca-note2').hide();
        $('#acf-field-msdav_include-Footer').attr('checked', false);
    }; 
    
});
    
    //if everywhere is checked 
    
    $('#acf-field-msdav_include-Footer').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-msdav_position-BelowContent').attr('checked', false);
        $('#acf-field-msdav_position').attr('checked', false);
        $('#acf-field-msdav_include').attr('checked', false);
        $('#acf-field-msdav_include-Pages').attr('checked', false);
        $('#acf-field-msdav_include-Pages').attr('checked', false);
        $('#acf-field-msdav_position-FixedPosition').attr('checked', true);
        $('#sca-note').show();
        $('#sca-note2').show();
        $('#acf-msdav_front').hide(); 
         
    } else {
        
        $('#sca-note').hide();
        $('#sca-note2').hide();
        $('#acf-field-msdav_position-FixedPosition').attr('checked', false);
    }; 
    
    });
    
    //if above content is checked 
    
    $('#acf-field-msdav_position').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-msdav_include-Footer').attr('checked', false);
        $('#acf-field-msdav_position-FixedPosition').attr('checked', false);
        $('#sca-note').hide();
        $('#sca-note2').hide();
        
        }
        
        }); 
    
    //if below content is checked 
    
    $('#acf-field-msdav_position-BelowContent').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-msdav_include-Footer').attr('checked', false);
        $('#acf-field-msdav_position-FixedPosition').attr('checked', false);
        $('#sca-note').hide();
        $('#sca-note2').hide();
        
        }
        
        }); 
    
    //if posts is checked 
    
    $('#acf-field-msdav_include').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-msdav_include-Footer').attr('checked', false);
        $('#acf-field-msdav_position-FixedPosition').attr('checked', false);
        $('#sca-note').hide();
        $('#sca-note2').hide();
        
        }
        
        }); 
    
    //if pages is checked 
    
    $('#acf-field-msdav_include-Pages').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-msdav_include-Footer').attr('checked', false);
        $('#acf-field-msdav_position-FixedPosition').attr('checked', false);
        $('#sca-note').hide();
        $('#sca-note2').hide();
        $('#acf-msdav_front').show();
        
        }
        
        }); 
    
    //allow only one answer under show on front page 
    
    $('#acf-field-msdav_front').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-msdav_front-Yes').attr('checked', false);
        
        } else {
            
            $('#acf-field-msdav_front-Yes').attr('checked', true);
            
        }
        
        }); 
    
    $('#acf-field-msdav_front-Yes').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-msdav_front').attr('checked', false);
        
        } else {
            
        $('#acf-field-msdav_front').attr('checked', true);    
            
        }
        
        });
    
     $('#acf-field-msdav_include-Pages').change(function() {
 
    if ($(this).prop('checked') == false) {
        
        $('#acf-msdav_front').hide(); 
        
        }
        
        }); 
	
});