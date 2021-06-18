function theThing (val) {
    var myAnswer = "";
    switch (val) {
        case "a":
            myAnswer = "aero";
            break;
        case "an":
            myAnswer = "anything";
            break;
        case "ana":
            myAnswer = "analog";
            break;
        default:
            myAnswer = "";
            break;
    } 
    return myAnswer;
}

console.log(theThing("ana"));