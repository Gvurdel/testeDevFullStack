import DangerButton from "@/Components/Button/DangerButton";
import PrimaryButton from "@/Components/Button/PrimaryButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import WarningButton from "@/Components/Button/WarningButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function UserIndex({ users, auth }) {
    const { delete: destroy, processing } = useForm();

    const handleDelete = (userId) => {
        if (window.confirm("Tem certeza que deseja apagar o usuário?"))
            destroy(route("users.destroy", userId));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Listar Usuários" />

            <div className="max-w-8xl mx-auto px-1 sm:px-0 lg:px-0">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-600 dark:text-gray-200">
                        Usuário
                    </h2>
                    <nav className="text-sm text-gray-500 dark:text-gray-400">
                        <Link href={route("dashboard")} className="hover:text-gray-700 dark:hover:text-gray-300">
                            Painel
                        </Link>
                        <span className="mx-1">/</span>
                        <span>Usuários</span>
                    </nav>
                </div>
            </div>

            <div className="py-4 mx-auto max-w-8xl px-1 sm:px-0 lg:px-0">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800 p-3 text-gray-900 dark:text-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg">Listar</h3>
                        <div className="flex space-x-4">
                            {/* Mostrar botão "Cadastrar" apenas se o usuário tiver permissão de editar */}
                            {auth.permissions.canEditUsers && (
                                <Link href={route("users.create")}>
                                    <SuccessButton className="ms-6">Cadastrar</SuccessButton>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Tabela de Registros */}
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
                                        Nome
                                    </th>
                                    <th className="hidden sm:table-cell px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
                                        E-mail
                                    </th>
                                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 tracking-wider">
                                        Ações
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                {users.data.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-2 text-sm text-gray-900 dark:text-gray-100">{user.id}</td>
                                        <td className="px-6 py-2 text-sm text-gray-900 dark:text-gray-100">{user.name}</td>
                                        <td className="hidden sm:table-cell px-6 py-2 text-sm text-gray-900 dark:text-gray-100">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-2 text-center text-gray-900 dark:text-gray-100">
                                            {/* Mostrar botão "Visualizar" apenas se o usuário tiver permissão */}
                                            {auth.permissions.canViewUsers && (
                                                <Link href={route("users.show", { id: user.id })}>
                                                    <PrimaryButton className="ms-1">Visualizar</PrimaryButton>
                                                </Link>
                                            )}

                                            {/* Mostrar botão "Editar" apenas se o usuário tiver permissão */}
                                            {auth.permissions.canEditUsers && (
                                                <Link href={route("users.edit", { id: user.id })}>
                                                    <WarningButton className="ms-1">Editar</WarningButton>
                                                </Link>
                                            )}

                                            {/* Mostrar botão "Apagar" apenas se o usuário tiver permissão */}
                                            {auth.permissions.canDeleteUsers && (
                                                <DangerButton
                                                    className="ms-1"
                                                    onClick={() => handleDelete(user.id)}
                                                    disabled={processing}
                                                >
                                                    Apagar
                                                </DangerButton>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
