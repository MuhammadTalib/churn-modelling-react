import React from 'react';
import ReactFileReader from 'react-file-reader';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
class App extends React.Component {
  state = { 
    data:[],
    testData:[],
    pred:[],
  }
  stateup=(data)=>{
    console.log("data",data)
    this.setState({data:data,testData:data.splice(5000,5000)})
  }
  statepred=(data)=>{
    this.setState({pred:data})
  }
  handleChangeFile = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    var resA=[]
    var setState=this.stateup;
    reader.onload = function(event) {
      var res=event.target.result.split('\n')
      resA=res.map(m=>{
        return m.split(',')
      })
      setState(resA)
    };
    reader.readAsText(file);
  }
  handleChangeFilepred = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    var resA=[]
    var setState=this.statepred;
    reader.onload = function(event) {
      var res=event.target.result.split('\n')
      resA=res.map(m=>{
        return m.split(',')
      })
      
      setState(resA)
    };
    reader.readAsText(file);
  }
  
  render() { 
    return ( 
    <div>
      <input 
        type="file" 
        accept=".csv" 
        onChange={e => 
            this.handleChangeFile(e)
        }
        onload={event =>{
          var res=event.target.result.split('\n')
          var resA=res.map(m=>{
            return m.split(',')
          })
          console.log("aa",resA)
        }} 
        onL
      /> 
      <input type="file" accept=".csv" onChange={e => 
      this.handleChangeFilepred(e)} /> 
       <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Row No</TableCell>
              <TableCell align="right">CustomerID</TableCell>
              <TableCell align="right">Surname</TableCell>
              <TableCell align="right">CreditScore</TableCell>
              <TableCell align="right">Geography</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Tenure</TableCell>
              <TableCell align="right">Balance</TableCell>
              <TableCell align="right">No of Products</TableCell>
              <TableCell align="right">Has Credit Card</TableCell>
              <TableCell align="right">Is Active Member</TableCell>
              <TableCell align="right">Estimated Salary</TableCell>
              <TableCell align="right">Pred</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.testData.map((m,index)=>{ return <React.Fragment>
              <TableRow>
                  <TableCell align="right">{m[0]}</TableCell>
                  <TableCell align="right">{m[1]}</TableCell>
                  <TableCell align="right">{m[2]}</TableCell>
                  <TableCell align="right">{m[3]}</TableCell>
                  <TableCell align="right">{m[4]}</TableCell>
                  <TableCell align="right">{m[5]}</TableCell>
                  <TableCell align="right">{m[6]}</TableCell>
                  <TableCell align="right">{m[7]}</TableCell>
                  <TableCell align="right">{m[8]}</TableCell>
                  <TableCell align="right">{m[9]}</TableCell>
                  <TableCell align="right">{m[10]}</TableCell>
                  <TableCell align="right">{m[11]}</TableCell>
                  <TableCell align="right">{m[12]}</TableCell>
                  <TableCell align="right">{this.state.pred[index] && parseInt(this.state.pred[index][0])===0?"false":"true"}</TableCell>
                </TableRow>
              </React.Fragment>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div> );
  }
}
 
export default App;
