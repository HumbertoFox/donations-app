<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Telephone extends Model
{
    protected $fillable = ['phone', 'contacto', 'contactoold'];
    
    protected $primaryKey = 'phone';
    
    public $incrementing = false;
    protected $keyType = 'string';
}