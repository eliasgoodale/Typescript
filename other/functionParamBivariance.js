/*
    Functional parameter Bivariance
*/
var myEventType;
(function (myEventType) {
    myEventType[myEventType["Mouse"] = 0] = "Mouse";
    myEventType[myEventType["Keyboard"] = 1] = "Keyboard";
})(myEventType || (myEventType = {}));
function listenEvent(eventType, handler) {
    /* ... */
}
listenEvent(myEventType.Mouse, function (e) { return console.log(e.x + ", " + e.y); });
listenEvent(myEventType.Mouse, function (e) { return console.log(e.x + ",  "); });
listenEvent(myEventType.Mouse, (function (e) { return console.log(e.x + "," + e.y); }));
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
/* listenEvent(myEventType.Mouse, (e: number) => console.log(e)); */ 
