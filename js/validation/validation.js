// Custom validation code

// Global variables

// Special characters
var specialCharacters;
var specialCharacterCheck;
var specialCharacterResult;
var onlyNumbers;

// Email vaiables
var emailOut = false;
var emailPass = true;
var emailLength;
var atFirstPosition;
var atLastPosition;
var emailDomain;
var dotFirstPosition;
var domainLength;
var oldDomainLength;
var domainExtension;
var message;

// Address Line 1 variables
var addressLine1Out = false;
var addressLine1Pass = true;
var addressLine1Length;

// Address Line 2 variables
var addressLine2Out = false;
var addressLine2Pass = true;
var addressLine2Length;

// Town variables
var townOut = false;
var townPass = true;
var townLength;

// County variables
var countyOut = false;
var countyPass = true;
var countyLength;

// Postcode variables
var postcodeOut = false;
var postcodePass = true;
var postcodeLength;
var postcodeRegex;
var postcodeRegexResult;

// Phone number variables
var phoneNumberOut = false;
var phoneNumberPass = true;
var phoneNumberLength;
var phoneNumberRegex;
var phoneNumberRegexResult;

// Card number variables
var cardNumberOut = false;
var cardNumberPass = true;
var cardNumberLength;

// Card name variables
var cardNameOut = false;
var cardNamePass = true;
var cardNameLength;

// Expiry variables
var expiryOut = false;
var expiryPass = true;
var expiryLength;
var date;
var thisYear;
var thisMonth;

// CVV variables
var cvvOut = false;
var cvvPass = true;
var cvvLength;



// Allows validation to occur once the user has completed the input

function fieldCheckOut(id) {
	switch( id ) {
		case 'email':
			emailOut = true;
			break;
		case 'addressLine1':
			addressLine1Out = true;
			break;
		case 'addressLine2':
			addressLine2Out = true;
			break;
		case 'town':
			townOut = true;
			break;
		case 'county':
			countyOut = true;
			break;
		case 'postcode':
			postcodeOut = true;
			break;
		case 'phoneNumber':
			phoneNumberOut = true;
			break;
		case 'cardNumber':
			cardNumberOut = true;
			break;
		case 'cardName':
			cardNameOut = true;
			break;
		case 'expiry':
			expiryOut = true;
			break;
		case 'cvv':
			cvvOut = true;
			break;
		default:
			break;
	}
	fieldCheck(id);
}


// Function to collect the input the user has made once fieldCheckOut has set to true

function fieldCheck(id) {
	value = $('#' + id).val().toLowerCase(); // Gets the value of the input and converts it to lower case

	switch( id ) {
		case 'email': // Is the id email?
			if( emailOut === true ) {
				emailValidator( id, value );
			}
			break;
		case 'addressLine1': // Is the address line 1 incorrect?
			if( addressLine1Out === true ) {
				addressLine1Validator( id, value );
				//console.log(id + ', ' + value);
			}
			break;
		case 'addressLine2': // Is the address line 2 incorrect?
			if( addressLine2Out === true ) {
				addressLine2Validator( id, value );
			}
			break;
		case 'town':
			if( townOut === true ) {
				townValidator( id, value );
			}
			break;
		case 'county':
			if( countyOut === true ) {
				countyValidator( id, value );
			}
			break;
		case 'postcode':
			if( postcodeOut === true ) {
				postcodeValidator( id, value );
			}
			break;
		case 'phoneNumber':
			if( phoneNumberOut === true ) {
				phoneNumberValidator( id, value );
			}
			break;
		case 'cardNumber':
			if( cardNumberOut === true ) {
				cardNumberValidator( id, value );
			}
			break;
		case 'cardName':
			if( cardNameOut === true ) {
				cardNameValidator( id, value );
			}
			break;
		case 'expiry':
			if( expiryOut === true ) {
				expiryValidator( id, value );
			}
			break;
		case 'cvv':
			if( cvvOut === true ) {
				cvvValidator( id, value );
			}
			break;
		default:
			break;
			//console.log('Default has been triggered!')
	}
}


// Function to return feedback to the user

function validationFeedback(id,result,message) {
	if( result === 'fail' ) {
		switch( id ) {
			case 'email':
				emailPass = false;
				break;
			case 'addressLine1':
				addressLine1Pass = false;
				break;
			case 'addressLine2':
				addressLine2Pass = false;
				break;
			case 'town':
				townPass = false;
				break;
			case 'county':
				countyPass = false;
				break;
			case 'postcode':
				postcodePass = false;
				break;
			case 'phoneNumber':
				phoneNumberPass = false;
				break;
			case 'cardNumber':
				cardNumberPass = false;
				break;
			case 'cardName':
				cardNamePass = false;
				break;
			case 'expiry':
				expiryPass = false;
				break;
			case 'cvv':
				cvvPass = false;
				break;
			default:
				break;
		}
		passer = false; // Sets email pass to false to stop other checks and success on this run
		//console.log(passer);
		$( '#' + id ).removeClass('has-success').addClass('has-error'); // Sets parent div state to allow for style changes
		/*$( '#' + id + '-error' ).text(message); // Applies the error message
		$( '#' + id + '-error' ).css('display','block'); // Makes the error visible to the user
		if( id != 'expiry' ) {
			$( '#' + id + 'Status' ).replaceWith( $( '<i id="' + id + 'Status" class="fa fa-exclamation form-control-feedback"></i>' ) ); // Adds exclamation marker when there is a failure
		}*/
		continueCheck();
	} else if ( result === 'pass' ) {
		$( '#' + id ).removeClass('has-error').addClass('has-success'); // Sets parent div state to allow for style changes
		/*$( '#' + id + '-error' ).text(''); // Removes any error text
		$( '#' + id + '-error' ).css('display','none'); // Hides the error container
		if( id != 'expiry' ) {
			$( '#' + id + 'Status' ).replaceWith( $( '<i id="' + id + 'Status" class="fa fa-check form-control-feedback"></i>' ) ); // Adds check marker when the form validates correctly
		}*/
		continueCheck();
	}
}


// Function to enable or disable the continue button

function continueCheck() {
	if( !emailPass || !addressLine1Pass || !addressLine2Pass || !townPass  || !countyPass || !postcodePass || !phoneNumberPass || !cardNumberPass || !cardNamePass || !expiryPass || !cvvPass ) {
		$( '#continue' ).attr('disabled',true); // Disables the continue button on the form
	} else {
		$( '#continue' ).attr('disabled',false); // Enables the continue button
	}
}