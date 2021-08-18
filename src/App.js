import Profile from './profile/profile';
import React from 'react';
import './App.css';

function App() {
  const handleName=x=> alert(x)
  
  return (
    <div className="App">
<Profile fullName='Mark Zuckerberg' 
          bio='Mark Elliot Zuckerberg est né dans la ville de White Plains, dans l État de New York le 14 mai 1984. Il a trois sœurs dont une aînée, Randi et deux cadettes, Arielle et Donna. Dès le collège, à l âge de 12 ans, il s initie à la programmation informatique, une passion qui lui vient de son père.' 
          profession='CEO Facebook' imgSource='image.jpg' name={handleName}/> 
    </div>
  );
}

export default App;
