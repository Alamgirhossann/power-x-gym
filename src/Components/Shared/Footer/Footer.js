import React from 'react';
import youtube from '../../../Images/bxl-youtube.png'
import facebook from '../../../Images/bxl-facebook.png'
import instagram from '../../../Images/bxl-instagram.png'
import twitter from '../../../Images/bxl-twitter.png'
import whatsapp from '../../../Images/bxl-whatsapp.png'

const Footer = () => {
    return (
        <div className='mt-5' style={{background:"#171426"}}>
            <div className='container text-white'>
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <h3 className='fw-bold mb-4'>POWER <span style={{ color: "#FCD842" }}>X</span></h3>
                    </div>
                    <div className="col-md-2 mt-5">
                        <p className='fw-bold'>Need Help</p>
                        <p>Help Center</p>
                        <p>Email Support</p>
                        <p>Live Chat</p>
                        <p>Gift Certificates</p>
                        <p>Send Us Feedback</p>
                    </div>
                    <div className="col-md-2 mt-5">
                        <p className='fw-bold'>Digital Resources</p>
                        <p>Articles</p>
                        <p>E-books</p>
                    </div>
                    <div className="col-md-2 mt-5">
                        <p className='fw-bold'>Connect with Us</p>
                        <div className="flex">
                            <img style={{width:"30px", paddingRight:"5px"}} src={youtube} alt="" />
                            <img style={{width:"15px", paddingRight:"5px"}} src={facebook} alt="" />
                            <img style={{width:"30px", paddingRight:"5px"}} src={instagram} alt="" />
                            <img style={{width:"30px", paddingRight:"5px"}} src={twitter} alt="" />
                            <img style={{width:"30px", paddingRight:"5px"}} src={whatsapp} alt="" />
                        </div>
                        <p>Forum</p>
                    </div>
                    <div className="col-md-2 mt-5">
                        <p className='fw-bold'>Join Our Newsletter</p>
                        <p>Get exclusive news geatures, and updates from The Sharedder Weight loss Acadeny.</p>
                    </div>
                </div>
                <p className='text-center mt-5'>&copy;{new Date().getFullYear()} Programing hero. All right reserved.</p>
            </div>
        </div>
    );
};

export default Footer;