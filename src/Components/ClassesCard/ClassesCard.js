import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ClassesCard = ({ classes }) => {
    return (
        <div class="col-md-4">
            <div class="card border-0" style={{ height: "350px" }}>
                <img style={{ height: "300px" }} src={classes.image} class="card-img-top" alt="..." />
                <div className='mx-3'>
                    <Link to={`/class/${classes.id}`}>
                        <button style={
                            { position: "absolute", top: "270px", background: "#FCD842", height: "50px", width: "90%", border: "none", outline: "none", fontWeight: "bold" }
                        }>
                            {classes.title}
                            <span className='mx-3'><FontAwesomeIcon icon={faArrowRight} /></span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;