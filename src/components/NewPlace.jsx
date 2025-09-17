import { useState } from 'react'
import Perks from './Perks'
import axios from "axios";
import { Navigate } from "react-router-dom"
import { useUserContext } from '../contexts/UserContext';
import PhotoUploader from './PhotoUploader';




const NewPlace = () => {

    const { user } = useUserContext();
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [photos, setPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState("");
    const [perks, setPerks] = useState([]);
    const [description, setDescription] = useState("");
    const [extras, setExtras] = useState("");
    const [price, setPrice] = useState("");
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [guests, setGuests] = useState("");
    const [redirect, setRedirect] = useState(false);

    

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (
            title &&
            city &&
            // photoLink.length > 0 &&
            description &&
            price &&
            checkin &&
            checkout &&
            guests
        ) {
            try {

                const newPlace = await axios.post("/places", {
                    owner: user._id,
                    title,
                    city,
                    photoLink,
                    description,
                    extras,
                    perks,
                    price,
                    checkin,
                    checkout,
                    guests
                });

                console.log(newPlace);
                setRedirect(true);

            } catch (error) {
                console.error(JSON.stringify(error));
                alert("Deu erro ao tentar criar um novo lugar")
            }
        } else {
            alert("Preencha todas as informações antes de enviar ! ")
        }

        // try {

        //     //     const newPlace = await axios.post("/places", {

        //     //    })
        //     setRedirect(true)
        // } catch (error) {
        //     console.error(JSON.stringify(error));
        //     alert("Deu erro ao tentar criar um novo lugar")
        // }


        if (redirect) return <Navigate to="/account/places" />
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 px-8" >
            <div className="mb-6">
                <label htmlFor="title" className="text-2xl font-bold mb-2">Título</label>
                <input
                    type="text"
                    placeholder="Digite o título do seu anúncio"
                    className="w-full rounded-full border border-gray-300 px-4 py-2"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mb-6">
                <label htmlFor='city' className="text-2xl font-bold mb-2">Cidade e País</label>
                <input
                    type="text"
                    placeholder="Digite a cidade do seu anúncio"
                    className="w-full rounded-full border border-gray-300 px-4 py-2"
                    id='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <PhotoUploader {...{photoLink, setPhotoLink, setPhotos, photos}} />

            <div className="flex flex-col gap-1">
                <label htmlFor="description" className="ml-2 text-2xl font-bold ">
                    Descrição</label>
                <textarea
                    placeholder="Digite a descrição do seu anúncio"
                    className="h-56 risize-none rounded-2xl border border-gray-300 px-4 py-2"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="perks" className='ml-2 text-2xl font-bold'>
                    Comodidades
                </label>

                <Perks {...{ perks, setPerks }} />


            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="extras" className="ml-2 text-2xl font-bold ">
                    Informações Extras
                </label>
                <textarea
                    placeholder="Informações adicionais sobre o assunto"
                    className="h-56 risize-none rounded-2xl border border-gray-300 px-4 py-2"
                    id="extras"
                    value={extras}
                    onChange={(e) => setExtras(e.target.value)}
                />

            </div>

            <div className="flex flex-col gap-1">
                <h2 className="ml-2 text-2xl font-bold ">
                    Restrições e Preço
                </h2>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6'>
                    <div className='flex flex-col gap-2'>

                        <label className="ml-2 text-xl font-bold" htmlFor="price">Preço</label>
                        <input
                            type="number"
                            placeholder="500"
                            className="rounded-full border border-gray-300 px-4 py-2"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col gap-2'>

                        <label className="ml-2 text-xl font-bold" htmlFor="checkin">Check-in</label>
                        <input
                            type="text"
                            placeholder="16:00"
                            className="rounded-full border border-gray-300 px-4 py-2"
                            id="checkin"
                            value={checkin}
                            onChange={(e) => setCheckin(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col gap-2'>

                        <label className="ml-2 text-xl font-bold" htmlFor="checkout">Check-out</label>
                        <input
                            type="text"
                            placeholder="12:00"
                            className="rounded-full border border-gray-300 px-4 py-2"
                            id="checkout"
                            value={checkout}
                            onChange={(e) => setCheckout(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col gap-2'>

                        <label className="ml-2 text-xl font-bold" htmlFor="guests">Nº Convidados</label>
                        <input
                            type="number"
                            placeholder="4"
                            className="rounded-full border border-gray-300 px-4 py-2"
                            id="guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />
                    </div>




                </div>
            </div>

            <button className="hover:bg-primary-500 bg-primary-400 min-w-44 cursor-pointer rounded-full transition te text-white px-4 py-2">Salvar Informações</button>

        </form>

    )
}

export default NewPlace;