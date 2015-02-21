function emailValidator( id, value ) {
	emailPass = true;

	emailLength = value.length; // Get email full length

	atFirstPosition = value.indexOf('@'); // Get first position of @
	atLastPosition = value.lastIndexOf('@'); // Get last position of @

	emailDomain = value.substring( ( atFirstPosition + 1 ), emailLength ); // Get the domain of the email address: example@gmail.com -> gmail.com
	oldDomainLength = emailDomain.length; // Get the length of the domain: example@gmail.com -> 9
	
	dotFirstPosition = emailDomain.indexOf('.'); // Get the first . after the @
	
	domainLength = dotFirstPosition - atFirstPosition;

	domainExtension = emailDomain.substring( ( dotFirstPosition + 1 ), oldDomainLength); // Get the domain extension: example@gmail.com -> com

	if( emailLength === 0 ) { // Email address must be present
		validationFeedback(id,'fail','A valid email address is required')
	}
	if( ( atFirstPosition === -1 || atFirstPosition === 0 ) && emailPass === true ) { // @ does not exist or is first character in email input
		validationFeedback(id,'fail','An @ is required in an email address');
	}
	if( ( atFirstPosition === emailLength - 1 || dotFirstPosition === 0 ) && emailPass === true ) { // Does email input end in @
		validationFeedback(id,'fail','Email must have a domain, example: gmail.com');
	}
	if( ( atFirstPosition != atLastPosition ) && emailPass === true ) { // Two or more @ in email input
		validationFeedback(id,'fail','Email cannot have more than one @');
	}
	if( dotFirstPosition === -1 && emailPass === true ) { // . does not exist of is first character after the @ in email input
		validationFeedback(id,'fail','Email must have an extension, example: gmail.com');
	}
	if( emailPass === true ) { // Check to see if the other email checks have passed
		switch( domainExtension ) { // Looks for available domain extension, otherwise fails
			case 'com':
				break;
			case 'co.uk':
				break;
			case '.org':
				break;
			case 'net':
				break;
			case 'ac.uk':
				break;
			default:
				validationFeedback(id,'fail','must have a domain extension, example: .com');
		}
	}
	if( emailPass === true ) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if( re.test(value) === false ) {
    		validationFeedback(id,'fail','Emails cannot contain special characters')	
    	}
	}

	if( emailPass === true ) { // If nothing has failed then this is triggered to show success
		validationFeedback(id,'pass');
	}
}