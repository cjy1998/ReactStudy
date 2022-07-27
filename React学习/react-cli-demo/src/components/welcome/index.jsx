/*
 * @Description: 
 * @Version: 2.0
 * @Autor: cjy
 * @Date: 2022-07-27 22:35:23
 * @LastEditors: cjy
 * @LastEditTime: 2022-07-27 22:55:27
 */
import React,{Component} from "react";
import welcome from './index.module.css'
export default class Welcome extends Component{
    render(){
        return(
            <div className={welcome.title}>
                <h1>Welcome,ReactWorld!!</h1>
            </div>
        )
    }
}