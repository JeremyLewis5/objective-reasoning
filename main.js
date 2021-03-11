// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(str){
    if (str.userRole === 'ADMIN') {
        return true
    } else {
        return false
    }
}

function getEmail(str) {
    const first = firstName;
    const last = lastName;
    const arr1 = [firstName + '.' + lastName];
    if (arr1){
    return arr1 + '@codeimmersives.com'
    }
}
// const arr1 = [{firstName}, {lastName}];
// console.log(arr1)














// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};