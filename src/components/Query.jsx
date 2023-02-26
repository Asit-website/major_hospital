import React from 'react'
import { Link, useParams } from 'react-router-dom';
import cardilogiApi from "../api/cardilogiApi";
import HealthCheckupApi from '../api/HealthCheckupApi';
import ApointmentPopup from '../popup/ApointmentPopup';

const Query = ({appointPop,setApointPop}) => {
    const { q } = useParams();
    console.log(q);
    console.log(cardilogiApi);
    return (
        <>
            <div className='margin-top'>
                <h1 className='text-3xl text-center py-3'>Search results for - {q}</h1>
                <div>
                    <div className="filter filter1">
                    <div className='flex flex-wrap items-center justify-center sard'>
                        {cardilogiApi.map((val, index) => {
                            if (val.name.toLocaleLowerCase().includes(q.toLocaleLowerCase()) || val.content.toLocaleLowerCase().includes(q.toLocaleLowerCase()))
                                return (
                                    <div key={index} className="card">
                                        <img className="main-img" src={val.images} alt="" />
                                        <div className="igh">
                                            <div className="name-card">
                                                <div className="text-card">
                                                    <h3>{val.name}</h3>
                                                    <p>{val.content}</p>
                                                    <p>{val.content1}</p>
                                                </div>
                                                <div className="viwe-profile">
                                                    <Link to={`/cardio/${val.id}`}>
                                                        <p>{val.view}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="information-doc">
                                                <h3>{val.information}</h3>
                                                <p>{val.informationCont}</p>
                                                <p>{val.informationCont1}</p>
                                                <div className="tara flex ">
                                                    <img src={val.image1[0]} alt="" />
                                                    <img className="ml-1" src={val.image1[1]} alt="" />
                                                    <img className="ml-1" src={val.image1[2]} alt="" />
                                                    <img className="ml-1" src={val.image1[3]} alt="" />
                                                    <img className="ml-1" src={val.image1[4]} alt="" />
                                                </div>
                                                <button onClick={() => setApointPop(true)}>
                                                {val.appoint}
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                        })}
                    </div>
                    </div>
                    <div className="health-card health-card1">
                    <div className="flex flex-wrap items-center justify-center health-sard mt-1 health-sard3">
                        {HealthCheckupApi.map((val, index) => {
                            if (val.advance.toLocaleLowerCase().includes(q.toLocaleLowerCase()) || val.range.toLocaleLowerCase().includes(q.toLocaleLowerCase()) || val.willness.toLocaleLowerCase().includes(q.toLocaleLowerCase()))
                                return (
                                    <div key={index} className="health-box">
                                        <div className={`off ${val.off1}`}>
                                            <p>
                                                {val.percentage} <br /> {val.percentage1}
                                            </p>
                                        </div>
                                        <img src={val.images} alt="shut2" />
                                        <div className="health-sox">
                                            <h2>{val.advance}</h2>
                                            <div className="para-he">
                                                <p>{val.range}</p>
                                                <p>{val.willness}</p>
                                            </div>
                                            <div className="health-btn">
                                                <button className="know_more">{val.know}</button>
                                                {/* <button
                                                    onClick={() => setApointPop(true)}
                                                    className="book_more"
                                                >
                                                    {val.book}
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                        })}
                    </div>
                    </div>
                </div>
            </div>

            
            {
                appointPop && <ApointmentPopup setApointPop={setApointPop}/>
            }
        </>
    )
}

export default Query;
