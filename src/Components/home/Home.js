import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { RiContrastDropFill } from "react-icons/ri";


const Home = () => {
  return (   
    <div id='home-page'>
         <div id='home-page-container'>  

         <div className='head'>
            <div className="container flexSB">  
                <div className="logo">
                
                    <h1>Recommended Jobs</h1>                    
                </div>
            </div>
        </div> 
        <hr/>
        <hr/>
        <hr/>
        
 
            <div id='home-page-fan-favourites-container'>

                <div className='recommended'>
                        <div className='prod1'><h2>Product Engineer</h2> 
                        <button className='apply'>Apply</button>  <br/>
                        12 hours ago <hr/>  
                        <h3 className='space'><FaLocationDot />Pune  <FaUserGraduate />Fresher <RiContrastDropFill />Full-Time</h3>
                        </div>         
                              
                </div>         

                <div className='recommended'>
                        <div className='prod1'><h2>IOS Developer</h2> 
                        <button className='apply'>Apply</button>  <br/>
                        12 hours ago <hr/>
                        <h3 className='space'><FaLocationDot />Pune  <FaUserGraduate />Fresher <RiContrastDropFill />Full-Time</h3>    
                        </div>               
                </div> 
                <div className='recommended'>
                        <div className='prod1'><h2>Java Developer</h2> 
                        <button className='apply'>Apply</button>  <br/>
                        12 hours ago <hr/>
                        <h3 className='space'><FaLocationDot />Pune  <FaUserGraduate />Fresher <RiContrastDropFill />Full-Time</h3>     
                        </div>               
                </div> 
                <div className='recommended'>
                        <div className='prod1'><h2>Product Engineer</h2> 
                        <button className='apply'>Apply</button> <br/>
                        12 hours ago <hr/>
                        <h3 className='space'><FaLocationDot />Pune  <FaUserGraduate />Fresher <RiContrastDropFill />Full-Time</h3>        
                        </div>               
                </div> 
                <div className='recommended'>
                        <div className='prod1'><h2>UX Designer</h2> 
                        <button className='apply'>Apply</button> <br/>
                        12 hours ago <hr/>
                        <h3 className='space'><FaLocationDot />Pune  <FaUserGraduate />Fresher <RiContrastDropFill />Full-Time</h3>      
                        </div>               
                </div> 
                <div className='recommended'>
                        <div className='prod1'><h2>Product Engineer</h2> 
                        <button className='apply'>Apply</button> <br/>
                        12 hours ago <hr/>
                        <h3 className='space'><FaLocationDot />Pune  <FaUserGraduate />Fresher <RiContrastDropFill />Full-Time</h3> 
                        </div>               
                </div> 
            </div>
        </div> 
    </div>  
  )
}

export default Home