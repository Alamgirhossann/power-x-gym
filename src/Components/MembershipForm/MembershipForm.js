import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NoMatch from '../NoMatch/NoMatch';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const MembershipForm = () => {
    const [formInfo, setFormInfo] = useState(false);
    sessionStorage.setItem('formdata', JSON.stringify(formInfo))
    const classInfo = JSON.parse(sessionStorage.getItem('class'));

    const handleChange = (e) => {
        const newInfo = { ...formInfo }
        newInfo[e.target.name] = e.target.value
        setFormInfo(newInfo)
    }

    return (
        <div>
            {classInfo ?
                <div>
                    <div className='header'>
                        <Navbar></Navbar>
                        <div className='head-title'>
                            <p>YOUR GYM MEMBERSHIP</p>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className='d-flex mb-5 justify-content-center'>
                            <div className='text-center'>
                                <h3><span style={{ borderRadius: "50%", backgroundColor: "#FCD842" }}>1</span></h3>
                                <p>Personal Detail</p>
                            </div>
                            <div>
                                <span>........................</span>
                            </div>
                            <div className='text-center text-secondary'>
                                <h3><span>2</span></h3>
                                <p>Bank Payment</p>
                            </div>
                            <div>
                                <span>........................</span>
                            </div>
                            <div className='text-center text-secondary'>
                                <h3><span>3</span></h3>
                                <p>Membership Created</p>
                            </div>
                        </div>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="name">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control onChange={handleChange} name='firstName' type="text" placeholder="First Name" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control onChange={handleChange} name='lastName' type="text" placeholder="Last Name" required />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onChange={handleChange} name='email' type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="mobile">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control onChange={handleChange} name='mobile' type="text" placeholder="Mobile Number" required />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <div className="col-md-6">
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="day">
                                            <Form.Label>Day</Form.Label>
                                            <Form.Control onChange={handleChange} name='day' as="select" defaultValue="Select day" required>
                                                <option>Select day</option>
                                                <option value='01'>01</option>
                                                <option value='02'>02</option>
                                                <option value='03'>03</option>
                                                <option value='04'>04</option>
                                                <option value='05'>05</option>
                                                <option value='06'>06</option>
                                                <option value='07'>07</option>
                                                <option value='08'>08</option>
                                                <option value='09'>09</option>
                                                <option value='10'>10</option>
                                                <option value='11'>11</option>
                                                <option value='12'>12</option>
                                                <option value='13'>13</option>
                                                <option value='14'>14</option>
                                                <option value='15'>15</option>
                                                <option value='16'>16</option>
                                                <option value='17'>17</option>
                                                <option value='18'>18</option>
                                                <option value='19'>19</option>
                                                <option value='20'>20</option>
                                                <option value='21'>21</option>
                                                <option value='22'>22</option>
                                                <option value='23'>23</option>
                                                <option value='24'>24</option>
                                                <option value='25'>25</option>
                                                <option value='26'>26</option>
                                                <option value='27'>27</option>
                                                <option value='28'>28</option>
                                                <option value='29'>29</option>
                                                <option value='30'>30</option>
                                                <option value='31'>31</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="month">
                                            <Form.Label>Month</Form.Label>
                                            <Form.Control onChange={handleChange} name='month' as="select" defaultValue="Select month" required>
                                                <option>Select month</option>
                                                <option value='01'>January</option>
                                                <option value='02'>February</option>
                                                <option value='03'>March</option>
                                                <option value='04'>April</option>
                                                <option value='05'>May</option>
                                                <option value='06'>June</option>
                                                <option value='07'>July</option>
                                                <option value='08'>August</option>
                                                <option value='09'>September</option>
                                                <option value='10'>October</option>
                                                <option value='11'>November</option>
                                                <option value='12'>December</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="year">
                                            <Form.Label>Year</Form.Label>
                                            <Form.Control onChange={handleChange} name='year' type='text' placeholder='year' required />
                                        </Form.Group>
                                    </Form.Row>
                                </div>
                                <div className="col-md-6">
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="gander">
                                            <Form.Label>Gander</Form.Label>
                                            <Form.Control onChange={handleChange} name='gander' as="select" defaultValue="Select gander" required>
                                                <option>Select gander</option>
                                                <option value='male'>male</option>
                                                <option value='female'>female</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                </div>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="address">
                                    <Form.Label>Address line 1</Form.Label>
                                    <Form.Control onChange={handleChange} name='address' type="text" placeholder="Address" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="country">
                                    <Form.Label>Contry/Region</Form.Label>
                                    <Form.Control onChange={handleChange} name='region' type="text" placeholder="Contry/Region" required />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control onChange={handleChange} name='city' type="text" placeholder="City" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="postcode">
                                    <Form.Label>PostCode</Form.Label>
                                    <Form.Control onChange={handleChange} name='postcode' type="text" placeholder="Post code" required />
                                </Form.Group>
                            </Form.Row>
                            <Link to='/payment'>
                                <button type='submit' disabled={formInfo === false? true : false} style={{ background: "#FCD842", height: "40px", float: "right", width: "150px", border: "none", outline: "none", fontWeight: "bold", }}>
                                    NEXT
                        </button>
                            </Link>
                        </Form>
                    </div>
                    <br />
                    <br />
                    <Footer></Footer>
                </div>
                : <div>
                    <NoMatch></NoMatch>
                </div>
            }

        </div>
    );
};

export default MembershipForm;