<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {

        $users = User::paginate(40);

        return Inertia::render('Users/UserIndex', ['users' => $users]);
    }

    public function show(User $user): Response
    {
        // dd($user);
        return Inertia::render('Users/UserShow', ['user' => $user]);
    }

    public function create(): Response
    {
        return Inertia::render('Users/UserCreate');
    }
}
