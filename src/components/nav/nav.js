import "./nav.scss"
import { useState, useEffect } from 'react';


function Nav () {
    return(
        <header> 
            <div className="mail-inbox">
              Arbi-Mail
            </div>
            <input placeholder="Search mail" type="text"></input>
        </header>
    )
}

export default Nav;