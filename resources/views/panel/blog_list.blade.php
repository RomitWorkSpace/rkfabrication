@extends('panel.admin')
@section('content')

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>DataTables</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Blog List</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">

                    <!-- /.card -->

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Blog List</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Title</th>
                                        <th>Image</th>
                                        <th>Created at</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                      $sr = 1;
                                    @endphp
                                    @foreach($data as $list )
                                    
                                    <tr>
                                        <td>{{$sr++}}</td>
                                        <td>{{$list->title}}
                                        </td>
                                        <td><img src="{{asset('storage/app/'.$list->image)}}" width="50"></td>
                                        <td>{{$list->created_at}}</td>
                                        <td>
                                            <a href="{{url('panel/blog/edit/'.$list->id)}}" class="btn btn-success">Edit</a>
                                            <a href="{{url('panel/blog/delete/'.$list->id)}}" class="btn btn-danger">Delete</a>
                                        </td>
                                    </tr>
                                    @endforeach
                                       </tbody>

                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</div>
@endsection