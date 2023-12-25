<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class contact extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $contact = [
        'id',
        'first_name',
        'last_name',
        'email',
        'phone',
        'message'
    ];
}