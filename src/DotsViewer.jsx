var React = require('react')
var Dots = require('./Dots.jsx')

randomInt = function (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

var DotsViewer = React.createClass({
  getInitialState() {
    var min = 0, max = 500
    var circles = [] //{cx: 4, cy: 10, r: 10, fill: 'mediumorchid', stroke: 'crimson'}
    for (var i = 0; i < 100; ++i)
      circles.push({
        cx: randomInt(min, max),
        cy: randomInt(min, max),
        r: 1,
        fill: 'blue',
      })

    var lines = []
    for (var i = 0; i < 20; ++i) {
      var randX1 = circles[randomInt(0, circles.length -1)]
      var randX2 = circles[randomInt(0, circles.length -1)]
      lines.push({
        x1: randX1.cx, y1:randX1.cy,
        x2: randX2.cx, y2:randX2.cy,
        strokeWidth:'1',
        stroke:'green',
      })
    }
    return {circles, lines}
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
        {this.state.lines.map((c, i)=><line key={i} {...c} />)}
        </svg>
      </div>
    )
  }
})

module.exports = DotsViewer
