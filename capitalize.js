function capitalize(str) {
    if(!str||str.trim().length==0)
        return "";
    var firstLetter=str[0].toUpperCase();
    var rest=str.slice(1).toLowerCase();
    return firstLetter+rest;
}

module.exports = capitalize;