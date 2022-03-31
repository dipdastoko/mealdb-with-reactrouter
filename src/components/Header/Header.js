import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Link to='/resturant'>Go to Resturant</Link>
            <h1>Get the best food from resturant. Just click on "Go to Resturant"!!!</h1>
        </div>
    );
};

export default Header;