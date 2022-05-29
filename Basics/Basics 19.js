
/*
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
Test Cases:
Attempted: 15199
Solved: 2498
myFunction('java', 'tpi%rcs')
Expected
'Javascript'
myFunction('c%ountry', 'edis')
Expected
'Countryside'
myFunction('down', 'nw%ot')
Expected
'Downtown'
 */
function myFunction(a, b) {
    let aa = a.replace('%', '');
    let bb = b.replace('%', '');

    return aa.charAt(0).toUpperCase() + aa.slice(1) + bb.split('').reverse().join('');
}