<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cpf extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'cpf',
        'name',
        'birthdate',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'cpf_id');
    }

    public function cnh(): BelongsTo
    {
        return $this->belongsTo(Cnh::class, 'cpf_id');
    }

    public function helper(): BelongsTo
    {
        return $this->belongsTo(Helper::class, 'cpf_id');
    }
}