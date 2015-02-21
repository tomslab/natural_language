function specialCharacterCheck( value ) {
	specialCharacters = /([\!\@\€\£\$\%\^\&\*\(\)\-\_\=\+\{\}\[\]\:\;\"\\\|\<\>\/\?\~\#])/g;
	specialCharacterResult = specialCharacters.test(value);
}