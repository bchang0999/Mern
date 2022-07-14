import { Component } from 'react';
import style from './CSS/Header.module.css'

class Header extends Component {
    render(){
        return(
            <div className = {style.Header}>
                <h1>Header</h1>
            </div>
        )
    }
}
export default Header