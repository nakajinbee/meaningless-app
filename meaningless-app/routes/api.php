<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MudaController;
use App\Http\Controllers\Api\MudaSummaryController;
use App\Http\Controllers\Api\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LoginController::class, 'logout']);

Route::middleware('auth:sanctum')->get('user', function (Request $request) {
    Route::apiResource('/muda', MudaController::class);
    Route::apiResource('/muda-summary', MudaSummaryController::class); 
    return $request->user();
});



