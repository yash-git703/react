import React from 'react'
import { MOVIEDATA } from "../../utils/MovieData";
import { NavLink } from 'react-router-dom';
export default function Movie() {

    console.log(MOVIEDATA);

    return (
        <section>
            <h2 style={{ textAlign: 'center' }}>Movie Info</h2>
            <div className='d-flex justify-content-evenly gap-4 flex-wrap'>

                {
                    (MOVIEDATA.length > 0) && MOVIEDATA.map((element, index) => (
                        <div className='card' key={index}>
                            <div className="card-body">
                                <div className='card-title d-flex flex-column gap-4'>
                                    <p>{element.id}</p>
                                    <p className='card-subtitle'>Title: {element.title}</p>
                                    <p className='card-subtitle'>Year: {element.year}</p>
                                    <div>
                                        <NavLink to={`/movies/${element.id}`}>View More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
