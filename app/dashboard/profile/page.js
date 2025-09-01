import Image from "next/image";

export default function Profile () {
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-16 md:px-12 lg:px-8 lg:px-16 bg-gray-50">
            <div className="w-full md:w-[350px] flex flex-col gap-4 shadow-lg rounded-md">
                <div className="flex justify-center">
                    <Image
                    width={80}
                    height={80}
                    src="/black.webp"
                    alt="profile-image"
                    className="w-[80px] h-[80px] rounded-full"/>
                </div>
                <p className="text-center py-3 border-b border-gray-600">Mikey Cash</p>
                <p className="text-center py-3 border-b border-gray-600">mickeycash@gmail.com</p>
                <p className="text-center py-3 border-b border-gray-600">User ID</p>
            </div>
        </main>
    );
    
}