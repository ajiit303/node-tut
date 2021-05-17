// local
const secret = "Super Secret"
// share (Those 2 are the ones supposed to be exported)
const John = "John"
const Peter = "Peter"

module.exports = {John, Peter} // This is the function which shares the variables outside.

//console.log(module)