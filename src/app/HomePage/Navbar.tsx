import Image from "next/image"
import NavItems from "./NavbarComponents"

export default function Navbar() {
    return (
        <div className="p-6 shadow-lg bg-accent">
            <div className="max-w-screen-md mx-auto flex flex-row">
                <Image src="/tamod.png" alt="logo" width={100} height={100} className="border-2 border-blue-300 rounded-md"/>
                <div className="flex flex-row items-center ml-auto gap-10">
                    {NavItems.map((item, index) => (
                        <div key={index} className="">
                            <a href={item.link} className={item.class}>{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}