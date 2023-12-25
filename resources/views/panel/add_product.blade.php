@extends('panel.admin')
@section('content')
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Add New Product</h1>
        </div>
        <a href="{{asset('admin/dashboard')}}">
        <div class="col-sm-6">
          <button class="btn btn-info">Back</button>
        </div>
        </a>

      </div>
    </div><!-- /.container-fluid -->
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card card-outline card-info">
          <div class="card-header">
            <h3 class="card-title">
              Bootstrap WYSIHTML5
              <small>Simple and fast</small>
            </h3>
            <!-- tools box -->
            <!-- /. tools -->
          </div>
          @if(session('status'))
          <h6 class="alert alert-success">{{session('status')}}</h6>
          @endif

          <!-- /.card-header -->
          <form action="{{url('panel/new-product')}}" enctype="multipart/form-data" method="post">
            @csrf
            <div class="card-body">
              <div class="mb-3">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" name="title" class="form-control" id="title" placeholder="Enter Title">
                  <span class="text text-danger">@error('title'){{$message}}@enderror</span>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <div class="form-group">
                  <label for="name">Product Name</label>
                  <input type="text" name="name" class="form-control" id="name" placeholder="Enter Product Name">
                  <span class="text text-danger">@error('name'){{$message}}@enderror</span>
                </div>
              </div>
            </div>
            
            <div class="card-body">
              <div class="mb-3">
                <div class="form-group">
                  <label for="slug">Slug</label>
                  <input type="text" name="slug" class="form-control" id="slug" placeholder="Enter-slug">
                  <span class="text text-danger">@error('slug'){{$message}}@enderror</span>
                </div>
              </div>
            </div>
            
            <div class="card-body">
              <div class="mb-3">
                <div class="form-group">
                  <label for="image">Image</label>
                  <input type="file" name="image" class="form-control" id="image">
                  <span class="text text-danger">@error('image'){{$message}}@enderror</span>
                </div>
              </div>
            </div>
            
          
          
          <div class="card-body">
             <div class="mb-3">
                  <label for="exampleInputEmail1">Description</label>
                <textarea class="textarea" name="description" placeholder="Place some text here" id="summernote"></textarea>
                <span class="text text-danger">@error('description'){{$message}}@enderror</span>
              </div>
            </div>

            <div class="card-body pad">
              
              <input type="submit" value="Submit" class="btn btn-success btn-block" style="">
          </form>
        </div>
      </div>
    </div>
    <!-- /.col-->
</div>
<!-- ./row -->
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

@endsection