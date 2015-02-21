// Card functions

var cardLength;

var sectionOne;
var sectionTwo;
var sectionThree;
var sectionFour;

var cardHalf;
var cardThreeQuarter;

var replaceInput;

var cardIconPos;

function cardSpacer(id) {
	value = $('#' + id).val();
	cardLength = value.length;
	if( cardLength === 5 ) {
		sectionOne = value.substr(0,4); // Part 1 of the card 1111
		sectionTwo = value.substr(4,4); // Part 2 of the card 2222
		if( sectionTwo === ' ' ) { // If part 2 is blank then set input to just section 1
			$( '#' + id ).val( sectionOne );
		} else { // If part 2 contains a character then add a space between section 1 and 2
			replaceInput = sectionOne + ' ' + sectionTwo;
			$( '#' + id ).val( replaceInput );
		}
	}
	if( cardLength === 10 ) {
		cardHalf = value.substr(0,9); // First half of the card
		// console.log('cardHalf :' + cardHalf);
		sectionThree = value.substr(9,4); // Part 3 of the card 3333
		// console.log('sectionThree :' + sectionThree);
		if( sectionThree === ' ' ) { // If part 3 is blank then set input to section 1 and 2
			$( '#' + id ).val( cardHalf );
		} else { // If part 3 contains a character then add a space between first half of the card and section 3
			replaceInput = cardHalf + ' ' + sectionThree;
			$( '#' + id ).val( replaceInput );
		}
	}
	if( cardLength === 15 ) {
		cardThreeQuarter = value.substr(0,14); // First three quarter of the card
		// console.log('cardThreeQuarter :' + cardThreeQuarter);
		sectionFour = value.substr(14,4); // Part 3 of the card 3333
		// console.log('sectionFour :' + sectionFour);
		if( sectionFour === ' ' ) { // If part 3 is blank then set input to section 1 and 2
			$( '#' + id ).val( cardThreeQuarter );
		} else { // If part 3 contains a character then add a space between first three quarter of the card and section 3
			replaceInput = cardThreeQuarter + ' ' + sectionFour;
			$( '#' + id ).val( replaceInput );
		}
	}

	$( '#cardNumber' ).validateCreditCard( function( result ) {
		// console.log('Card type: ' + (result.card_type == null ? '-' : result.card_type.name));
		if( result.card_type == null || result.card_type.name === 'diners_club_carte_blanche' || result.card_type.name === 'diners_club_international' || result.card_type.name === 'jcb' || result.card_type.name === 'laser' ) { // If null or unsupported card type set to blank
			cardIconPos = '0px -274px';
		} else {
			switch( result.card_type.name ) {
				case 'amex':
					cardIconPos = '0px -229px';
					break;
				case 'discover':
					cardIconPos = '0px -184px';
					break;
				case 'maestro':
					cardIconPos = '0px -138px';
					break;
				case 'mastercard':
					cardIconPos = '0px -92px';
					break;
				case 'visa':
					cardIconPos = '0px -46px';
					break;
				case 'visa_electron':
					cardIconPos = '0px 0px';
					break;
				default:
					cardIconPos = '0px -276px';
					break;
			}
			//cardIconPos = result.card_type.name; // Set cardIconPos to the card name
		}
		//console.log( result.card_type.name );
		$( '#cardNumber' ).css( 'background-position', cardIconPos ); // Change input background position of sprite
		$( '#cardNumber' ).css( 'background-size', '100%' ); // Set input background to blank card
		//console.log(cardIconPos);
	});	

	fieldCheck(id); // Run the validator

}