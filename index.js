var btncargamasiva = document.getElementById('btncargamasiva')
    btnpeliculas = document.getElementById("btnpeliculas")
    btnclientes = document.getElementById("btnclientes")
    btnactores= document.getElementById("btnactores")
    btncategorias= document.getElementById("btncategorias")
    btnestructuras= document.getElementById("btnestructuras")
    btnblockchain = document.getElementById("btnblockchain")
    btnlogout= document.getElementById("btnlogout")
    fctlogin = document.getElementById('fctlogin')

/** LISTA SIMPLE USUARIOS */
var loguser = null

class Cliente{
    constructor(dpi,nombre_completo,nombre_usuario,correo,contrasenia,telefono){
        this.dpi = dpi
        this.nombre_completo = nombre_completo
        this.nombre_usuario = nombre_usuario
        this.correo = correo
        this.contrasenia = contrasenia
        this.telefono = telefono
    }
}

class listaClientes{
    constructor(){
        this.inicio = null
        this.final = null
    }
    agregarCliente(dpi,nombre_completo,nombre_usuario,correo,contrasenia,telefono){
        let nuevo = new Cliente(dpi,nombre_completo,nombre_usuario,correo,contrasenia,telefono)
        if(this.inicio==null){
            this.inicio = nuevo
            this.final = nuevo
        }else{
            this.final.siguiente =  nuevo
            this.final = nuevo 
        }
    }
    imprimirclientes(){
        let temp = this.inicio
        while (temp!=null){
            console.log(temp.nombre_completo)
            temp = temp.siguiente
        }
    }

    login(usuario,contrasenia){
        let temp = this.inicio
        while(temp!=null){
            if((String(temp.nombre_usuario).toLowerCase()==String(usuario).toLowerCase()) && (temp.contrasenia == contrasenia)){
                return temp
            }
            temp = temp.siguiente
        }return null
    }

}

var listaclientes = new listaClientes()
listaclientes.agregarCliente("2354168452525","WIlfred Perez","EDD", "null","123","+502 (123) 123-4567")

/**Funciones * */
function login(){
    let usuario = document.getElementById('txtusername').value;
    let contrasenia = document.getElementById('txtpassword').value;
    console.log(usuario,contrasenia)
    loguser = listaclientes.login(usuario,contrasenia)
    let check = document.getElementById('form1Example3')
    if(loguser!=null){
        if(document.getElementById('form1Example3').checked){
            document.getElementById('vistaadmin').style.display="block"
            document.getElementById('vistalogin').style.display="none"
        }else{
            alert('ingreso como usuario')
        }
        
    }else{
        alert("Credenciales ivalidas, intente de nuevo")
    }
}

/*********************** Mostrar ocultar elementos  ************************* */
function mostrar_carga_masiva(){
    document.getElementById('vistacargamasiva').style.display="block";
    document.getElementById('vistaestructuras').style.display="none";

}
function mostrar_estructuras(){
    document.getElementById('vistacargamasiva').style.display="none";
    document.getElementById('vistaestructuras').style.display="block";

}

function logout(){
    document.getElementById('vistaadmin').style.display="none"
    alert('Sesion finalizada')
    document.getElementById('vistalogin').style.display="block"
    loguser= null
}

function abrirArchivoUsuarios (event) {
    var archivo = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var contenido = reader.result;
        json_usuarios = JSON.parse(contenido)
        console.log(json_usuarios)
        json_usuarios.forEach(usuario => {
            /** 
             * usuario.dpi
             * usuario.nombre_completo
             * usuario.nombre_usuario
             * usuario.correo
             * usuario.contrasenia
             * usuario.telefono    
             */
            
        });
    };
    //console.log(listaUsuarios.mostrarUsuarios())
    alert("Se ha completado la carga de Clientes")
    reader.readAsText(archivo.files[0])
    };

function abrirArchivoPeliculas (event) {
        var archivo = event.target;
        var reader = new FileReader();
        reader.onload = function () {
            var contenido = reader.result;
            json_peliculas = JSON.parse(contenido)
            console.log(json_peliculas)
            json_usuarios.forEach(pelicula => {
                /** 
                    pelicula.id_pelicula
                    pelicula.nombre_pelicula
                    pelicula.descripcion
                    pelicula.puntuacion_star
                    pelicula.precio_Q
                 */
                
            });
        };
        //console.log(listaUsuarios.mostrarUsuarios())
        alert("Se ha completado la carga de Peliculas")
        reader.readAsText(archivo.files[0])
        };

function abrirArchivoActores (event) {
        var archivo = event.target;
        var reader = new FileReader();
        reader.onload = function () {
            var contenido = reader.result;
            json_actores = JSON.parse(contenido)
            console.log(json_actores)
            json_usuarios.forEach(actor => {
                /** 
                actor.dni
                actor.nombre_actor
                actor.correo
                actor.descripcion    
                */
                
            });
        };
        //console.log(listaUsuarios.mostrarUsuarios())
        alert("Se ha completado la carga de Actores")
        reader.readAsText(archivo.files[0])
    };

btncargamasiva.addEventListener('click',mostrar_carga_masiva,true)
btnestructuras.addEventListener('click',mostrar_estructuras,true)
btnlogout.addEventListener('click',logout,true)
fctlogin.addEventListener('click',login,true)


