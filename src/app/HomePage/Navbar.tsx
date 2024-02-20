import Image from "next/image"

export default function Navbar() {
    return (
        <div className="p-6 shadow-lg">
            <div className="max-w-screen-md mx-auto">
                <Image src="/tamod.png" alt="logo" width={100} height={100} />
            </div>
        </div>
    )
}