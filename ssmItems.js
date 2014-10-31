<!--

/*
Configure menu styles below
NOTE: To edit the link colors, go to the STYLE tags and edit the ssm2Items colors
*/
YOffset=190; // no quotes!!
XOffset=0;
staticYOffset=30; // no quotes!!
slideSpeed=20 // no quotes!!
waitTime=100; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.
menuBGColor="black";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=90; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily="Verdana";
hdrFontSize="2";
hdrFontColor="#e81123";
hdrBGColor="#ffd800";
hdrAlign="left";
hdrVAlign="center";
hdrHeight="15";
linkFontFamily="WebSymbolsRegular";
linkFontSize="10";
linkBGColor="white";
linkOverBGColor="#e81123";
linkTarget="_top";
linkAlign="Left";
barBGColor="#454545";
barFontFamily="Verdana";
barFontSize="4";
barFontColor="white";
barVAlign="center";
barWidth=20; // no quotes!!
barText="BACK"; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Go Back"] //create header
ssmItems[1]=["(", "devfest.php", ""]
/*ssmItems[2]=["What's New", "http://www.dynamicdrive.com/new.htm",""]
ssmItems[3]=["What's Hot", "http://www.dynamicdrive.com/hot.htm", ""]
ssmItems[4]=["Message Forum", "http://www.codingforums.com", "_new"]
ssmItems[5]=["Submit Script", "http://www.dynamicdrive.com/submitscript.htm", ""]
ssmItems[6]=["Link to Us", "http://www.dynamicdrive.com/link.htm", ""]

ssmItems[7]=["FAQ", "http://www.dynamicdrive.com/faqs.htm", "", 1, "no"] //create two column row
ssmItems[8]=["Email", "http://www.dynamicdrive.com/contact.htm", "",1]

ssmItems[9]=["External Links", "", ""] //create header
ssmItems[10]=["JavaScript Kit", "http://www.javascriptkit.com", ""]
ssmItems[11]=["Freewarejava", "http://www.freewarejava.com", ""]
ssmItems[12]=["Coding Forums", "http://www.codingforums.com", ""]*/

buildMenu();

//-->