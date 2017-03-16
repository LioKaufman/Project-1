/**
 * Created by niki on 15.03.17.
 */

function Carousel(id) {
    this.elementCount = 0;
    this.id = id;
    this.mainElement = $('#'+this.id);
    this.indicatorsElement = $('<ol class="carousel-indicators">');

    this.innerElement = $('<div class="carousel-inner" role="listbox">');
    this.mainElement.append(this.indicatorsElement).append(this.innerElement);

    this.controlDefault = {
        'prev': {'icon': "glyphicon-chevron-left", 'text': 'Previous', 'class': 'left'},
        'next': {'icon': "glyphicon-chevron-right", 'text': 'Next', 'class': 'right'}
    };

    this.addControl = function (dataSlide) {
        var element = $('<a class="carousel-control" role="button">').addClass(this.controlDefault[dataSlide].class)
            .attr('href', '#'+this.id)
            .attr('data-slide', dataSlide);
        $('<span class="glyphicon" aria-hidden="true">')
            .addClass(this.controlDefault[dataSlide].icon).appendTo(element);
        $('<span class="sr-only">').text(this.controlDefault[dataSlide].text).appendTo(element);
        this.mainElement.append(element);
    };

    this.addIndicator = function () {
        var element = $('<li data-slide="next">').attr('data.target', '#'+this.id);
        if (this.elementCount == 0) {
            element.addClass("active");
        }
        this.elementCount++;
        this.indicatorsElement.append(element);
    };

    this.createItem = function (caption, image) {
        var element = $('<div class="item">');
        if (typeof image !== 'undefined') {
            element.append(image);
        }
        element.append(caption);
        if (this.elementCount == 0) {
            element.addClass("active");
        }
        this.innerElement.append(element);
        this.addIndicator();
    };

    this.addItem = function (element) {
        if (this.elementCount == 0) {
            element.addClass("active");
        }
        this.innerElement.append(element);
        this.addIndicator();
    };
}

/*
 {
 Title: "Thailand",
 Picture: "../img/locations/thailand.jpg",
 BaseRate: 500,
 Extra: 30,
 Latitude: 13.75,
 Longitude: 100.50,
 Desc: "Our tours to Thailand are one of the most popular on our entire website. We'll fly you in to Bangkok where you start your trip seeing the capital city and eat amazing street food. We'll then take you on a tour through Chiang Mai in the north, and the beautiful southern island of Phuket."
 },
*/
function destinationPane(destination, linkURL, removeDotsFromImageURL) {

    var imageURL = destination.Picture;
    var imageAlt = "picture of "+destination.Title;
    var title = destination.Title;
    var paragraph = destination.CarouselText;
    if ( removeDotsFromImageURL === true ) {
        imageURL = imageURL.substring(3);
    }
    var element = $('<div class="item">');
    var image = $('<img>').attr('src', imageURL).attr('alt', imageAlt);
    var caption = $('<div class="carousel-caption">');
    var link = $('<a>').attr('href', linkURL);
    $('<h1>').text(title).appendTo(link);
    $('<p>').text(paragraph).appendTo(link);
    caption.append(link);
    element.append(image).append(caption);
    return element;

}
/**
$('#myCarousel').empty();
var myCarousel = new Carousel("myCarousel");
myCarousel.addControl('prev');
myCarousel.addControl('next');
destinations.map(function (destination) {
    myCarousel.addItem(destinationPane(destination, 'booking.html'));
});
**/


var mainCarouselDestinations = new Carousel("mainCarouselDestinations");
mainCarouselDestinations.addControl('prev');
mainCarouselDestinations.addControl('next');
destinations.map(function (destination) {
    mainCarouselDestinations.addItem(destinationPane(destination, 'pages/booking.html', true));
});

/*
 var offers = [
 {Title: "Thailand", MinNights: 7, Discount: 0.22, Picture: "../thailand.jpg"},
 {Title: "Egypt", MinNights: 4, Discount: 0.2, Picture: "../egypt.jpg"},
 {Title: "United States", MinNights: 10, Discount: 0.1, Picture: "../usa.jpg"},
 {Title: "Brazil", MinNights: 10, Discount: 0.15, Picture: "../brazil.jpg"},
 {Title: "South Korea", MinNights: 6, Discount: 0.18, Picture: "../korea.jpg"}
 ];
*/
function offerPane(offer, linkURL, removeDotsFromImageURL) {

    var imageURL = offer.Picture;
    console.log(offer.Picture);
    var imageAlt = "picture of "+offer.Title;
    var title = offer.Title;
    var paragraph = (offer.Discount*100).toFixed()+"% off for "+offer.MinNights+"+ Nights.";
    if ( removeDotsFromImageURL === true ) {
        imageURL = imageURL.substring(3);
    }
    var element = $('<div class="item">');
    var image = $('<img>').attr('src', imageURL).attr('alt', imageAlt);
    var caption = $('<div class="carousel-caption">');
    var link = $('<a>').attr('href', linkURL);
    $('<h1>').text(title).appendTo(link);
    $('<p>').text(paragraph).appendTo(link);
    caption.append(link);
    element.append(image).append(caption);
    return element;

}

var mainCarouselOffers = new Carousel("mainCarouselOffers");
mainCarouselOffers.addControl('prev');
mainCarouselOffers.addControl('next');
offers.map(function (offer) {
    //console.log(offer);
    mainCarouselOffers.addItem(offerPane(offer, 'pages/booking.html', true));
});


/*
 {
 "Name": "Josef",
 "Destination": "India",
 "Quote": "I didn't know what to expect before coming to India, but I came home fully satisfied after taking the India tour. The colors, the food, and the people of India are amazing, I'd love to go again someday!"
 },
 */
function testimonialPane(testimonial) {


    var name = testimonial.Name;
    var destination = testimonial.Destination;
    var paragraph = testimonial.Quote;
    if ( removeDotsFromImageURL === true ) {
        imageURL = imageURL.substring(3);
    }
    var element = $('<div class="item">');
    var image = $('<img>').attr('src', imageURL).attr('alt', imageAlt);
    var caption = $('<div class="carousel-caption">');
    var link = $('<a>').attr('href', linkURL);
    $('<h1>').text(name).appendTo(link);
    $('<p>').text(paragraph).appendTo(link);
    caption.append(link);
    element.append(image).append(caption);
    return element;

}

var mainCarouselTestimonials = new Carousel("mainCarouselTestimonials");
mainCarouselTestimonials.addControl('prev');
mainCarouselTestimonials.addControl('next');
testimonials.map(function (testimonial) {
    //console.log(testimonial);
    mainCarouselTestimonials.addItem(offerPane(offer, 'pages/booking.html', true));
});

