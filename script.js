var choices = document.querySelectorAll('.choice');
for (var i = 0; i < choices.length; i += 1) {
    (function(choice) {
        choice.addEventListener('mouseover', function() {
            choice.style.transform = 'scale(1.1)';
            choice.style.transition = 'transform 0.2s ease';
        });
        choice.addEventListener('mouseout', function() {
            choice.style.transform = 'scale(1)';
        });
    })(choices[i]);
}

var restaurants = document.querySelectorAll('.restaurant');
for (var j = 0; j < restaurants.length; j += 1) {
    (function(restaurant) {
        var details = restaurant.querySelector('.details');
        restaurant.addEventListener('mouseover', function() {
            if (details) {
                details.classList.add('visible');
            }
        });
        restaurant.addEventListener('mouseout', function() {
            if (details) {
                details.classList.remove('visible');
            }
        });
    })(restaurants[j]);
}
