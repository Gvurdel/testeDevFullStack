import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>

                   {/* Adicionando o Logo */}
                    <img
                        src="/images/logo3.jpeg" // Substitua pelo caminho correto do logo
                        alt="Logo Senac Learning"
                        className="w-14 h-13 mx-auto mb-4" // Define o tamanho do logo
                    />

                <div>
                    <InputLabel htmlFor="Nome" value="Nome" className="text-white" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        style={{ borderRadius: '30px' }}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="NOME"
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="Email" value="Email" className="text-white"/>

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        style={{ borderRadius: '30px' }}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="EMAIL"
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="Senha" value="Senha" className="text-white" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        style={{ borderRadius: '30px' }}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="SENHA"
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="Confirme sua Senha"
                        value="Confirme sua Senha"
                        className="text-white"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        style={{ borderRadius: '30px' }}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        placeholder="CONFIRME SUA SENHA"
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-6 flex flex-col items-center">

                    <PrimaryButton className="w-auto bg-black text-white-500 py-3 hover:bg-gray-100 transition duration-300 font-semibold" disabled={processing}
                        style={{ borderRadius: '30px' }}
                    >
                            CADASTRE SE
                        </PrimaryButton><br></br>

                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Já é cadastrado?
                    </Link>

                </div>
            </form>
        </GuestLayout>
    );
}
