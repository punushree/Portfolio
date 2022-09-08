import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
        <div className='footer pbt text-center'>
        <div className='container'>
           <div className='row'>
                <div className='col-sm-2 text-center'>
                    <p><b>Phone No:</b> <br/> +91 1234564789</p>
                </div>
                <div className='col-sm-2 text-center'>
                    <p><b>Email:</b> <br/>abc@gmail.com</p>
                </div>
                <div className='col-sm-5 text-center'>
                    <p><b>Address:</b> <br/>47, A.r Nair Road, C/o Byculla Nursing Home, Byculla</p>
                </div> 
                <div className='col-sm-3 text-center'>
                    <b>Social Media connection:</b><br/>
                    <div className='centrbox'> <img src="https://bugendaitech.com/wp-content/uploads/2021/03/Twitter.png" width="30px" /> &nbsp;&nbsp;
                        <img src="https://bugendaitech.com/wp-content/uploads/2021/03/facebook.png" width="30px" />&nbsp;&nbsp;
                        <img src="https://bugendaitech.com/wp-content/uploads/2021/03/Linkedin.png" width="30px" />&nbsp;&nbsp;

                        <img src="https://bugendaitech.com/wp-content/uploads/2021/03/Yt.png" width="30px" />&nbsp;&nbsp;
                        <img src="https://bugendaitech.com/wp-content/uploads/2021/03/Pintrest.png" width="25px" /></div>
                </div>               
           </div>
           
        </div>
        </div>
    </div>
  )
}

export default Footer