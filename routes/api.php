<?php

use App\Http\Controllers\admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/submit-detail', [admin::class,'contact_submit']);
Route::get('/products', [admin::class,'get_products']);
Route::get('/fetchproduct/{slug}', [admin::class,'product_data']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
