define(function(){
  var ButtonComponent = React.createClass({
    onButtonClick: function(){
      alert('hello');
    },
    render: function() {
      return React.DOM.button({onClick: this.onButtonClick}, 'hello');
    }
  });
  return ButtonComponent;
});
