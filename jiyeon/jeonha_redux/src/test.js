fetch('http://localhost:4000/getData')
.then(response => {
  // console.log(response);
  response.json();
})
.then(data => {
  console.log(data);
  this.setState({username: data});
});