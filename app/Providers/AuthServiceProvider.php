<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        // Gate para visualizar usuários
        Gate::define('view-users', function ($user) {
            return $user->acess_level >= 1; // Leitor (3), Moderador (2), Administrador (1)
        });

        // Gate para editar usuários
        Gate::define('edit-users', function ($user) {
            return $user->acess_level <= 2; // Moderador (2) e Administrador (1)
        });

        // Gate para excluir usuários
        Gate::define('delete-users', function ($user) {
            return $user->acess_level === 1; // Apenas Administrador
        });
    }
}
