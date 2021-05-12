import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
//Components
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Scrollbar from '../../../components/Scrollbar';

const SignUpScreen = (props) =>
{



    return( 
        <Scrollbar>  
        <div 
            className="flex flex-col py-5 w-full items-center bg-white bg-opacity-70 rounded-3xl space-y-4
            smd:px-5
            md:px-10
            lg:px-16
            xl:px-20
            2xl:px-24
            transition-all            
            "
        >
            <Logo imageCss="h-14 smd:h-20 md:h-auto"/>

            <span className="text-2xl">Create Account</span>
            <span className="text-sm text-gray-500">Sign up to get started!</span>

            <Input label="Fullname" autoFocus/>

            <Input label="Username"/>

            <Input label="Phone No."/>

            <Input label="Email"/>

            <Input label="Password" type="password" />

            <Button title="Sign Up"/>
        </div>
        </Scrollbar> 
        
    )
};


SignUpScreen.propTypes = 
{

}

export default SignUpScreen;