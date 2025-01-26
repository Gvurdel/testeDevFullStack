import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

               {/* Adicionando o Logo */}
                <img
                        src="/images/logo3.jpeg" // Substitua pelo caminho correto do logo
                        alt="Logo Senac Learning"
                        className="w-14 h-13 mx-auto mb-4" // Define o tamanho do logo
                    />


            <div className="mb-6 text-center text-white">
            Esqueceu sua senha? Sem problemas. Basta nos informar seu e-mail
                endereço e enviaremos a você por e-mail um link de redefinição de senha que irá
                permitir que você escolha um novo.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                    placeholder="DIGITE SEU E-MAIL"
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="mt-6 flex flex-col items-center">
                    
                    <PrimaryButton className="w-auto bg-black text-white-500 py-3 rounded-full hover:bg-gray-100 transition duration-300 font-semibold" disabled={processing}>
                        RESETE SUA SENHA
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
