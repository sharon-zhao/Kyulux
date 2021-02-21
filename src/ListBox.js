import React, { Component } from 'react'
// import List from './List1'
import PageButton from './PageButton'
import axios from 'axios'
import apiUrl from './apiConfig'
import Table from 'react-bootstrap/Table'

class ListBox extends Component {
  constructor (props) {
    super(props)
    this.pageNext = this.pageNext.bind(this)
    this.setPage = this.setPage.bind(this)
    this.state = {
      indexList: [],
      totalData: null,
      current: 1,
      pageSize: 8,
      goValue: 0,
      totalPage: 0
    }
  }

  componentDidMount () {
    axios(`${apiUrl}`)
      .then(res => {
        this.setState({ totalData: res.data.results })
        this.setState({
          totalPage: Math.ceil(this.state.totalData.length / this.state.pageSize)
        })
        this.pageNext(this.state.goValue)
      })
      .catch(console.error)
  }

  setPage (num) {
    this.setState({
      indexList: this.state.totalData.slice(num, num + this.state.pageSize)
    })
  }

  pageNext (num) {
    this.setPage(num)
  }

  render () {
    return (
      <div className="main">
        <div className="top_bar">
        </div>
        <div className="lists">
          <ul className="index">
            <div id = 'table'>
              <Table striped bordered hover >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Age</th>
                    <th>Sex</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.indexList.map(infor => (
                    <tr key = {infor.safetyreportid}>
                      <td >{infor.safetyreportid}</td>
                      <td>{infor.patient.patientonsetage}</td>
                      <td>{infor.patient.patientsex}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </ul>
          <PageButton { ...this.state } pageNext={this.pageNext} />
        </div>
      </div>
    )
  }
}
export default ListBox
