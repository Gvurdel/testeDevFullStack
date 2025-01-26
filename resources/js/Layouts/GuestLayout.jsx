import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-800 bg-cover bg-center pt-6 sm:justify-center sm:pt-0"
             style={{ backgroundImage: "url('/images/img10.webp')" }} // Substitua pelo caminho da sua imagem
        >
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-orange-400 px-6 py-4 shadow-md sm:max-w-md rounded-[30px]">
                {children}
            </div>
        </div>
    );
}
