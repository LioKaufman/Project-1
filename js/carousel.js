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
        'prev': {'icon': "glyphicon-chevron-left", 'text': 'Previous'},
        'next': {'icon': "glyphicon-chevron-right", 'text': 'Next'}
    };

    this.addControl = function (dataSlide) {
        var element = $('<a class="left carousel-control" role="button">')
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



function destinationPane(imageURL, imageAlt, linkURL, title, paragraph) {
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

$('#myCarousel').empty();
var myCarousel = new Carousel("myCarousel");
myCarousel.addControl('prev');
myCarousel.addControl('next');
myCarousel.addItem(destinationPane("../img/locations/thailand.jpg", "thailand", "booking.html", "Thailand", "Bangkok, Phuket, and Chiang Mai"));