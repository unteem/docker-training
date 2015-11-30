filename = location.pathname.substring(1)
filename = filename.substring(0,filename.indexOf('.'))

selector = document.querySelector('section'); 
selector.dataset.markdown = filename + '.md';
// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'slide', // none/fade/slide/convex/concave/zoom
  multiplex: {
    secret: null, // null so the clients do not have control of the master presentation
    id: 'ef1fbc8686178b0e', // id, obtained from socket.io server
    url: 'https://presentations.pierre-o.fr:443' // Location of socket.io server
  },
  // Optional reveal.js plugins
  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/notes/notes.js', async: true },
    { src: '//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.16/socket.io.min.js', async: true },
    { src: 'plugin/multiplex/client.js', async: true }
  ]
});

