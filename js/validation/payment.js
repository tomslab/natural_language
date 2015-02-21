function cardNumberValidator( id, value ) {
	cardNumberPass = true;
	cardNumberLength = value.length; // Get address line 1 full length

	if( cardNumberLength === 0 ) { // Address line 1 must be present
		validationFeedback(id,'fail','A valid card is required');
	}

	if( cardNumberPass === true ) {
    	specialCharacterCheck(value);
    	if( specialCharacterResult === true ) {
    		validationFeedback(id,'fail','Your card cannot contain special characters');
    	}
	}

	if( cardNumberPass === true ) {
		$( '#cardNumber' ).validateCreditCard( function( result ) {
			if( result.card_type === null || result.valid === false || result.length_valid === false || result.luhn_valid === false ) {
				validationFeedback(id,'fail','Please enter a valid card')
			}
		});
	}

	if( cardNumberPass === true ) { // If nothing has failed then this is triggered to show success
		validationFeedback(id,'pass');
	}
}

// 3714 4963 5398 431

function cardNameValidator( id, value ) {
	cardNamePass = true;
	cardNameLength = value.length; // Get address line 1 full length

	if( cardNameLength === 0 ) { // Address line 1 must be present
		validationFeedback(id,'fail','The name on the card is required');
	}

	if( cardNamePass === true ) {
    	specialCharacterCheck(value);
    	if( specialCharacterResult === true ) {
    		validationFeedback(id,'fail','The name on the card cannot contain special characters');
    	}
	}

	if( cardNamePass === true ) {
		var numberCheck = /^[A-Za-z\s]+$/;
		var numberCheckResult = numberCheck.test(value);
		if( numberCheckResult === false ) {
			validationFeedback(id,'fail','The name of the card only contains letters and spaces')
		}
	}

	if( cardNamePass === true ) { // If nothing has failed then this is triggered to show success
		validationFeedback(id,'pass');
	}
}

function expiryValidator( id, value ) {
	expiryPass = true;
	expiryLength = value.length; // Get address line 1 full length
	
	date = new Date(); // Get date

	thisYear = date.getFullYear(); // Get this year
	thisMonth = date.getMonth(); // Get this day
	thisMonth = thisMonth + 1; // Add 1 as Jan = 0 but month input sets Jan to 1

	var selectedYear = value.substr(0,4); // Get year section of the selected date (ie 2018)
	selectedYear = Number(selectedYear); // Convert to number

	if( selectedYear < thisYear ) { // If selected year is less than current year
		validationFeedback(id,'fail','The year you have entered is less than this year');
	} else if( selectedYear === thisYear ) { // If selected year equals current year
		var selectedMonth = value.substr(5,2); // Get month section of the selected date (ie 05)
		selectedMonth = Number(selectedMonth); // Convert to number
		if( selectedMonth < thisMonth ) { // If selected month is less than current month
			validationFeedback(id,'fail','The month you have entered has past');
		}
	}

	if( expiryPass === true ) { // If nothing has failed then this is triggered to show success
		validationFeedback(id,'pass');
	}
}

function cvvValidator( id, value ) {
	cvvPass = true;
	cvvLength = value.length;

	if( cvvLength === 0 ) { // CVV must be present
		validationFeedback(id,'fail','The CVV is required');
	}

	if( cvvPass === true ) {
		onlyNumbers = /(^[+]?\d*$)/g; // http://www.regxlib.com/REDetails.aspx?regexp_id=257
		onlyNumbersResult = onlyNumbers.test(value);
		if( onlyNumbersResult === false ) {
			validationFeedback(id,'fail','Only numbers are allowed in the CVV code');
		}
	}

	if( cvvPass === true ) {
		$( '#cardNumber' ).validateCreditCard( function( result ) {
			if( result.card_type != null ) {
				if( result.card_type.name === 'amex' ) {
					if( cvvLength != 4 ) {
						validationFeedback(id,'fail','American Express cards have 4 digit CVV codes');
						//console.log('no');
					}
				} else {
					if( cvvLength != 3 ) {
						validationFeedback(id,'fail','Your card must have a 3 digit CVV code');
						//console.log('else');
					}
				}
			}
		});
	}
}