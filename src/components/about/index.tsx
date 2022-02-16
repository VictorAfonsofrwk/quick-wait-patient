import 'animate.css';
import { useEffect, useRef, useState } from 'react';

interface ICriador {
    urlImg?: string,
    nome?: string,
    especialidade?: string
}
export default function Sobre() {
    const [out, setOut] = useState(false)
    const [caroucel, setCaroucel] = useState(null)
    const [criadores, setCriadores] = useState<ICriador[]>([
        {
            urlImg: "",
            nome: "",
            especialidade: ""
        },
        {
            urlImg: "https://media-exp1.licdn.com/dms/image/C4E03AQERuamGr0gaUg/profile-displayphoto-shrink_800_800/0/1581333821361?e=1650499200&v=beta&t=Qg4LraVo8xmSaBNRj_GvKDnosmA2VnwFH-1MFbZ43f8",
            nome: "José Vitor",
            especialidade: "Desenvolvedor Front-End"
        },
        {
            urlImg: "https://media-exp1.licdn.com/dms/image/C5603AQEBXPhbOjIOJw/profile-displayphoto-shrink_800_800/0/1641417329680?e=1650499200&v=beta&t=x3vQEOt57M1R5k-hfCoiyeXfVo4lyoT30x1jz0YRETg",
            nome: "Adriano Valadares",
            especialidade: "Desenvolvedor Front-End"
        },
        {
            urlImg: "https://media-exp1.licdn.com/dms/image/C4E03AQEclfWIr6zBJA/profile-displayphoto-shrink_800_800/0/1641329256393?e=1650499200&v=beta&t=u8ldLJEJW2vzbITHlwATBaP4zBvAGMCuk1tlAmhZ7FY",
            nome: "Ernesto Junior Ribarr",
            especialidade: "Desenvolvedor Front-End"
        },
        {
            urlImg: "https://media-exp1.licdn.com/dms/image/C4E03AQH1StEcnYwTqw/profile-displayphoto-shrink_800_800/0/1610978760598?e=1650499200&v=beta&t=2imD8_hKrI2w0obJeGX9BJmr-lJTJxK-ENRqlA_mLio",
            nome: "Raiffe Pontes",
            especialidade: "Desenvolvedor Front-End"
        },
    ])
    const [timer, setTimer] = useState(2);

    const [controle, setControle] = useState(false)
    const id = useRef(null);
    const clear = () => {
        window.clearInterval(id.current);
    };
    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);

        }, 3200);
        return () => clear();
    }, [controle]);

    useEffect(() => {
        setCaroucel(<div key={timer} className='animate__animated animate__backInDown mt-10 drop-shadow-2xl animate__delay-1s h-2/4 w-auto md:w-96 bg-cyan-100 rounded-lg p-8 flex flex-col flex-wrap space-y-2 items-center'>
            <img className='rounded-full h-36 w-36' src={criadores[timer].urlImg} alt="" />
            <h2 className='font-semibold text-xl text-cyan-800'>{criadores[timer].nome}</h2>
            <h3 className='text-lg text-cyan-700 '>{criadores[timer].especialidade}</h3>
        </div>)
        id.current = window.setInterval(() => {


        }, 3200);
        if (timer === 0) {
            clear();
            setTimer(criadores.length - 1)
            setControle(!controle)

        }
    }, [timer]);

    return (
        < div className='h-screen w-screen bg-gradient-to-r from-cyan-700 to-cyan-500 flex flex-col items-center'>
            <h1 className='animate__animated animate__bounce mt-8 font-semibold text-cyan-50 text-3xl'>Quem somos?</h1>
            {caroucel}
            <a target={'_blank'} className='mt-3 text-sm flex flex-col items-center space-y-2' href="https://www.frameworkdigital.com.br/"><img className='bg-cyan-50 rounded-md mt-8 p-4' src="https://static.wixstatic.com/media/ca9c70_a667af8468be4f52a1a22b32c9d9c9c4~mv2.png/v1/crop/x_149,y_232,w_549,h_107/fill/w_156,h_26,al_c,q_85,usm_0.66_1.00_0.01/Logo_Roxa-02.webp" alt="frame" /><p className='text-cyan-50'>Framework Digital 2022 - Todos os direitos reservados.</p></a>
        </div>
    )
}
