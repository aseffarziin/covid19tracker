import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_DEMO = () => {
  const [my, setMy] = useState({});
  const fetchMe = () => {
    axios.get('https://api.covid19api.com/summary').then((res) => {
      console.log(res.data.Global);
      setMy(res.data.Global);
    });
  }
  return (
    <div style={{background: 'color'}}>
      <button onClick={() => fetchMe()}>Fetch</button>
      <h1>
        {my.TotalDeaths} <br />
        {my.TotalRecovered}
      </h1>
    </div>
  );
};

// export async function getServerSideProps(context) {}

export default API_DEMO;
