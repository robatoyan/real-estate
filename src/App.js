import logo from './logo.svg';
import './App.css';
import { YourHome } from './page/YourHome';
import { MyRouter } from './component/MyRouter';
import { MyContex } from './component/MyContext';
import { useState } from 'react';

function App() {
  const [arr, setArr] = useState([
    {
      id: 1, img: "/imgHome/img5.png", imges:
        [
          "/imgSee/imges.png",
          "/imgSee/img1.jpg",
          "/imgSee/img2.png",
          "/imgSee/img3.jpg",
          "/imgSee/imges.png",
          "/imgSee/imgRoom.webp",
        ], title: "Malto House", bedroom: 4, bathroom: 2, window: 2, price: 450.500
    },
    {
      id: 2, img: "/imgHome/img2.png", imges: [
        "/imgSee/imges.png",
        "/imgSee/img1.jpg",
        "/imgSee/img2.png",
        "/imgSee/img3.jpg",
        "/imgSee/imges.png",
        "/imgSee/imgRoom.webp",
      ], title: "Malto House", bedroom: 4, bathroom: 2, window: 2, price: 250.500
    },
    {
      id: 3, img: "/imgHome/img3.png", imges: [
        "/imgSee/imges.png",
        "/imgSee/img1.jpg",
        "/imgSee/img2.png",
        "/imgSee/img3.jpg",
        "/imgSee/imges.png",
        "/imgSee/imgRoom.webp",
      ], title: "Malto House", bedroom: 4, bathroom: 2, window: 2, price: 350.400
    },
    {
      id: 4, img: "/imgHome/img4.png", imges: [
        "/imgSee/imges.png",
        "/imgSee/img1.jpg",
        "/imgSee/img2.png",
        "/imgSee/img3.jpg",
        "/imgSee/imges.png",
        "/imgSee/imgRoom.webp",
      ], title: "Malto House", bedroom: 4, bathroom: 2, window: 2, price: 450.500
    },
    {
      id: 5, img: "/imgHome/img5.png", imges: [
        "/imgSee/imges.png",
        "/imgSee/img1.jpg",
        "/imgSee/img2.png",
        "/imgSee/img3.jpg",
        "/imgSee/imges.png",
        "/imgSee/imgRoom.webp",
      ], title: "Malto House", bedroom: 4, bathroom: 2, window: 2, price: 750.700
    },
    {
      id: 6, img: "/imgHome/img6.png", imges: [
        "/imgSee/imges.png",
        "/imgSee/img1.jpg",
        "/imgSee/img2.png",
        "/imgSee/img3.jpg",
        "/imgSee/imges.png",
        "/imgSee/imgRoom.webp",
      ], title: "Malto House", bedroom: 4, bathroom: 2, window: 2, price: 950.500
    }
  ])
  const [client, setClient] = useState([
    { id: 1, img: "/imgClient/user.png", nameSurname: "Lara Madrigal", client: "Client" },
    { id: 2, img: "/imgClient/user.png", nameSurname: "Lara Madrigal", client: "Client" },
    { id: 3, img: "/imgClient/user.png", nameSurname: "Lara Madrigal", client: "Client" }
  ])
  return (
    <div className="App">
      <MyContex.Provider value={{ arr, setArr, client, setClient }}>
        <MyRouter />
      </MyContex.Provider>
    </div>
  );
}

export default App;
