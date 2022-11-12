<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TMuda extends Model
{
    protected $table = 't_muda';
    protected $primaryKey = 'id';
    
    protected $fillable = ['muda_text','waste_time','create_user', 'update_user', 'create_at', 'update_at'];
    use HasFactory;

    public function getSummary()
    {
        // $this::select('muda_text','waste_time')
        $summary = $this::select('waste_time')
            ->selectRaw('char_length(muda_text) as muda_summary')
            // ->get();
            ->first();
        return $summary;
    }


    public function getMudaList()
    {
        return $this::select('id','waste_time','created_at','updated_at')
                    ->selectRaw('char_length(muda_text) as muda_text')
                    ->get();
        // ->where('create_user',=,);
    }

    public function updateData($request){
        $result = $this::where('id', '=', $request->id)->update([
            'muda_text' => $request->mudaText,
            'waste_time' => $request->mudaTime,
        ]);
        
        return $result;
    }
}
