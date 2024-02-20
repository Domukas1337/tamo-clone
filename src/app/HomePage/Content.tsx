import Image from "next/image"
export default function Content() {
    return (
        <div className="flex flex-row mx-60 my-20 text-white">
            <div className=" text-3xl ">
                <h1 className="text-pink-200">Sveikiname atvykus i TAMO!</h1>
                <h1>Susipažinkite su TAMO slaptažodžio <br/> saugumo instrukcija!
                 <br/> ----------------------------------------</h1>
                <h1 className="text-xl">Kodėl reikia saugoti savo TAMO prisijungimo duomenis? </h1>
                <br/>
                <h1 className="text-sm"> Atlikti tai tinkamai yra labai svarbu, nes tik taip galima apsisaugoti<br/> nuo nepageidaujamų pašalinių asmenų prisijungimo ir išvengti nepageidaujamų<br/> veiksmų Jūsų TAMO e. dienyno paskyroje. </h1>
                <br/>
                <h1 className="text-sm">Kviečiame susipažinti kokius 4 žingsnius naudinga atlikti norint tai užtikrinti.</h1>
                <br/>
                <a className="text-pink-300">Sužinoti daugiau... </a>
            </div>
            <div className="mx-20">
                <Image src="/anime.png" alt="logo" width={500} height={700} className="border-2 border-blue-300 rounded-md"/>
            </div>
            <div>
                <Image src="/anime2.png" alt="logo" width={500} height={700} className="border-2 border-blue-300 rounded-md"/>
            </div>
        </div>
    )
}