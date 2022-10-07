function randomString(length, alphabet) {
  var result           = ''
  const characters       = alphabet ?? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength))
 }
 return result;
}

export { randomString }