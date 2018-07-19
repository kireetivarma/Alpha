/* Function for the left card to call transformations. */
function flip1(event)
{
	var element = event.currentTarget;
	/* Toggle the setting of the classname attribute */
	element.className = (element.className == 'card1') ? 'card1 flipped' : 'card1';
}

/* Function for the right card to call transformations. */
function flip2(event)
{
	var element = event.currentTarget;
	/* Toggle the setting of the classname attribute */
	element.className = (element.className == 'card2') ? 'card2 flipped' : 'card2';
}