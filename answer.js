// *** YOUR ANSWER BELOW ***

function negate(str){
    return "un" + str;
}

console.log(negate("cold"));

function intensify(str){
    return "plus" + str;
}

console.log(intensify("cold"));

function reinforce(str){
    return "double" + str;
}

console.log(reinforce("cold"));

console.log(reinforce(intensify(negate("cold"))));