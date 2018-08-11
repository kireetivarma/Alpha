// Kireeti Varma Dendukuri
// Final Project: Portfolio

// JavaScript Document for the portfolio project. The script enable a user to click on the image to switch it to another image in the available set. As the page is a portfolio page for a logo, the logo shall be changed into different defined brand colour to showcase its design in various environments.

// Defining two variable usable by individual images on the page.
var x=0; 
var y=0;

// Array of images to be changed for Pic 01.
var pics1= ["Images/SI_Stn91_01.1.png","Images/SI_Stn91_01.2.png","Images/SI_Stn91_01.3.png"];

// Array of images to be changed for Pic 01.
var pics2= ["Images/SI_Stn91_021.png","Images/abc.png","Images/SI_Stn91_023.png"];

// Defining function for Pic 01
function change1(event)
{
	// Taking value of the current target as an element variable
	var element = event.currentTarget;
	
	// Checking if the length of the increment if happened is under the length of the array so that there is no exception whil running the script. If valid, the increment is executed, else the value is reset to 0 to start from the first image again.
	x=(x+1<pics1.length)? x+1 : 0;
	
	// Defining the source link of the image as a new image source.
	element.src=pics1[x];
}

// Defining function for Pic 02
function change2(event)
{
	var element = event.currentTarget;
	y=(y+1<pics2.length)? y+1 : 0;
	element.src=pics2[y];
}