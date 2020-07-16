import React from 'react';
import {Link} from 'react-router-dom';

function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">
                Menu
            </div>
                         
            <ul>
                <li>
                    <Link 
                    to="/" 
                    className="text-blue-500 py-3 border-t border-b block"
                    onClick={props.closeMenu}
                    >
                        LogIn
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/dashboard" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Dashboard
                    </Link>
                </li>
            </ul>
        </div>
    );
}
export default NavigationMenu