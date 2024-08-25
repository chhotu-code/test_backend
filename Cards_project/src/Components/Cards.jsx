import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'; // Importing the CSS file

export default function Cards() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/foodData');  // Corrected endpoint
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (err) {
      console.log("Can't fetch data");
    }
};


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='gap-4 cards' style={{display:'flex', flexWrap:'wrap'}}>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card key={index} style={{ width: '19rem' }}>
            <Card.Img variant="top" src={item.img || "https://th.bing.com/th/id/OIP.uInyW7Va_LAbSBmvTsn4bQHaDG?rs=1&pid=ImgDetMain"} style={{ width: '18.9rem', height: '10rem', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description || 'No description available.'}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          
        ))
      ) : (
        <p>Loading...</p>
      )}

       
          {/* <Card  style={{ width: '19rem' }}>
            <Card.Img variant="top" src={data.img || "https://th.bing.com/th/id/OIP.uInyW7Va_LAbSBmvTsn4bQHaDG?rs=1&pid=ImgDetMain"} style={{ width: '18.9rem', height: '10rem', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                {data.description || 'No description available.'}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}

     

    </div>
  );
}
