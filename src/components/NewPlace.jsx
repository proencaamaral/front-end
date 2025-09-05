import { useState } from 'react'
import Perks from './Perks'
import axios from "axios";



const NewPlace = () => {
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [photoLink, setPhotoLink] = useState("");
    const [description, setDescription] = useState("");
    const [extras, setExtras] = useState("");
    const [price, setPrice] = useState("");
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [guests, setGuests] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault()

    //     const newPlace = await axios.post("/places", {
           
    //    })
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

            <div className="flex flex-col gap-1">

                <label htmlFor='photos' className="text-2xl font-bold mb-2">Fotos</label>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Cole o link da imagem"
                        className="w-full rounded-full border border-gray-300 px-4 py-2 mb-2 grow"
                        id="photos"
                        value={photoLink}
                        onChange={(e) => setPhotoLink(e.target.value)}
                    />

                    <button
                        type="button"
                        className=" cursor-pointer w-full bg-gray-200 rounded-full py-2 font-semibold hover:bg-gray-300 transition">
                        Enviar foto
                    </button>
                </div>

                <div className='grid grid-cols-5 gap-4'>
                    <label htmlFor="file" className='flex aspect-square cursor-pointer items-center justify-center gap-2 rounded-2xl border border-gray-300'><input type="file" id="file" className='hidden' /><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                        Upload</label>



                </div>


            </div>

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

                <Perks />


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