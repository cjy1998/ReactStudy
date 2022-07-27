/*
 * @Description: 
 * @Version: 2.0
 * @Autor: cjy
 * @Date: 2022-07-27 21:12:58
 * @LastEditors: cjy
 * @LastEditTime: 2022-07-27 22:54:29
 */

import './App.css';
import React from 'react';
import Hello from './components/Hello';
import Welcome from './components/welcome'
class App extends React.Component{
  render(){
    return (
      <div>
        <Hello></Hello>
     <Welcome></Welcome>
      </div>
     
    )
  }
}
export default App;
