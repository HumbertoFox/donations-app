@extends('layouts.menudashboard')
@section('content')
    <div class="w-full flex">
        @include('components.donor-form')
        @include('components.donation-form')
    </div>
@endsection