<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cnh extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'cnh',
        'cpf_id'
    ];

    public function cpf(): BelongsTo
    {
        return $this->belongsTo(Cpf::class);
    }

    public function driver(): BelongsTo
    {
        return $this->belongsTo(Driver::class, 'cnh_id');
    }
}