<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TMuda;
use Exception;

class MudaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $muda = new TMuda();
        $mudaList = $muda->getMudaList();
        return $mudaList;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $muda = new TMuda();
        $muda->muda_text = $request->mudaText;
        $muda->waste_time = $request->mudaTime;
        $muda->save();
        return response()->json(["登録しました。"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $muda = new TMuda();
        $mudaData = $muda::find($id);
        return $mudaData;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try{
            $muda = new TMuda();
            $result = $muda->updateData($request);
            return response()->json(["更新しました。"]);

        } catch(Exception $e){
            return "失敗";
            return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
