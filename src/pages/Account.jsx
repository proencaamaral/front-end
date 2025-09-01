import React from 'react'
import { Link, useParams } from 'react-router-dom'
import AccProfile from '../components/accProfile';
import AccPlaces from '../components/AccPlaces';

const Account = () => {
  const { subpage } = useParams();

  const buttonClass = (button) => {
    let finalClass = "hover:bg-primary-400 cursor-pointer rounded-full transition hover:text-white px-4 py-2";
    if (button === subpage) finalClass += " bg-primary-400 text-white";

    return finalClass;
  }


  return (
    <section className='p-8'>
      <div className='mx-auto max-w-7xl flex flex-col gap-8 items-center'>
        <div className='flex gap-2'>

          <Link to="/account/profile" className={buttonClass("profile")}>Perfil</Link>
          <Link to="/account/bookings" className={buttonClass("bookings")}>Reservas</Link>
          <Link to="/account/places" className={buttonClass("places")}>Lugares</Link>
        </div>
        {subpage === "profile" ? <AccProfile /> : <></> }
        {subpage === "places" ? <AccPlaces /> : <></> }
        
      </div>
    </section>
  )
}

export default Account