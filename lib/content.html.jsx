<template name="Content">
  <div class="content">
    <div class="avatar">
      <div class="image">
  <img src="/avatar.png"/>
      </div>
    </div>
    <div class="inner">
      <div class="breif">
        <h1>Jacob Hartog</h1>
      <p>product | design | analytics | marketing | podcasts | music</p>
      </div>
      <ul>
        <li> Find me on  <a ref="a" href="http://twitter.com/jacobhartog" target="_blank"><span class="show-wide">Twitter </span></a></li>
        <li>Find me on <a ref="a" href="https://instagram.com/sfny" target="_blank"><span class="show-wide">Instagram</span></a></li>
      </ul>

      <p class="copy">Copyright © 2015 Jacob Hartog</p>
    </div>
    <div class="visitGithub">
      <a href="https://github.com/sfny" title="visit Github" target="_blank">Visit me on Github</a>
    </div>
  </div>
</template>

Template.Content.events({
  'click ul li': function(context, event) {
    event.preventDefault();
    var href = $('a', $(event.target).closest('li')).attr('href');
    window.open(href, '_blank');
  },
});
