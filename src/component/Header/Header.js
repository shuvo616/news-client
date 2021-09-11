import React from 'react';
import banner from './../../image/b.png'


const Header = () => {
    return (
        <div className="text-center mt-5 mb-5">
            <img className="img-fluid" height="100px" width="100px" src={banner} alt="" />
        </div>
    );
};

export default Header;