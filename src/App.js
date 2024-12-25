import { useState, useEffect } from 'react';
import CardOne from './components/CardOne';
import CardTwo from './components/CardTwo';
import CardThree from './components/CardThree';
import CardFour from './components/CardFour';
import CardFive from './components/CardFive';
import CardSix from './components/CardSix';
import CardSeven from './components/CardSeven';
import CardEight from './components/CardEight';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cardStyle, setCardStyle] = useState(1)
  const numberOfStyles = 8;

  const apiUrl = 'https://randomuser.me/api/?results=5';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className='text-center flex items-center justify-center'><span>Loading...</span></div>;
  }
  if (error) {
    return <div className='flex flex-col text-center items-center justify-center space-y-5'>
      <span className='text-red-600 text-6xl font-bold'>Error</span>
      <span className='text-xl text-red-800 font-semibold'>{error}</span>
    </div>;
  }

  const handleButtonClick = () =>{
    setCardStyle(numb => (numb === numberOfStyles ? 1 : numb + 1));
    }
  
  return (
    <div className='w-screen h-screen bg-gray-300 relative overflow-clip'>
      <div className='flex flex-col items-center text-center'>
        <h1 className='text-center text-6xl font-extrabold text-gray-800 py-20'>WebTree Assignment</h1>
        <button className='bg-teal-500 text-gray-200 rounded-full px-10 py-5 font-bold hover:shadow-lg transition-shadow' onClick={handleButtonClick}>change style</button>
        <div className='my-20 grid grid-cols-5 gap-5'>
          {users.map((user, index) => {
            if (cardStyle === 1) {
              return (
                <CardOne id={index} key={index} photo={user.picture.large} fName={user.name.first} lName={user.name.last} gender={user.gender} contact={user.phone}></CardOne>
              );
            }
            if (cardStyle === 2) {
              return (
                <CardTwo id={index} key={index} photo={user.picture.large} fName={user.name.first} lName={user.name.last} gender={user.gender} contact={user.phone}></CardTwo>
              );
            }
            if (cardStyle === 3) {
              return (
                <CardThree id={index} key={index} photo={user.picture.large} fName={user.name.first} lName={user.name.last} gender={user.gender} contact={user.phone}></CardThree>
              );
            }
            if (cardStyle === 4) {
              return (
                <CardFour id={index} key={index} photo={user.picture.large} fName={user.name.first} lName={user.name.last} gender={user.gender} contact={user.phone}></CardFour>
              );
            }
            if (cardStyle === 5) {
              return (
                <CardFive id={index} key={index} photo={user.picture.large} fName={user.name.first} lName={user.name.last} gender={user.gender} contact={user.phone}></CardFive>
              );
            }
            if (cardStyle === 6) {
              return (
                <CardSix id={index} key={index} photo={user.picture.large} titles={user.name.title} fName={user.name.first} lName={user.name.last} gender={user.gender} contact={user.phone}></CardSix>
              );
            }
            if (cardStyle === 7) {
              return (
                <CardSeven id={index} key={index} photo={user.picture.large} fName={user.name.first} lName={user.name.last} gender={user.gender} contact={user.phone}></CardSeven>
              );
            }
            if (cardStyle === 8) {
              return (
                <CardEight id={index} key={index} photo={user.picture.large} fName={user.name.first} lName={user.name.last} gender={user.gender} contact={user.phone}></CardEight>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
