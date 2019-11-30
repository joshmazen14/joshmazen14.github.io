import React from 'preact';

const Html = props => (
  <html>
    <head>
      <title>Josh Mazen</title>
      <link rel="icon" href="/public/favicon.ico" />
    </head>
    { process.env.NODE_ENV !== 'production' && (
      <script src="http://localhost:35729/livereload.js"></script>
    )}
    <body>
      <script src="/bundle.js"></script>
      <div id="root" role="main">
        {props.children}
      </div>
    </body>
  </html>
)


export default Html