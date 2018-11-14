/* 
	Functional parameter Bivariance
*/

enum myEventType { Mouse, Keyboard }

interface myEvent { 
	timestamp: number 
}

interface myMouseEvent extends myEvent{
	x: number
	y: number
}

interface myKeyEvent extends myEvent { keyCode: number }

function listenEvent(eventType: myEventType, handler: (n: myEvent) => void) {
	/* ... */
}

listenEvent(myEventType.Mouse, (e: myMouseEvent) => console.log(`${e.x}, ${e.y}`));

listenEvent(myEventType.Mouse, (e: myEvent) => console.log(`${(<myMouseEvent>e).x},  `))

listenEvent(myEventType.Mouse, <(e: myEvent) => void>((e: myMouseEvent) => console.log(e.x + "," + e.y)))

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
/* listenEvent(myEventType.Mouse, (e: number) => console.log(e)); */