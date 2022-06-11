cargar_productos();
d = new Date(); 
$("#fecha").html(d.yyyymmdd());
//estado_producto = 0;
jQuery(document).ready(function($){
    $(document).ready(function() {
        //$('#slcImpuesto').select2();
        $('#mdlProducto').modal({ backdrop: 'static', keyboard: false });
        $('.money').mask("#,##0.00", {reverse: true});
    });
});

$("#chkEstado").click(function(){
    
    if( $('#chkEstado').is(':checked') ) {
        estado_producto = 1;
    }else{
        estado_producto = 0;
    }
});

$("#mdlCerrar").click(function(){
    $("#mdlProducto").modal("hide");
    $("#txtNombreProducto").val("");
    $("#txtDescripcionProducto").val("");
    $("#txtPrecioProducto").val("");
    $("#chkEstado").prop( "checked", false );
    estado_producto = 0;
    $("#chkEstado").val("");
    $("#slcImpuesto").val("");
    $("#imgCargada").html("");
    $("#fileImg").val("");
});
function cargar_productos(){
    $.ajax({
        url : '../../php/productos/cargar_productos.php',
        data : {},
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            productos_data = "";
            for(var i = 0; i < json.length; i++){
                productos_img = "";
                if(json[i]["ruta_img"] == "" || json[i]["ruta_img"] == null){
                    productos_img = "<td class='text-center'></td>"
                }else{
                    productos_img = "<td class='text-center'><img src='"+json[i]["ruta_img"]+"' width='75px' height='75px'></td>"
                }
                productos_data +=
                    "<tr>"+
                        "<td class='centro'>"+
                            "<button type='button' class='btn btn-secondary rounded-circle' onclick='cargar_producto(\""+json[i]["id"]+"\")'>"+
                                "<i class='fa-solid fa-user-pen mg-button'></i>"+
                            "</button>"+
                        "</td>"+
                        "<td>"+json[i]["nombre"]+"</td>"+
                        "<td class='final'>L. <span class='money'>"+json[i]["precio"].toFixed(2)+"</span></td>"+
                        "<td>"+json[i]["descripcion"]+"</td>"+
                        "<td>"+json[i]["isv_name"]+"</td>"+
                        productos_img+
                    "</tr>";
            }
            $("#productosInfo").html(productos_data);
        },
        error : function(json) {
            Swal.fire(
                'Error',
                'Error en la conexión con el servidor',
                'error'
            );
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            /*Swal.fire(
                'Bien!',
                'Conexión éxitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
}

function cargar_producto(idp){
    cargar_impuestos();
    id_producto = idp;
    $.ajax({
        url : '/Restaurante/php/productos/cargar_producto.php',
        data : {
            idp: id_producto
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            $("#mdlProducto").modal("show");
            $("#txtNombreProducto").val(json["nombre"]);
            $("#txtDescripcionProducto").val(json["descripcion"]);
            $("#txtPrecioProducto").val(json["precio"]);
            if(json["estado"] == 1){
                $("#chkEstado").prop( "checked", true );
                estado_producto = 1;
            }else{
                $("#chkEstado").prop( "checked", false );
                estado_producto = 0;
            }
            $("#chkImagen").prop( "checked", false );
            $("#chkEstado").val(json["precio"]);
            $("#slcImpuesto").val(json["isv"]);
            if(json["ruta_imagen"] == "" || json["ruta_imagen"] == null){
                $('#imgCargada').html("");
            }else{
                $('#imgCargada').html('<img src="'+json["ruta_imagen"]+'" width="75px" height="75px"/>');
            }
            $("#btnBorrarProducto").show();
            $("#btnSaveProducto").show();
            $("#btnAgregarProducto").hide();
            $("#fileImg").val("");
            //id_producto = 0;
        },
        error : function(json) {
            Swal.fire(
                'Error',
                'Error en la conexión con el servidor',
                'error'
            );
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            /*Swal.fire(
                'Bien!',
                'Conexión éxitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
}

$("#btnNuevo").click(function(){
    $("#mdlProducto").modal("show");
    $("#btnBorrarProducto").hide();
    $("#btnSaveProducto").hide();
    $("#btnAgregarProducto").show();
    $("#imgCargada").html("");
    $("#fileImg").val("");
    cargar_impuestos();
});
$("#btnAgregarProducto").click(function(){

    nombre = $("#txtNombreProducto").val();
    descripcion = $("#txtDescripcionProducto").val();
    precio = $("#txtPrecioProducto").val();
    isv = $("#slcImpuesto").val();
    img = $("#fileImg").val();
    if( $('#chkEstado').is(':checked') ) {
        estado_producto = 1;
    }else{
        estado_producto = 0;
    }
    if( $('#chkImagen').is(':checked') ) {
        eliminar = 1;
    }else{
        eliminar = 0;
    }
    $.ajax({
        url : '../../php/productos/crear_productos.php',
        data : {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            isv: isv,
            estado: estado_producto,
            imagen: img,
            eliminar: eliminar
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            id_producto = json["idp"];
            imagen_nueva = $("#fileImg").val();
            if(imagen_nueva != ""){
                add_imagen_nuevo(id_producto);
            }
            Swal.fire(
                'Correcto',
                'Producto creado con éxito',
                'success'
            );
            $("#mdlProducto").modal("hide");
            $("#txtNombreProducto").val("");
            $("#txtDescripcionProducto").val("");
            $("#txtPrecioProducto").val("");
            $("#chkEstado").prop( "checked", false );
            estado_producto = 0;
            id_producto = 0;
            $("#chkEstado").val("");
            $("#slcImpuesto").val("");
            $("#fileImg").val("");
            cargar_productos();
        },
        error : function(json) {
            Swal.fire(
                'Error',
                'Error en la conexión con el servidor',
                'error'
            );
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            /*Swal.fire(
                'Bien!',
                'Conexión éxitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
});

$("#btnSaveProducto").click(function(){
    Swal.fire({
        title: 'Está seguro?',
        text: "Los cambios no serán reversibles",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Guardar'
        }).then((result) => {
        if (result.isConfirmed) {
            imagen_nueva = "";
            //guardar_producto();
            //alert(imagen_nueva);
            var imagen_nueva = document.getElementById("fileImg")
            if(imagen_nueva.files.length == 0){
                //alert("si");
                ruta="";
                guardar_producto(ruta);
            }else{
                //alert("no");
                add_imagen();
            }
            
            usr_user = "";
            /*Swal.fire(
            'Actualizado!',
            'Este producto se ha actualizado',
            'success'
            )*/
        }
    });
});

$("#btnBorrarProducto").click(function(){
    Swal.fire({
        title: 'Está seguro?',
        text: "Este producto no podrá recuperarse",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar'
        }).then((result) => {
        if (result.isConfirmed) {
            eliminar_producto();
            usr_user = "";
            Swal.fire(
            'Borrado!',
            'Este producto ha sido borrado',
            'success'
            )
        }
    });
});

function cargar_impuestos(){
    $.ajax({
        url : '../../php/isv/cargar_isv.php',
        data : {},
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            var datos_isv = "<option value='0'>Seleccione</option>";
            //$('#slcImpuesto').select2()
            for(var i = 0; i < json.length; i++){
                datos_isv += "<option value='"+json[i]["id"]+"' selected='selected'>"+json[i]["nombre"]+"</option>";
            }
            //$('select').select2();
            $("#slcImpuesto").html(datos_isv);
            $("#slcImpuesto").val(0);
        },
        error : function(json) {
            Swal.fire(
                'Error',
                'Error en la conexión con el servidor',
                'error'
            );
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            /*Swal.fire(
                'Bien!',
                'Conexión éxitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
}

function eliminar_producto(){
    $.ajax({
        url : '../../php/productos/borrar_productos.php',
        data : {
            idp: id_producto
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            $("#mdlProducto").modal("hide");
            $("#txtNombreProducto").val(json["id"]);
            $("#txtDescripcionProducto").val(json["descripcion"]);
            $("#txtPrecioProducto").val(json["precio"]);
            if(json["estado"] == 1){
                $("#chkEstado").prop( "checked", true );
                estado_producto = 1;
            }else{
                $("#chkEstado").prop( "checked", false );
                estado_producto = 0;
            }
            $("#chkEstado").val(json["precio"]);
            $("#slcImpuesto").val(json["estado"]);
            $("#btnBorrarProducto").show();
            $("#btnSaveProducto").show();
            $("#btnAgregarProducto").hide();
            id_producto = 0;
            
            cargar_productos();
        },
        error : function(json) {
            Swal.fire(
                'Error',
                'Error en la conexión con el servidor',
                'error'
            );
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            /*Swal.fire(
                'Bien!',
                'Conexión éxitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
}

/*$("#slcImpuesto").change(function(){
    alert ($("#slcImpuesto").val());
});*/

function add_imagen(){
    var formData = new FormData($("#formProductos")[0]);
    var archivo = $("#fileImg")[0].files[0];
    formData.append('file',archivo);
    console.log(formData);
    ruta = "";
    $.ajax(
    {
        url: '../../php/productos/add_img.php',
        dataType: "json",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data)
        {
            ruta = data["ruta"];
            guardar_producto(ruta);
            //alert(ruta);
        }
    });

}
function add_imagen_nuevo(id_producto){
    //alert(id_producto);
    var formData = new FormData($("#formProductos")[0]);
    var archivo = $("#fileImg")[0].files[0];
    formData.append('file',archivo);
    console.log(formData);
    ruta = "ruta";
    $.ajax(
    {
        url: '../../php/productos/add_img.php',
        dataType: "json",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data)
        {
            ruta = data["ruta"];
            $.ajax({
                url : '../../php/productos/editar_productos.php',
                data : {
                    nombre: nombre,
                    descripcion: descripcion,
                    precio: precio,
                    isv: isv,
                    estado: estado_producto,
                    imagen: img,
                    idp: id_producto,
                    ruta_img: ruta
                },
                type : 'POST',
                dataType : 'json',
        
                success : function(json) {
                    
                    /*Swal.fire(
                        'Correcto',
                        'Producto editado con éxito',
                        'success'
                    );
                    $("#mdlProducto").modal("hide");
                    $("#txtNombreProducto").val("");
                    $("#txtDescripcionProducto").val("");
                    $("#txtPrecioProducto").val("");
                    $("#chkEstado").prop( "checked", false );
                    estado_producto = 0;
                    $("#chkEstado").val("");
                    $("#slcImpuesto").val("");
                    cargar_productos();*/
                },
                error : function(json) {
                    Swal.fire(
                        'Error',
                        'Error en la conexión con el servidor',
                        'error'
                    );
                },
        
                // código a ejecutar sin importar si la petición falló o no
                complete : function(xhr, status) {
                    /*Swal.fire(
                        'Bien!',
                        'Conexión éxitosa',
                        'success'
                    )
                    //alert('Petición realizada');*/
                }
            });
            //alert(ruta);
        }
    });

}

function guardar_producto(ruta){
    nombre = $("#txtNombreProducto").val();
    descripcion = $("#txtDescripcionProducto").val();
    precio = $("#txtPrecioProducto").val();
    isv = $("#slcImpuesto").val();
    //alert(isv);
    img = "";
    //alert(id_producto);
    if( $('#chkEstado').is(':checked') ) {
        estado_producto = 1;
    }else{
        estado_producto = 0;
    }
    if( $('#chkImagen').is(':checked') ) {
        eliminar = 1;
    }else{
        eliminar = 0;
    }
    //alert(id_producto +" "+ estado_producto);
    //add_imagen();
    //alert(ruta);
    //return;
    $.ajax({
        url : '../../php/productos/editar_productos.php',
        data : {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            isv: isv,
            estado: estado_producto,
            imagen: img,
            idp: id_producto,
            ruta_img: ruta,
            eliminar: eliminar
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            
            Swal.fire(
                'Correcto',
                'Producto editado con éxito',
                'success'
            );
            $("#mdlProducto").modal("hide");
            $("#txtNombreProducto").val("");
            $("#txtDescripcionProducto").val("");
            $("#txtPrecioProducto").val("");
            $("#chkEstado").prop( "checked", false );
            estado_producto = 0;
            $("#chkEstado").val("");
            $("#slcImpuesto").val("");
            $("#fileImg").val("");
            cargar_productos();
        },
        error : function(json) {
            Swal.fire(
                'Error',
                'Error en la conexión con el servidor',
                'error'
            );
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            /*Swal.fire(
                'Bien!',
                'Conexión éxitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
}
