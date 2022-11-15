<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name'=>'admin',
                'email'=> 'admin@example.com' ,
                'email_verified_at'=> now(),
                'password'=> Hash::make('123456789'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name'=>'admintest1',
                'email'=> 'admintest1@example.com' ,
                'email_verified_at'=> now(),
                'password'=> Hash::make('123456789'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name'=>'admintest2',
                'email'=> 'admintest2@example.com' ,
                'email_verified_at'=> now(),
                'password'=> Hash::make('123456789'),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]
        );
    }
}
