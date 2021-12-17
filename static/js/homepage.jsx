'use strict';

function Homepage() {
  return <div class="homepageDiv">
    <h2>Thanks for joining! We hope you have fun!</h2>
    <img src="/static/img/balloonicorn.jpg" id="balloonicornImg"></img><br></br>
    <a href="/cards">Click here to navigate to the trading cards</a>
  </div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
