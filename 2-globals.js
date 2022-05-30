// GLOBALS - NO WINDOW [ex. window.alert() ] !!!

// __dirname  -- path to current directory
// __filename -- file name
// require    -- function to use modules (CommonJS)
// module     -- info about current module (file)
// process    -- info about env wheer the program is being executed

console.log(__dirname)
console.log(__filename)

setInterval(()=> {
    console.log('hello')
}, 1000)