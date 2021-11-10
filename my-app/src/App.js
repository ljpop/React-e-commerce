import { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'



function App() {

  const [products, setProducts]=useState([
      {id:1, 
      text: "Product 1",
      price: '100e',
      },
      {id:2, 
        text: "Product 2",
        price: '200e',
    },
      {id:3, 
        text: "Product 3",
        price: '300e',
    },

    {id:4, 
      text: "Product 4",
      price: '100e',
      },
      {id:5, 
        text: "Product 5",
        price: '200e',
    },
      {id:6, 
        text: "Product 6",
        price: '300e',
    },
    {id:7, 
      text: "Product 7",
      price: '100e',
      },
      {id:8, 
        text: "Product 8",
        price: '200e',
    },
      {id:9, 
        text: "Product 9",
        price: '300e',
    },
    {id:10, 
      text: "Product 10",
      price: '100e',
      },
      {id:11, 
        text: "Product 11",
        price: '200e',
    },
    {id:12, 
      text: "Product 12",
      price: '300e',
  },
    ])

  return (
    <div className="container">
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  );
}

export default App;
