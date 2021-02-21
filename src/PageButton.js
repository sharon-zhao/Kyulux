import React, { Component } from 'react'
class PageButton extends Component {
  constructor (props) {
    super(props)
    this.setNext = this.setNext.bind(this)
    this.setUp = this.setUp.bind(this)
    this.state = {
      num: 0,
      pagenum: this.props.current
    }
  }

  setNext () {
    if (this.state.pagenum < this.props.totalPage) {
      this.setState({
        num: this.state.num + this.props.pageSize,
        pagenum: this.state.pagenum + 1
      }, function () {
        console.log(this.state)
        this.props.pageNext(this.state.num)
      })
    }
  }

  setUp () {
    if (this.state.pagenum > 1) {
      this.setState({
        num: this.state.num - this.props.pageSize,
        pagenum: this.state.pagenum - 1
      }, function () {
        console.log(this.state)
        this.props.pageNext(this.state.num)
      })
    }
  }

  render () {
    return (
      <div className="change_page">
        <span id='pre' onClick={ this.setUp } > Previous </span>
        <span>{ this.state.pagenum } page/ { this.props.totalPage } page</span>
        <span id ='nex' onClick={ this.setNext }> Next</span>
      </div>
    )
  }
}
export default PageButton
