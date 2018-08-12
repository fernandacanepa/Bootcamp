

var imgs = ['https://starwarsblog.starwars.com/wp-content/uploads/2015/08/dkng-art-awakens-1024x1024.jpg',
            'https://starwarsblog.starwars.com/wp-content/uploads/2015/08/englert-art-awakens-1024x1024.jpg',
            'http://editorial.designtaxi.com/editorial-images/news-StarWarsTrilogyConceptArt140618/1-Original-StarWars-Trilogy-Conceptual-Illustrations.png',
            'https://mffanrodders.files.wordpress.com/2014/06/gallery-1988-death-star.jpg?w=640'];


$(document).ready(function(){

  var container = document.getElementById('imgcontainer');
	var docFrag = document.createDocumentFragment();

  imgs.forEach(function(url, index, originalArray) {
      var img = document.createElement('img');
      $(img).addClass("");
      var theDiv = document.createElement('div');
      $(theDiv).addClass("content");
      $(theDiv).prepend(img);
      img.src = url;
      docFrag.appendChild(theDiv);
  });

  container.appendChild(docFrag);

});
