var React = require('react')

// var Line = React.createClass({
//     render: function() {
//       return (

//       )
//     }
// })

var Dots = React.createClass({
  render() {
    return (
      <span>
        {
          this.props.circles.map((c, i)=>{
            return <circle key={i} {...c} />
          })
        }
      </span>
    )
  }
})
          // <line x1='25' y1='25' x2='75' y2='75'
          //   strokeWidth='5'
          //   stroke='orange'
          //   />

module.exports = Dots
