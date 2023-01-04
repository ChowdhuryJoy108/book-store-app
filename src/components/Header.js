import React, {useState} from 'react';
import { AppBar,Toolbar, Tabs, Tab , Typography } from '@mui/material'
import {NavLink} from 'react-router-dom'



const Header = () => {
    const [value, setValue] = useState();
    
    return (
        <div>
            <AppBar sx={{backgroundColor:'#232F3D'}} position="sticky" >
                <Toolbar>
                   <Typography>Book Store</Typography>
                   <Tabs 
                   sx={{ml:'auto'}}
                   textColor="inherit" indicatorColor="secondary"
                    value={value} 
                    onchange={(e,val)=>setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/" label="Home" />
                        <Tab LinkComponent={NavLink} to="/add" label="Add product" />
                        <Tab LinkComponent={NavLink} to="/books" label="Service" />
                        <Tab LinkComponent={NavLink} to="/banner" label="Banner" />
                        <Tab LinkComponent={NavLink} to="/contact" label="Contact" />                    
                   </Tabs>
                </Toolbar>      
            </AppBar>
            
        </div>
    );
};

export default Header;