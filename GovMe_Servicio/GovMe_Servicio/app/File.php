<?php

namespace App;

//use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;

class File extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'files';

    protected $fillable = [
        'id','nombre','fecha','path','fileToUpload',
    ];
}
