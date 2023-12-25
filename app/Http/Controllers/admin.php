<?php

namespace App\Http\Controllers;

use App\Models\contact;
use App\Models\product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class admin extends Controller
{
    public function __invoke(Request $request)
    {
        //
    }

    public function contact_submit(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'email' => 'email|required',
            'phone' => 'required',
            'message' => 'required'
           ]);
       
           $contact = new contact;
           $contact->first_name = $request->input('first_name');
           $contact->last_name = $request->input('last_name');
           $contact->email = $request->input('email');
           $contact->phone = $request->input('phone');
           $contact->message = $request->input('message');
           
       
           $contact->save();
           return response()->json([
               'status' => 200,
               'message' => 'Message has received successfully! Thank You',
           ]);
    }

    public function insert_product(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'name' => 'required',
            'slug' => 'required',
            'image' => 'required|mimes:png,jpg,jpeg',
            'description' => 'required'
           ]);

           $product = new product;
           $product->title = $request->input('title');
           $product->name = $request->input('name');
           $product->slug = $request->input('slug');
           $product->description = $request->input('description');

           if ($request->hasFile('image')) {
            $filepath = $request->file('image')->store('public');
            $product->image = $filepath;
            }

            $product->save();
            return redirect()->back()->with('status','Product Added Successfully!');
    }

    public function product_list()
    {
        $data = DB::table('products')->get();
        return view('panel.product_list', ['data' => $data]);
    }

    public function edit_product($id)
    {
        $data = DB::table('products')->where('id',$id)->get();
        return view('panel.edit_product', ['data' => $data]);
    }

    public function contact_list()
    {
        $data = DB::table('contacts')->get();
        return view('panel.contact_list', ['data' => $data]);
    }

    public function get_products()
    {
        $products = DB::table('products')->get();
        return response()->json(['status' => 200, 'products' => $products]);
    }

    public function product_data($slug)
    {
        $product = DB::table('products')->where('slug',$slug)->get();
        return response()->json(['status' => 200, 'product' => $product]);
    }

}