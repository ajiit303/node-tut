// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (Only share minimum)
const names = require("./firstmodule") //we use "require" to access modules as in lecture 2
                                       // We use require ("./modulename")
const sayHi = require("./second_module")
const data = require("./alternative-flavour-module")
require("./mind-grenade") // The code will run even though we did not assign it to a variable when we call the
                          // function in the module we called here.
//console.log(data)
//console.log(names)
// sayHi("Susan")
// sayHi(names.John)
// sayHi(names.Peter)
