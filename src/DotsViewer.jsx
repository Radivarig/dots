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

    return {circles, lines: []}
  },

  componentDidMount() {
    window.addEventListener('mousemove', this.updateLines)
  },

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.updateLines)
  },

  updateLines(e) {
    var lines = this.state.circles.map((c)=>{
      var a = c.cx -e.pageX
      var b = c.cy -e.pageY
      var distanceAB = Math.sqrt(a*a +b*b)
      if (distanceAB < 40)
      return {
        x1: c.cx, y1: c.cy,
        x2: e.pageX, y2: e.pageY,
        strokeWidth: '1',
        stroke: 'green',
      }
    })
    this.setState({lines})
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
