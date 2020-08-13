@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                        Dash Page
                    You are logged in!
                    {{-- <div id="client2">client2</div> --}}
                    {{-- <div id="client3">client 3</div> --}}
                    <div id="client">client for dash copn</div>
                    
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

