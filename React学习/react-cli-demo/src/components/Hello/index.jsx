/*
 * @Description: 
 * @Version: 2.0
 * @Autor: cjy
 * @Date: 2022-07-27 22:25:27
 * @LastEditors: cjy
 * @LastEditTime: 2022-07-27 22:55:24
 */
import React,{Component} from "react";
import hello from "./index.module.css"
export default class Hello extends Component{
    render(){
        return(
            <div className={hello.title}>
                <h1>Hello,React!!</h1>
            </div>
        )
    }
}