import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MapIcon } from '@heroicons/react/outline'
import { InputAddress } from './styles'
import { getAddress } from '../../../services/mapbox/mapboxService'
import { IFeature } from '../../../interfaces/placesInterface'

interface IModal {
    isOpen: boolean
    showModal: () => void
    coordenadas?: [number, number]
    setCoordinates: (lat: number, lon: number) => void
}
export default function Modal({ showModal, isOpen, setCoordinates }: IModal) {
    const [address, setAddress] = useState('')
    const [addressList, setAddressList] = useState(null)
    useEffect(() => {
        if (address.length >= 3) {
            handleAddressChange(address)
        } else {
            setAddressList([])
        }
    }, [address]);
    async function handleAddressChange(addressInput: string) {
        const { features } = await getAddress(addressInput)
        setAddressList(features)

    }
    function handleSetAddress({ currentTarget }: { currentTarget: Element }) {
        try {
            setAddressList([])
            setAddress(currentTarget.id)
            const [lat, lon] = currentTarget.children[2].textContent.split(",")
            setCoordinates(parseFloat(lat), parseFloat(lon))
            showModal()
        } catch (error) {
            console.log(error.message)
        }

    }
    const addressRef = useRef(null)
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={addressRef} onClose={showModal}>
                <div className="flex items-end  min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-200"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-8 lg:align-middle max-w-xl lg:w-full ">
                            <div className="bg-cyan-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <MapIcon className="h-6 w-6 text-cyan-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-white">
                                            Qual é a sua localização?
                                        </Dialog.Title>
                                        <div className="mt-2 w-full flex flex-col h-auto text-white">
                                            <div className='flex flex-row'><InputAddress onChange={(e) => setAddress(e.target.value)} value={address} placeholder='Ex: Rua, Número, Bairro, Cidade - Estado' />
                                                {/* <button
                                                    type="button"
                                                    className="w-full border-white border-2 rounded-full shadow-sm px-4 py-2 bg-transparent text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                    onClick={showModal}
                                                >
                                                    &gt;
                                                </button> */}
                                            </div>
                                            {addressList ? <ul>
                                                {addressList.map((addressItem: IFeature) => {
                                                    const [title, subTitle, lastTitle = ''] = addressItem.place_name.split(",")
                                                    const [lng, lat] = addressItem.geometry.coordinates
                                                    return <li onClick={handleSetAddress} id={addressItem.place_name} className='cursor-pointer space-y-1 p-2 flex flex-col rounded hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400   ' key={addressItem.id}>
                                                        <h4 className='font-semibold text-lg'>{title}</h4>
                                                        <h5 className='text-sm'>{`${subTitle},${lastTitle}`}</h5>
                                                        <p className='hidden'>{`${lat},${lng}`}</p>
                                                    </li>
                                                })}
                                            </ul> : ''}

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </Transition.Child>

                </div>

            </Dialog >

        </Transition.Root >
    )
}