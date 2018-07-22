// JavaScript Document
var x=0; y=0;
var pics1= ["SI_Stn91_01.1.png","SI_Stn91_01.2.png","SI_Stn91_01.3.png"];
var pics2= ["SI_Stn91_021.png","abc.png","SI_Stn91_023.png"];

function change1(event)
{
	var element = event.currentTarget;
	x=(x+1<pics1.length)? x+1 : 0;
	element.src=pics1[x];
}

function change2(event)
{
	var element = event.currentTarget;
	y=(y+1<pics2.length)? y+1 : 0;
	element.src=pics2[y];
}