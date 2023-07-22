<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenuRequest;
use App\Models\Menu;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MenuController extends Controller
{
    public function index() 
    {
        $menus = Menu::all();
        return response()->json($menus);
    }

    // public function store(Request $request) 
    // {
    //     $request->validate([
    //         'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
    //     ]);

    //     $imageData = $request->file('image');
    //     $imageName = uniqid() . '_' . time() . '.' . $imageData->getClientOriginalExtension();
    //     $imageData->move(public_path('images'), $imageName);

    //     $name = $request->input('name');
    //     $category = $request->input('category');
    //     $price = $request->input('price');

    //     $menu = new Menu();
    //     $menu->image = $imageName;
    //     $menu->name = $name;
    //     $menu->category = $category;
    //     $menu->price = $price;

    //     $menu->save();

    //     return response()->json(['message' => 'Data Uploaded']);
    // }

    // public function store(MenuRequest $request)
    // {
    //     try {
    //         $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
     
    //         // Create Product
    //         Menu::create([
    //             'name' => $request->name,
    //             'image' => $imageName,
    //             'price' => $request->price,
    //             'category' => $request->category
    //         ]);
     
    //         // Save Image in Storage folder
    //         Storage::disk('public')->put($imageName, file_get_contents($request->image));
     
    //         // Return Json Response
    //         return response()->json([
    //             'message' => "Product successfully created."
    //         ],200);
    //     } catch (\Exception $e) {
    //         // Return Json Response
    //         return response()->json([
    //             'message' => "Something went really wrong!"
    //         ],500);
    //     }
    // }

    public function store(Request $request) {
        if($request->has('image')) {
            $image = $request->image;
            
           
            $name = time(). '.' .$image->getClientOriginalExtension();
            $path = public_path('upload');
            $image->move($path, $name);

            Menu::create([
                'name' => $request->name,
                'image' => 'upload/' . $name,
                'price' => $request->price,
                'category' => $request->category
            ]);

            return response()->json(['data' => '', 'message' => 'Image uploaded' , 'status' => true], 200);

        }
    }

    // public function update(Request $request, $id) 
    // {
    //     $menu = Menu::find($id);
    //     $menu->name = $request->input('name');
    //     $menu->price = $request->input('price');
    //     $menu->category = $request->input('category');

    //     $menu->save();
    //     return response()->json(['message'=> 'Updated successfully', 'menu' => $menu]);
    // }


    public function show($id) 
    {
        $menu = Menu::find($id);
        if(!empty($menu)) {
            return response()->json($menu);
        } else 
        {
            return response()->json([
                "message"=> "Menu not found"
            ], 404);
        }
    }

    // public function update(Request $request,$id) 
    // {
    //     $menu = Menu::findOrFail($id);

    //     $menu->name = $request->input('name');
    //     $menu->category = $request->input('category');
    //     $menu->price = $request->input('price');

    //     if ($request->hasFile('image'))
    //     {
    //         $request->validate([
    //             'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // adjust max size as needed
    //         ]);

    //         $imageData = $request->file('image');

    //         $imageName = uniqid() . '_' . time() . '.' . $imageData->getClientOriginalExtension();

    //         $imageData->move(public_path('images'), $imageName);

    //         if ($menu->image) 
    //         {
    //             $oldImagePath = public_path('images/') . $menu->image;
    //             if(file_exists($oldImagePath))
    //             {
    //                 unlink($oldImagePath);
    //             }
    //         }

    //         $menu->image = $imageName;
    //         $menu->save();
    //     }

    //     return response()->json(['message'=> 'Updated successfully', 'menu' => $menu]);
    // }
    public function update(Request $request, $id) {
        // Validate the request data
        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'price' => 'required',
        ]);
    
        $menu = Menu::find($id);
    
        if (!$menu) {
            return response()->json(['message' => 'Product Not Found.'], 404);
        }
    
        // Log the request data to check the values being sent from the frontend
        Log::info('Request data: ' . json_encode($request->all()));
    
        // Update the menu fields
        $menu->name = $request->input('name');
        $menu->category = $request->input('category');
        $menu->price = $request->input('price');
    
        if ($request->has('image')) {
            $image = $request->image;
            $name = time() . '.' . $image->getClientOriginalExtension();
            $path = public_path('upload');
            $image->move($path, $name);
    
            if ($menu->image) {
                $oldImagePath = public_path('upload/') . $menu->image;
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }
            }
    
            $menu->image = 'upload/' . $name;
        }
    
        $menu->save();
    
        return response()->json(['message' => 'Updated successfully', 'menu' => $menu]);
    }
    

    public function delete($id)
    {
        $menu = Menu::findOrFail($id);

        if ($menu->image)
        {
            $imagePath = public_path('images/') . $menu->image;
            if(file_exists($imagePath))
            {
                unlink($imagePath);
            }
        }
        $menu->delete();

        return response()->json(['message'=> "product deleted"]);
    }
}
