// Defines all the pages in the website and their url/locations.
var pages = [
	{name: "Home", src: "index.html"},
	{name: "Offers", src: "pages/offers.html"},
	{name: "Bookings", src: "pages/bookings.html"},
	{name: "Contact", src: "pages/contact.html"}
];  //  End var pages

// sets teh nav div as a bootstrap nav element.
$('nav').addClass('nav navbar navbar-toggleable-md navbar-inverse');  // navbar navbar-toggleable-md navbar-light bg-faded

// Sets the navbar divs elements into veriabls.  All othe navbar elements to be apopended to this div. 
var navElements = $('<div class="container">');

//  ............  Start section of Navbar Title ............
// Sets the navbar title & logo to the left of the navbar. 
var navHeader = $('<figure class="navbar-header col-md-3">');
var homeLink = $('<a class="navbar-brand" href="'+pages[0].src+'">').text('Mount Everest');
var navLogo = $('<img class="navbar-brand" src="img/icons/logo-navbar.png" alt="Mount Everest Logo">');

// appends the title and logo together in order 
navHeader.append(navLogo).append(homeLink);
//  ............  End section of Navbar Title ............


//  ............  Start section of Nav pages link items ............
// Sets the list for the navbar page links into.  All pages to be appended to this list.
var navMain = $('<div class="col-md-6">');
var navList = $('<ul class="nav navbar-btn nav-pills Justified">');

// Sets all the navbar page links based on the pages variable.
for (i=0; i<pages.length; i++) {

	// sets the tags into veriabls
	var navItem = $('<li>');
	var navLink = $('<a href="'+pages[i].src+'">').text(pages[i].name);

	// appends the tags together in order
	navItem.append(navLink);
	navList.append(navItem);
};  // end for loop. 

navMain.append(navList);
//  ............  End section of Nav pages link items ............


//  ............  Start section of Game Button ............

var navGame = $('<div class="col-md-3">');
var gameBtn = $('<button class="btn navbar-btn btn-primary">').text('How many Capital cities do you know?');

// appends the button into the the section
navGame.append(gameBtn);
//  ............  End section of Game Button ............


// Adds all the navbar page links onto the navbar
navElements.append(navHeader).append(navMain).append(navGame);

// writes the navbar into the DOM.
$('nav').html(navElements);

