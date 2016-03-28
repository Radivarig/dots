var React = require('react')
var Dots = require('./Dots.jsx')

randomInt = function (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

var DotsViewer = React.createClass({
  getInitialState() {
    var circles = [] //{cx: 4, cy: 10, r: 10, fill: 'mediumorchid', stroke: 'crimson'}
    var min = 0, max = 500
    for (var i = 0; i < 100; ++i)
      circles.push({
        cx: randomInt(min, max),
        cy: randomInt(min, max),
        r: 1,
        fill: 'blue',
      })

    return {circles}
  },

  render() {
    return (
      <div>
        <svg
          style={{border: 'solid 1px red'}}
          height='500'
          width='500'
        >
        {this.state.circles.map((c, i)=><circle key={i} {...c} />)}
        </svg>
      </div>
    )
  }
})

module.exports = DotsViewer
