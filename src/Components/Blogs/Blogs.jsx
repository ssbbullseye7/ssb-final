import React, { useEffect, useState, useMemo } from "react";
import "./style.css";
import im1 from "../../im3.jpg";
import im4 from "../../im4.avif";
import im5 from "../../im5.webp";
function Blogs() {
  const [sheetData, setSheetData] = useState([]);
  const [data, setData] = useState(null);

  const sheetId = process.env.REACT_APP_SHEET_ID;
  const apiKey = process.env.REACT_APP_API_KEY; // Replace with your Google Sheets API key
  const sheetName = "Sheet1"; // Replace with your sheet name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const values = data.values || [];
        setSheetData(values);
        setData(values.slice(1)); // Skip the first row (headers)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 10 seconds
    }, 5000);

    return () => {
      clearInterval(intervalId); // Cleanup the interval when the component is unmounted
    };
  }, [sheetId, apiKey, sheetName]);

  // const columns = React.useMemo(
  //   () =>
  //     sheetData.length > 0
  //       ? sheetData[0].map((col, index) => ({
  //           Header: col,
  //           accessor: String(index), // Using column index as accessor
  //         }))
  //       : [],
  //   [sheetData]
  // );
  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <div className="blog-heading">Recent Blogs & News</div>
      </div>

      <div className="blog-box-container">
        {data && (
             <>
          <div className="blog" onClick={() => {
    window.open(data[data.length-1][4], '_blank');
  }}>
            <div className="blog-image">
              <img src={im1} alt="" />
            </div>
            <div className="blog-content">
              <div className="keyword">
                {data[data.length - 1][1]} | {data[data.length - 1][0]}
              </div>
              <div className="blog-title">{data[data.length - 1][2]}</div>
              <div className="blog-para">{data[data.length - 1][3]}</div>
            </div>
          </div>
        
        <div className="blog" onClick={() => {
    window.open(data[data.length-2][4], '_blank');
  }}>
          <div className="blog-image">
            <img src={im4} alt="" />
          </div>
          <div className="blog-content">
          <div className="keyword">
                {data[data.length - 2][1]} | {data[data.length - 2][0]}
              </div>
              <div className="blog-title">{data[data.length - 2][2]}</div>
              <div className="blog-para">{data[data.length - 2][3]}</div>
          </div>
        </div>
        <div className="blog" onClick={() => {
    window.open(data[data.length-3][4], '_blank');
  }}>
          <div className="blog-image">
            <img src={im5} alt="" />
          </div>
          <div className="blog-content">
          <div className="keyword">
                {data[data.length - 3][1]} | {data[data.length - 3][0]}
              </div>
              <div className="blog-title">{data[data.length - 3][2]}</div>
              <div className="blog-para">{data[data.length - 3][3]}</div>
          </div>
        </div>
       </>
        )}
      </div>
    </div>
  );
}

export default Blogs;
