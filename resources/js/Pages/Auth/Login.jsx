import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Login" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form
                onSubmit={submit}
                className="bg-orange-400 p-7 rounded-[30px] shadow-md max-w-md mx-auto"
            >
                    <img
                            src="/images/logo10.jpeg" // Substitua pelo caminho correto do logo
                            alt="Logo Senac Learning"
                            className="w-80 h-50 rounded-[30px] mx-auto mb-6" // Define o tamanho do logo
                        />

                <h1 className="text-3xl text-center text-white font-bold mb-6">
                    FAÇA O SEU LOGIN
                </h1>

                {/* Campo de Email */}
                <div>
                    <InputLabel className="text-white" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full p-3 bg-white focus:ring-2 rounded-[30px] focus:ring-blue-500"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="EMAIL"
                    />

                    <InputError message={errors.email} className="mt-2 text-white" />
                </div>

                {/* Campo de Senha */}
                <div className="mt-4">
                    <InputLabel className="text-white" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full p-3 bg-white rounded-[30px] focus:ring-2 focus:ring-blue-500"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                        placeholder="SENHA"
                    />

                    <InputError message={errors.password} className="mt-2 text-white" />
                </div>

                {/* Checkbox */}
                <div className="mt-4 block">
                    <label className="flex items-center text-white">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData("remember", e.target.checked)}
                        />
                        <span className="ms-2 text-sm">Remember me</span>
                    </label>
                </div>

                {/* Botão e link */}
                <div className="mt-6 flex flex-col items-center">
                    <PrimaryButton
                        className="w-auto bg-black text-white-500 py-3 rounded-[30px] hover:bg-gray-100 transition duration-300 font-semibold"
                        disabled={processing}
                    >
                        Acesse agora
                    </PrimaryButton>

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="mt-4 text-sm text-white hover:text-gray-300"
                        >
                            Esqueci meu login ou senha
                        </Link>
                    )}
                </div>
            </form>
            

        </GuestLayout>
    );

}
