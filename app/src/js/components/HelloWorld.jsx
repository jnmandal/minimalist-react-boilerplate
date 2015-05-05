var React = require('react');

var HelloWorld = React.createClass({

  render: function() {
    return (
      <div className="hello-world">
        <p>Hello World</p>
        <p> If you see this, it means your .jsx and .js files have been processed correctly. </p>
      </div>
    );
  }

});

module.exports = HelloWorld;