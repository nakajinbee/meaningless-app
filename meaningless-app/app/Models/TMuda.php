<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TMuda extends Model
{
    protected $table = 't_muda';
    protected $primaryKey = 'id';
    
    protected $fillable = ['muda_text','waste_time','create_user', 'update_user', 'create_at', 'update_at'];
    use HasFactory;
}
