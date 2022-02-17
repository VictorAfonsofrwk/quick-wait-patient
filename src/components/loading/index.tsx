import loaderInterno from '../../assets/loader.svg'
import loaderExterno from '../../assets/loaderExterno.svg'
export default function Loading() {
    return (
        <div className="h-48 w-60">
            <img className='loader mx-2 block absolute' src={loaderExterno} alt="" />
            <img className='loader2 mx-16 mt-16 h-36 w-36 z-10 absolute' src={loaderInterno} alt="" />
        </div>
    )
}
