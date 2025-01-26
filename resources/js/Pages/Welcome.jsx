import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth }) {
    const currentYear = new Date().getFullYear();
    const appName = import.meta.env.VITE_APP_NAME || "Senac Learning";

    return (
        <>
            <Head title="Home" />

            <div className="flex min-h-screen flex-col items-center bg-gray-800 bg-cover bg-center pt-6 sm:justify-center sm:pt-0items-center text-white"
                style={{ backgroundImage: "url('/images/img10.webp')" }} // Substitua pelo caminho da sua imagem
            >
                
                <header className="text-center mb-8">
                    {/* Adicionando o Logo */}
                    <img
                        src="/images/logo10.jpeg" // Substitua pelo caminho correto do logo
                        alt="Logo Senac Learning"
                        className="w-80 h-50 mx-auto mb-10 rounded-[30px]" // Define o tamanho do logo
                    />

                    {/* Título e descrição */}
                    <h1
                        className="text-6xl font-bold mb-10 text-white shadow-lg"
                        style={{
                        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)", // Sombra escura para destacar no fundo branco
                    }}
                        >
                        O conhecimento é infinito!
                    </h1>


                    <p className="text-lg"
                    style={{
                        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)", // Sombra escura para destacar no fundo branco
                    }}
                    >
                        Com os serviços do Senac Learning você terá conteúdos novos a cada mês para
                        disponibilizar e capacitar seus colaboradores.
                    </p>
                </header>

                <div className="flex justify-center space-x-4">
                    {/* Verifica se o usuário está autenticado */}
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-2xl bg-orange-500 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded transition duration-300"
                        >
                            Painel de Controle
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-2xl bg-orange-500 hover:bg-orange-400 text-white font-semibold py-4 px-10 rounded transition duration-300"
                            >
                                Acessar
                            </Link>

                            <Link
                                href={route("register")}
                                className="text-2xl bg-blue-700 hover:bg-blue-500 text-white font-semibold py-4 px-10 rounded transition duration-300"
                            >
                                Cadastrar
                            </Link>
                        </>
                    )}
                </div>

                <section className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                    {/* Descrição do primeiro recurso */}
                    <div className="bg-white text-black  p-6 rounded-lg shadow-lg w-72 text-center">
                        <h3 className="font-bold text-xl mb-4">Soluções para sua empresa</h3>
                        <p>
                            Mantenha os colaboradores engajados e motivados, tornando-os protagonistas
                            de sua jornada de desenvolvimento.
                        </p>
                    </div>

                    {/* Descrição do segundo recurso */}
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-72 text-center">
                        <h3 className="font-bold text-xl mb-4">Trilhas de aprendizagem</h3>
                        <p>
                            O Portal já vem com diversas Trilhas de aprendizagem para desenvolvimento
                            das soft skills, em formato leve, considerando as premissas do
                            microlearning.
                        </p>
                    </div>

                    {/* Descrição do terceiro recurso */}
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-72 text-center">
                        <h3 className="font-bold text-xl mb-4">Seja nosso cliente</h3>
                        <p>
                            Clientes do Senac Learning contam ainda com facilidades para dispor de
                            espaços modernos para gravação de conteúdos próprios (Lab).
                        </p>
                    </div>
                </section>

                {/* Seção do rodapé */}
                <footer className="mt-16 text-center">
                    <p>
                        @ {currentYear} {appName}. Todos os direitos reservados.
                    </p>
                </footer>
            </div>
        </>
    );
}
