$( "select" ).change(function () {
    var elementID = $( this ).attr('id');
    // console.log( elementID );
    var value = $( '#' + elementID ).val();
    // console.log( value );
    $( '#secretSelect' ).text( value );
    if( elementID === "emailPrimary" || elementID === "emailThird" ) {
    	$( '#secretSelect' ).css('font-size', '1.2em');
    } else {
    	$( '#secretSelect' ).css('font-size', '2em');
    }
    var optionWidth = $( '#secretSelect' ).width();
    // console.log( optionWidth );
    $( this ).css('width', optionWidth);
}).change();