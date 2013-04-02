Ember.TEMPLATES['application'] = '<header><div class="container"><span class="logo">{{#linkTo "index"}}{{/linkTo}}</span></div></header><div id="main" class="container">{{outlet}}</div><footer><div class="container"><span>&copy; 2013 Broohaha. All rights reserved.</span></div></footer>{{outlet modal}}';
Ember.TEMPLATES['lightbox'] = '{{view App.LightboxView}}';
Ember.TEMPLATES['post/comments'] = '{{#each comment in controller}}  <span>{{author}}</span>  <p>{{text}}</p>{{/each}}';
Ember.TEMPLATES['post/comments/index'] = '<span>{{author}}</span><time>{{date}}</time><p>{{text}}</p>';
Ember.TEMPLATES['post/index'] = '<p>{{text}}</p>';
Ember.TEMPLATES['posts/index'] = '{{view App.PostsCollectionView contentBinding="this"}}';
