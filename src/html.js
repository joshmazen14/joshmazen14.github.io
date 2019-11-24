import React from 'preact';

const Html = props => (
  <html>
    <head>
      <link rel="icon" href="/dist/favicon.ico" />
      <title>Josh Mazen</title>
    </head>
    { process.env.NODE_ENV !== 'production' && (
      <script src="http://localhost:35729/livereload.js"></script>
    )}
    <body>
      <script src="/dist/bundle.js"></script>
      <div id="root" role="main">
        {props.children}
      </div>
    </body>
  </html>
)


export default Html