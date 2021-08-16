import React from 'react'
import { MenuItems } from './MenuItems'

class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='relative flex items-center justify-center h-16 bg-white shadow-md'>
                <div className="navbar-logo">
                    <img src='/hultprize-logo.png' alt='' className='absolute w-10 cursor-pointer top-2 left-12 sm:left-24'></img>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={`right-12 block sm:hidden top-3 absolute text-4xl  ${this.state.clicked ? 'fa fa-times': 'fa fa-bars'}`}></i>
                </div>
                <ul className={`${this.state.clicked ? 
                    'flex right-0 flex-col justify-center text-center py-5 self-center bg-black text-white w-full top-16': 
                    'hidden sm:block'
                }
                sm:flex gap-10 sm:right-10 justify-self-end block absolute uppercase`}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={`hover:text-gray-600 ${item.cName}`}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar