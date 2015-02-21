function addressLine1Validator( id, value ) {
	addressLine1Pass = true;
	addressLine1Length = value.length; // Get address line 1 full length

	if( addressLine1Length === 0 ) { // Address line 1 must be present
		validationFeedback(id,'fail','A valid first line of address is required');
	}

	if( addressLine1Pass === true ) {
    	specialCharacterCheck(value);
    	if( specialCharacterResult === true ) {
    		validationFeedback(id,'fail','Your address cannot contain special characters');
    	}
	}

	if( addressLine1Pass === true ) { // If nothing has failed then this is triggered to show success
		validationFeedback(id,'pass');
	}
}

function addressLine2Validator( id, value ) {
	addressLine2Pass = true;
	addressLine2Length = value.length; // Get address line 2 full length

	if( addressLine2Length > 0 ) {
    	specialCharacterCheck(value);
    	if( specialCharacterResult === true ) {
    		validationFeedback(id,'fail','Your address cannot contain special characters');
    	}
	}

	if( addressLine2Pass === true ) { // If nothing has failed then this is triggered to show success
		validationFeedback(id,'pass');
	}
}

function townValidator( id, value ) {
	townPass = true;
	townLength = value.length; // Get town full length

	if( townLength === 0 ) { // Town must be present
		validationFeedback(id,'fail','A town is requred');
	}

	if( townPass === true ) {
    	specialCharacterCheck(value);
    	if( specialCharacterResult === true ) {
    		validationFeedback(id,'fail','Your address cannot contain special characters');
    	}
	}

	if( townPass === true ) { // If nothing has failed then this is triggered to show success
		validationFeedback(id,'pass');
	}
}

function countyValidator( id, value ) {
	countyPass = true;
	countyLength = value.length; // Get county full length

	if( countyLength === 0 ) { // County must be present
		validationFeedback(id,'fail','A county is required');
	}

	if( countyPass === true ) {
    	specialCharacterCheck(value);
    	if( specialCharacterResult === true ) {
    		validationFeedback(id,'fail','Your address cannot contain special characters');
    	}
	}

	if( countyPass === true ) { // If nothing has failed then this is triggered to show success
		validationFeedback(id,'pass');
	}
}

function postcodeValidator( id, value ) {
	postcodePass = true;
	postcodeLength = value.length; // Get postcode full length

	if( postcodeLength === 0 ) { // Postcode must be present
		validationFeedback(id,'fail','A postcode is required');
	}

	if( postcodePass === true ) {
    	specialCharacterCheck(value);
    	if( specialCharacterResult === true ) {
    		validationFeedback(id,'fail','Your address cannot contain special characters');
    	}
	}

	if( postcodePass === true ) {
		postcodeRegex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][AZa-z]{2})$/;  // Taken from https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/359448/4__Bulk_Data_Transfer_-_additional_validation_valid.pdf
		postcodeRegexResult = postcodeRegex.test(value);
		//console.log(postcodeRegexResult);
		if( postcodeRegexResult === false ) {
			validationFeedback(id,'fail','Please enter a valid postcode');
		}
	}

	if( postcodePass === true ) { // If nothing has failed then this is triggered to show success
		validationFeedback(id,'pass');
	}
}

function phoneNumberValidator( id, value ) {
	phoneNumberPass = true;
	phoneNumberLength = value.length; // Get phone number full length

	if( phoneNumberLength === 0 ) { // phone number must be present
		validationFeedback(id,'fail','A phone number is required');
	}

	if( phoneNumberPass === true ) {
    	specialCharacterCheck(value);
    	if( specialCharacterResult === true ) {
    		validationFeedback(id,'fail','Your address cannot contain special characters');
    	}
	}

	if( phoneNumberPass === true ) {
		phoneNumberRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;  // http://regexlib.com/REDetails.aspx?regexp_id=592
		phoneNumberRegexResult = phoneNumberRegex.test(value);
		//console.log(phoneNumberRegexResult);
		if( phoneNumberRegexResult === false ) {
			validationFeedback(id,'fail','Please enter a valid UK phone number');
		}
	}

	if( phoneNumberPass === true ) { // If nothing has failed then this is triggered to show success
		validationFeedback(id,'pass');
	}
}