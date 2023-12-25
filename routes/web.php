<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{any?}', function () {
    return view('welcome');
});
Route::get('/product/{any?}', function () {
    return view('welcome');
});

Route::get('/panel/dashboard', function () {
    return view('panel.index');
});
Route::get('/panel/add-product', function () {
    return view('panel.add_product');
});
Route::post('/panel/new-product', [admin::class, 'insert_product']);
Route::get('/panel/product-list', [admin::class, 'product_list']);
Route::get('/panel/product/edit/{id}', [admin::class, 'edit_product']);
Route::get('/panel/product/delete/{id}', [admin::class, 'delete_product']);


Route::get('/panel/add-blog', function () {
    return view('panel.add_blog');
});
Route::post('/panel/new-blog', [admin::class, 'insert_blog']);
Route::get('/panel/blog-list', [admin::class, 'blog_list']);
Route::get('/panel/blog/edit/{id}', [admin::class, 'edit_blog']);
Route::get('/panel/blog/delete/{id}', [admin::class, 'delete_blog']);

Route::get('/panel/contact-list', [admin::class, 'contact_list']);
