import React, { useState, useEffect } from 'react';
import NavigationBar from '../navigationBar';
import axios from 'axios';
import './Territories.css';

const Territories = () => {
  const [territoriesData, setTerritoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Remove https://cors-anywhere.herokuapp.com/ in URL if CORS is accepted in backend server
  // https://cors-anywhere.herokuapp.com/ is used to bypass CORS error
  // Request temporary access for CORS here: https://cors-anywhere.herokuapp.com/corsdemo
  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://netzwelt-devtest.azurewebsites.net/Territories/All', {
      headers: {
        'Accept': '* / *'
      }
    }).then(response => {
      setTerritoriesData(response.data);
      setLoading(false);
    }).catch(error => {
      console.error('Error fetching territories data:', error);
      setLoading(false);
    });
  }, []);

  const checkChildren = (data, parentId) => {
    const population = data.filter(item => item.parent === parentId);
    const response = population.length > 0 ? true : false;
    return response;
}
  
  const toggleCollapsible = (event) => {
    const listItem = event.target.closest('li');
    const nextUl = listItem.querySelector('ul');
  
    if (nextUl) {
      listItem.classList.toggle('collapsible-down');
      nextUl.classList.toggle('collapsed');
    }
  };

  const buildNestedList = (data, parentId) => {
    const children = data.filter(item => item.parent === parentId);

    if (children.length === 0) {
      return null;
    }

    return (
      <ul>
        {children.map(child => (
          <li key={child.id} className={checkChildren(data, child.id) ? 'collapsible' : 'non-collapsible'}>
            <a className="text-dark text-decoration-none" onClick={toggleCollapsible}> { child.name } </a>
           
            { buildNestedList(data, child.id) }
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <NavigationBar />
      
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
          <h2 className="ms-2">Loading territories data...</h2>
        </div>
      ) : (
        <div>
          <h2>Territories</h2>
          {buildNestedList(territoriesData.data, null)}
        </div>
      )}
    </div>
  );
}

export default Territories;
