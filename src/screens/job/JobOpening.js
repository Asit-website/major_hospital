import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CareerBack from './common/CareerBack';
import jobApi from '../../api/JobApi';
import { useState } from 'react';

const JobOpening = () => {
  var [item, setItem] = useState(jobApi);
  const [filter, setFilter] = useState({
    jobLocation: '',
    area: '',
    jobTitle: ''
  });
  const [locations, setLocations] = useState([]);
  const [areas, setAreas] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let b1 = [];
    let b2 = [];
    let b3 = [];
    for (let i of jobApi) {
      if (!b1.includes(i.location)) {
        b1.push(i.location);
      }
      if (!b2.includes(i.proffessional)) {
        b2.push(i.proffessional);
      }
      if (!b3.includes(i.title)) {
        b3.push(i.title);
      }
    }
    setLocations(b1);
    setAreas(b2);
    setTitles(b3);
  };

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    setItem(jobApi);
    item=jobApi;

    if (filter.jobLocation !== "") {
        item = item.filter((e) => {
          return e.location === filter.jobLocation;
        });
    }

    if (filter.area !== "") {
        item = item.filter((e) => {
          return e.proffessional === filter.area;
        });
    }
    if (filter.jobTitle !== "") {
        item = item.filter((e) => {
          return e.title === filter.jobTitle;
        });
    }
    setItem(item);
  };

  const handleReset = () => {
    setItem(jobApi);
  };

  return (
    <>
      <CareerBack />
      <div className="carer-section relative">
        <div className="serach-section">
          <div className="search-carer">
            <select onChange={handleChange} name="jobLocation" id="jobLocation" value={filter.jobLocation}>
              <option value="">Job Location</option>
              {
                locations.map((val, index) => {
                  return <option key={index} value={val}>{val}</option>
                })
              }
            </select>
          </div>
          <div className="search-carer">
            <select onChange={handleChange} name="area" id="area" value={filter.area}>
              <option value="">Professional Areas</option>
              {
                areas.map((val, index) => {
                  return <option key={index} value={val}>{val}</option>
                })
              }
            </select>
          </div>
          {/* <div className="search-carer">
                  <select name="" id="">
                      <option value="">Sub Category</option>
                  </select>
              </div> */}
          <div className="search-carer">
            <select onChange={handleChange} name="jobTitle" id="jobTitle" value={filter.jobTitle}>
              <option value="">Job Title</option>
              {
                titles.map((val, index) => {
                  return (
                    <option key={index} value={val}>{val}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="search-button">
            <button onClick={handleSearch} className='sea'>Search</button>
            <button onClick={handleReset} className='reset'>Reset</button>
          </div>
        </div>

        <div className=' relative'>
          <div className="relative overflow-x-auto table-opening">
            <table className="w-full  text-left">
              <thead className="">
                <tr className='table-sect border-b '>
                  <th scope="col" className="px-6 py-3">
                    <h2>Job Title</h2>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h2>Professional Area</h2>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h2>Location</h2>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h2>Action</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  item.map((val, index) => {
                    return (
                      <tr key={index} className=" border-b  table-sect1">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <p>{val.title}</p>
                        </th>
                        <td className="px-6 py-4">
                          <p>{val.proffessional}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p>{val.location}</p>
                        </td>
                        <td className="px-6 py-4">
                          <NavLink to={`/carer/${val.id}`}> <button className=' text-center'>{val.apply}</button></NavLink>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

        </div>

      </div>
      <div className="about-major">
        <h2>About Major Hospital</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>




    </>
  )
}

export default JobOpening