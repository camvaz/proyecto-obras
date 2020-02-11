<?php

namespace App\Http\Controllers;

use App\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Jenssegers\Mongodb\Eloquent\Model;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        //echo 'Am i working?';
        return File::all();
        // $file = File::get();
        // echo json_encode($file);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // $file = new File();
        // $file->nombre = $request->input('file');
        // //$name = $request->input('name');
        // //$file->nombre = $request->get('nombre');
        // //$file->fecha = $request->get('fecha');    
        // //$file->path = $request->get('path');      
        // $file->save();
        // echo json_encode($file);



        // Storage::disk('local')->put($file, 'Contents');
        // echo asset('storage/file.txt');




        // $file = File::create($request->all());
        // return response()->json($file, 201);


        $file = new File();
        $file->nombre = $request->get('nombre');
        $file->fecha = $request->get('fecha');    
        $file->path = $request->get('fileToUpload');     
        $file->save();
        //Storage::disk('local')->put($file->path, 'Contents');
        echo json_encode($file);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\File  $file
     * @return \Illuminate\Http\Response
     */
    public function show(File $file)
    {
        //
        return $file;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\File  $file
     * @return \Illuminate\Http\Response
     */
    public function edit(File $file)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\File  $file
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, File $file)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\File  $file
     * @return \Illuminate\Http\Response
     */
    public function destroy(File $file)
    {
        //
    }
}
