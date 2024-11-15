// Track outbound links to coursehorse
if(window.isProduction) {
  var links = document.querySelectorAll('a.signup')
  for(var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      var url = e.target.attributes.href.value;
      e.preventDefault();
      ga('send', 'event', {
        eventCategory: 'Sign Up Link',
        eventAction: 'click',
        eventLabel: url,
        transport: 'beacon',
        hitCallback: function(){ document.location = url; }
      });
    });
  }
}
