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

            <div className="halth-detail">
              <div className="first-halth">
                <p>{val.heart || val.hear}</p>
                <div className={val.class1}>
                  <p className={val.class}>{val.heart1 || val.hear1}</p>
                  <p className={val.class || val.class2}>{val.heart3 || val.hear2}</p>
                </div>
              </div>
              <div className="second-health">
                <p>{val.heart4 || val.hear3}</p>
                <p>{val.hear4}</p>
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
              </div>
              <div className="fourth-halth">
                <p>{val.heart11 || val.hear12}</p>
                <p className={val.class || val.class2}>{val.heart12 || val.hear13}</p>
                <p>{val.hear14}</p>
                <p>{val.hear15}</p>
                <p className={val.class2}>{val.hear16}</p>
                <p className={val.class2}>{val.hear17}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HealthCheckupDetails;
