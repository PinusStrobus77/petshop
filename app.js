var shop = [
    {
      title: 'Leash',
      image: 'https://cdn.shopify.com/s/files/1/1577/4333/products/40354-Roamer-Leash-Granite-Gray.png?crop=center&height=550&v=1676490728&width=820',
      price: '5.00',
      description:'Our top selling dog accesory'
    },
    {
        title: 'Water Dish',
        image: 'https://cdn1.bigcommerce.com/server700/6bee4/products/441/images/1852/Tusco_Dish_Round__77789.1552409525.1280.1280.jpg?c=2',
        price: '15.00',
        description:'Perfect for any pet'
      },
    
  
    
    ]
    
    var postHTML = " "

  
  

    for (var i=0; i < shop.length ; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  