import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HealthCheckupApi from "../api/HealthCheckupApi";
const HealthCheckupDetails = () => {
  const { id } = useParams();

  const [item, setItem] = useState(HealthCheckupApi);
  const details = item.filter((it, e) => {
    return it.id === id;
  });

  return (
    <>
      {details.map((val, index) => {
        return (
          <div key={index}>
            <div className="health-details-back">
              <div className="health-det-sect">
                <h2>{val.detail}</h2>
              </div>
            </div>
            <div className="healthji">
            <div className="halth-detail">
              <div className="first-halth">
                <p>{val.heart || val.hear || val.lite}</p>
                <div className={val.class1}>
                  <p className={val.class}>{val.heart1 || val.hear1}</p>
                  <p className={val.class || val.class2}>{val.heart3 || val.hear2}</p>
                </div>
                <p className={val.liteClass}>{val.lite1}</p>
                <p className={val.liteClass1}>{val.lite2}</p>
              </div>
              <div className="second-health">
                <p>{val.heart4 || val.hear3 || val.lite3}</p>
                <p>{val.hear4 || val.lite4}</p>
                <p>{val.lite5}</p>
                <p>{val.lite6}</p>
                <p>{val.lite7}</p>
                <p>{val.lite8}</p>
                <p>{val.lite9}</p>
                <p>{val.lite10}</p>
                <div className={val.liteClass2}>
                     <p>{val.lite11}</p>
                     <p>{val.lite12}</p>
                </div>
                <div className={val.liteClass2}>
                    <p>{val.lite13}</p>
                    <p>{val.lite14}</p>
                    <p>{val.lite15}</p>
                    <p>{val.lite16}</p>
                    <p>{val.lite17}</p>
                    <p>{val.lite18}</p>
                    <p>{val.lite19}</p>
                    <p>{val.lite20}</p>
                    <p>{val.lite21}</p>
                    <p>{val.lite22}</p>
                    <p>{val.lite23}</p>
                    <p>{val.lite24}</p>
                </div>
                <p className={val.class || val.class3}>{val.heart5 || val.hear5}</p>
                <div className={val.class || val.class2}>
                  <p>{val.heart6 || val.hear6}</p>
                  <p>{val.heart7 || val.hear7}</p>
                  <p>{val.heart8 || val.hear8}</p>
                </div>
              </div>
              <div className="third-halth">
                <p>{val.heart9 || val.hear9}</p>
                <p className={val.class}>{val.heart10}</p>
                <p className={val.class2}>{val.hear10}</p>
                <p className={val.class1}>{val.hear11}</p>
                {/* lite=========== */}
                <p>{val.lite25}</p>
                <p className={val.liteClass3}>{val.lite26}</p>
                <p className={val.liteClass4}>{val.lite27}</p>
                {/* ========= lite end========== */}
              </div>
              <div className="fourth-halth">
                <p>{val.heart11 || val.hear12}</p>
                <p className={val.class || val.class2}>{val.heart12 || val.hear13}</p>
                <p>{val.hear14}</p>
                <p>{val.hear15}</p>
                <p className={val.class2}>{val.hear16}</p>
                <p className={val.class2}>{val.hear17}</p>

               {/* ===========lite============ */}
               <p>{val.lite28}</p>
               <div className={val.liteClass3}>
                 <p >{val.lite29}</p>
                 <p>{val.lite30}</p>
                 <p>{val.lite31}</p>
                 <p>{val.lite32}</p>
                 <p>{val.lite33}</p>
                 <p>{val.lite34}</p>
                 <p>{val.lite35}</p>
               </div>
               <div className={val.liteClass3}>
               <p>{val.lite36}</p>
               <p>{val.lite37}</p>
               <p>{val.lite38}</p>
               </div>
              </div>
            </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HealthCheckupDetails;
