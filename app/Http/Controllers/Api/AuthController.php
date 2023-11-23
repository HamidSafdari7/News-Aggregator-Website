<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\RegisterRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class AuthController extends Controller
{
    public function login(LoginRequest $request){

        $credentials = $request->validated();

        if(!Auth::attempt($credentials)){

            return response([
                'message' => 'Something Wrong with credentials!!'
            ],422);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user','token'));
    }

    public function register(RegisterRequest $request){

        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user','token'));

    }

    public function logout(Request $request){

        $user = $request->user();

        $user->currentAccessToken()->delete();

        return response('',204);
    }
    

    public function updateUser(Request $request, $id) {
        $user = User::find($id);
    
        if (!$user) {
            return response(['message' => 'User not found'], 404);
        }
    
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email'
        ]);
    
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->save();
    
        return response(['message' => 'User updated successfully', 'user' => $user]);
    }
}
