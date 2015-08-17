#pragma strict

var smooth = 5.0;
var tiltAngle = 30.0;
function Start () {

}

function Update () {
	var halfW:float = Screen.width/2;
	transform.position.x = (Input.mousePosition.x - halfW)/halfW;
	var halfH:float = Screen.height/2;
	transform.position.z = (Input.mousePosition.y - halfH)/halfH;
	
	//Smoothly tilts a transform towards a target ratation
	var tiltAroundZ = Input.GetAxis("Mouse X") * tiltAngle;
	var tiltAroundX = Input.GetAxis("Mouse Y")*tiltAngle;
	var target = Quaternion.Euler(tiltAroundX,0,tiltAroundZ);
	
	//Dampem towards the target rotation
	transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * smooth);
	Debug.Log((Input.mousePosition.x - Screen.width/2)/Screen.width/2);
	//transform.position.x = Input.mousePosition.x;
	//Debug.Log(Input.mousePosition.x);
}