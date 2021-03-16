$(document).ready(function () {
    var valueNombre = "";
    var valueProvincia = "";
    var valueCiudad = "";
    var valuesector = "";
    var valueCalle = "";
    var valueCarrera = "";
    var valuesBox = "";
    var valuesBox2 = "";
    var valuesBox3 = "";

    //Eventos

    $("#content-container").on("click", "#btn-clear", function () {
        clear();
    });

    //Link barra

    $("#content-container").on("click", "#link1", function () {
        indexHtml();
    });

    $("#content-container").on("click", "#link2", function () {
        materiasHtml();
    });

    $("#content-container").on("click", "#link3", function () {
        horarioHtml();
    });

    //

    //De index a Seleccion de materias
    $("#content-container").on("click", "#btn-register", function () {
        registrarData();

    });

    $("#content-container").on("click", "#btn-end-selec", function () {
        location.reload();
    });



    /*$("#content-container").on("click", "#btn-register", function () {
        registrarData();
    });*/

    //De seleccion de materias a index
    $("#content-container").on("click", "#btn-back", function () {
        indexHtml();
    });

    $("#content-container").on("click", "#btn-next-confirmate", function () {
        registrarHorario();
    });

    $("#content-container").on("click", "#btn-back-materias", function () {
        materiasHtml();
    });

    function clear() {
        $("#name").val("").removeClass("input-error").focus();
        $("#provincia").val("").removeClass("input-error");
        $("#ciudad").val("").removeClass("input-error");
        $("#sector").val("").removeClass("input-error");
        $("#calle").val("").removeClass("input-error");

        //por alguna razon esto no me borra el select como a usted
        $("#carrera").val("").removeClass("input-error");

        valueNombre = "";
        valueProvincia = "";
        valueCiudad = "";
        valuesector = "";
        valueCalle = "";
        valueCarrera = "";
    }


    function registrarData() {
        valueNombre = $("#name").val();
        valueProvincia = $("#provincia").val();
        valueCiudad = $("#ciudad").val();
        valuesector = $("#sector").val();
        valueCalle = $("#calle").val();
        valueCarrera = $("#carrera").val();

        let isValid = validar();

        if (isValid == true) {
            toastr.success("Se creo jevi el asunto", "Notificacion", {
                TimeOut: 2000
            })
            materiasHtml();
            //horarioHtml();
        } else {
            toastr.error("Llenar todo bro", "Notificacion", {
                TimeOut: 2000
            })
        }
    }



    function registrarHorario() {
        valuesBox = $("#radio-container input[type='radio']:checked").val();
        valuesBox2 = $("#radio-container2 input[type='radio']:checked").val();
        valuesBox3 = $("#radio-container3 input[type='radio']:checked").val();

        let isValid = validarBox();

        if (isValid == true) {
            toastr.success("Seleccion de materias guardada jevi'mente", "Notificacion", {
                TimeOut: 2000
            })
            horarioHtml();

        } else {
            toastr.error("Te falta una por seleccionar mio.", "Notificacion", {
                TimeOut: 2000
            })
        }
    }

    function materiasHtml() {


        var valueCarreraName = "";
        var valuemateriaName = "";
        var valuemateriaName2 = "";
        var valuemateriaName3 = "";

        if (valueCarrera == 1) {

            valueCarreraName = "Software";
            valuemateriaName = "Programacion 3";
            valuemateriaName2 = "Base de datos";
            valuemateriaName3 = "Inteligencia artifical";

        } else if (valueCarrera == 2) {

            valueCarreraName = "Mecatronica";
            var valuemateriaName = "Fisica mecanica";
            var valuemateriaName2 = "Autocap";
            var valuemateriaName3 = "Electronica";

        } else if (valueCarrera == 3) {
            valueCarreraName = "Inteligencia artificial";
            var valuemateriaName = "Estadistica avanzada";
            var valuemateriaName2 = "Aprendizaje Automático";
            var valuemateriaName3 = "Robótica Inteligente";

        } else {
            alert("Algo malo ta' pasando aqui...");
        }

        let materias = `        
        <center>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>

            <nav aria-label="...">
               
                <ul class=" margin-all pagination justify-content-center pagination pagination-lg">

                    <li id="link1" class="page-item"><a class="page-link" href="#" tabindex="-1">1</a></li>

                    <li id="link2" class="page-item disabled"><a class="page-link" href="#">2</a></li>

                    <li id="link3"class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
                
            </nav>

            <div class="card">
                <div class="card-header text-white bg-success">
                    <h3 class="text-center">Seleccione la hora de las materias de: ${valueCarreraName}</h3>
                </div>
                <div class="card-body margin-all">
                    <!--<select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>-->

                    <form>
                        <fieldset>
                            <div class="col-sm-11" id="radio-container">
                                <div class="card w-100">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <legend>${valuemateriaName}</legend>
                                        </h5>
                                        <label>
                                            <input type="radio" name="color" value="p31" checked>Lun 8:00 - 11:00
                                        </label>
                                        <label>
                                            <input type="radio" name="color" value="p32"> Jue 12:00 - 14:00
                                        </label>
                                        <label>
                                            <input type="radio" name="color" value="p33"> Vie 16:00 - 20:00
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div class="col-sm-10 margin-all" id="radio-container2">
                                <div class="card w-100">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <legend>${valuemateriaName2}</legend>
                                        </h5>
                                        <label>
                                            <input type="radio" name="h" value="p31" checked> Mar 8:00 - 11:00
                                        </label>
                                        <label>
                                            <input type="radio" name="h" value="p32"> Mie 12:00 - 14:00
                                        </label>
                                        <label>
                                            <input type="radio" name="h" value="p33"> sab 16:00 - 20:00
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div class="col-sm-11 margin-all" id="radio-container3">
                                <div class="card w-100">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <legend>${valuemateriaName3}</legend>
                                        </h5>
                                        <label>
                                            <input type="radio" name="f" value="p31" checked> Lun 8:00 - 11:00
                                            
                                        </label>
                                        <label>
                                            <input type="radio" name="f" value="p32"> Jue 12:00 - 14:00
                                        </label>
                                        <label>
                                            <input type="radio" name="f" value="p33"> Sab 16:00 - 20:00
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <button class="btn btn-warning margin-all" id="btn-back" >Volver</button>
                        <button class="btn btn-primary margin-all" id="btn-next-confirmate">confirmar y Seguir</button>
                    </form>
                    </select>
                </div>
            </div>
    </center>
        
        `;

        $("#content-container").html(materias);

        $("#radio-container input[type='radio'][value=" + valuesBox + "]").prop("checked", true);
        $("#radio-container2 input[type='radio'][value=" + valuesBox2 + "]").prop("checked", true);
        $("#radio-container3 input[type='radio'][value=" + valuesBox3 + "]").prop("checked", true);
    }

    function indexHtml() {

        let indexhtml = `
    <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            <nav aria-label="...">
               
                <ul class=" margin-all pagination justify-content-center pagination pagination-lg">

                    <li id="link1" class="page-item disabled"><a class="page-link" href="#" tabindex="-1">1</a></li>

                    <li id="link2" class="page-item"><a class="page-link" href="#">2</a></li>

                    <li id="link3"class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
                
            </nav>
            <div class="card">
                <div class="card-header text-white bg-dark">

                    <h3 class="text-center">Registro y seleccion de asignaturas</h3>
                </div>
                <div class="card-body">
                    <div class="card-title">
                        <h3 class="text-center">Complete la info</h3>
                    </div>

                    <!--Nombre-->
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name">
                    </div>

                    <!--Provincia-->
                    <div class="mb-3">
                        <label for="provincia" class="form-label">Provincia</label>
                        <input type="text" class="form-control" id="provincia">
                    </div>

                    <!--Ciudad-->
                    <div class="mb-3">
                        <label for="provincia" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" id="ciudad">
                    </div>

                    <!-Sector-->
                        <div class="mb-3">
                            <label for="provincia" class="form-label">Sector</label>
                            <input type="text" class="form-control" id="sector">
                        </div>
                        <!--Calle-->
                        <div class="mb-3">
                            <label for="provincia" class="form-label">Calle</label>
                            <input type="text" class="form-control" id="calle">
                        </div>


                        <div class="mb-3" style="margin-top: 40px;">
                            <select id="carrera" class="form-select" aria-label="Default select example">
                                <option value=""> Seleccione Carreras</option>
                                <option value="1">Software</option>
                                <option value="2">Mecatronica</option>
                                <option value="3">IA</option>
                            </select>
                        </div>

                </div>

                <div>
                    <button class="btn btn-primary float-end margin-left-2" id="btn-register" >confirmar y Seguir</button>
                    <button class="btn btn-warning float-end" id="btn-clear" >Limpiar</button>
                </div>

            </div>
        `;

        $("#content-container").html(indexhtml);

        $("#name").val(valueNombre);
        $("#provincia").val(valueProvincia);

        $("#ciudad").val(valueCiudad);
        $("#sector").val(valuesector);
        $("#calle").val(valueCalle);

        //Pone el valor que se le indica en el select
        $("#carrera").val("#carrera option:selected").val(valueCarrera);
    }

    function horarioHtml() {

        //determina el nombre de la carrera y las materias
        var valueCarreraName = "";
        //
        var valuemateriaName = "";
        var valuemateriaName2 = "";
        var valuemateriaName3 = "";
        //
        var valueBoxx11 = "";
        var valueBoxx12 = "";
        var valueBoxx13 = "";
        var valueBoxx14 = "";
        var valueBoxx15 = "";
        var valueBoxx16 = "";
        //2
        var valueBoxx21 = "";
        var valueBoxx22 = "";
        var valueBoxx23 = "";
        var valueBoxx24 = "";
        var valueBoxx25 = "";
        var valueBoxx26 = "";
        //
        var valueBoxx31 = "";
        var valueBoxx32 = "";
        var valueBoxx33 = "";
        var valueBoxx34 = "";
        var valueBoxx35 = "";
        var valueBoxx36 = "";



        if (valueCarrera == 1) {

            valueCarreraName = "Software";
            valuemateriaName = "Programacion 3";
            valuemateriaName2 = "Base de datos";
            valuemateriaName3 = "Inteligencia artifical";

        } else if (valueCarrera == 2) {

            valueCarreraName = "Mecatronica";
            var valuemateriaName = "Fisica mecanica";
            var valuemateriaName2 = "Autocap";
            var valuemateriaName3 = "Electronica";

        } else if (valueCarrera == 3) {
            valueCarreraName = "Inteligencia artificial";
            var valuemateriaName = "Estadistica avanzada";
            var valuemateriaName2 = "Aprendizaje Automático";
            var valuemateriaName3 = "Robótica Inteligente";

        } else {
            alert("Algo malo ta' pasando aqui...");
        }


        if (valuesBox == "p31") {
            valueBoxx11 = "Lun 8:00 - 11:00";
        }

        if (valuesBox == "p32") {
            valueBoxx14 = "Jue 12:00 - 14:00";
        }

        if (valuesBox == "p33") {
            valueBoxx15 = "Vie 16:00 - 20:00";
        }

        if (valuesBox2 == "p31") {
            valueBoxx22 = "Mar 8:00 - 11:00";
        }

        if (valuesBox2 == "p32") {
            valueBoxx23 = "Mie 12:00 - 14:00";
        }

        if (valuesBox2 == "p33") {
            valueBoxx26 = "Sab 16:00 - 20:00";
        }

        if (valuesBox3 == "p31") {
            valueBoxx31 = "Lun 8:00 - 11:00";
        }

        if (valuesBox3 == "p32") {
            valueBoxx34 = "Jueve12:00 - 14:00";
        }

        if (valuesBox3 == "p33") {
            valueBoxx36 = "Sab 16:00 - 20:00";
        }


        let htmlHorario = `
        <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>


            <nav aria-label="...">
               
                <ul class=" margin-all pagination justify-content-center pagination pagination-lg">

                    <li id="link1" class="page-item"><a class="page-link" href="#" tabindex="-1">1</a></li>

                    <li id="link2" class="page-item"><a class="page-link" href="#">2</a></li>

                    <li id="link3"class="page-item disabled"><a class="page-link" href="#">3</a></li>
                </ul>
                
            </nav>
                  <div class="card">
              <div class="card-header text-white bg-success">
                  <h3 class="text-center">Confirmacion</h3>
              </div>
              <div class="card-body">
                  <ul class="list-group">
                      <li class="list-group-item">carrera: ${valueCarreraName} </li>
                      <li class="list-group-item">Nombre: ${valueNombre} </li>
                      <li class="list-group-item">provincia: ${valueProvincia} </li>
                      <li class="list-group-item">ciudad: ${valueCiudad} </li>
                      <li class="list-group-item">sector: ${valuesector} </li>
                      <li class="list-group-item">calle: ${valueCalle} </li>

                                                <table class="table table-bordered margin-all">
                              <thead>
                                  <tr>
                                      <th scope="col"></th>
                                      <th scope="col">Lunes</th>
                                      <th scope="col">Martes</th>
                                      <th scope="col">Miercoles</th>
                                      <th scope="col">Jueves</th>
                                      <th scope="col">Viernes</th>
                                      <th scope="col">sabado</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <th scope="row">${valuemateriaName}</th>
                                      <td>${valueBoxx11}</td>
                                      <td>${valueBoxx12}</td>
                                      <td>${valueBoxx13}</td>
                                      <td>${valueBoxx14}</td>
                                      <td>${valueBoxx15}</td>
                                      <td>${valueBoxx16}</td>

                                      
                                  </tr>
                                  <tr>
                                      <th scope="row">${valuemateriaName2}</</th>
                                      <td>${valueBoxx21}</td>
                                      <td>${valueBoxx22}</td>
                                      <td>${valueBoxx23}</td>
                                      <td>${valueBoxx24}</td>
                                      <td>${valueBoxx25}</td>
                                      <td>${valueBoxx26}</td>


                                  </tr>
                                  <tr>
                                      <th scope="row">${valuemateriaName3}</th>
                                      <td>${valueBoxx31}</td>
                                      <td>${valueBoxx32}</td>
                                      <td>${valueBoxx33}</td>
                                      <td>${valueBoxx34}</td>
                                      <td>${valueBoxx35}</td>
                                      <td>${valueBoxx36}</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      
                      
                  </ul>
                  <div class="margin-arriba-2">
                  <center>
                      <button id="btn-back-materias" class="btn btn-warning">Atras</button>
                      <button id="btn-end-selec" class="btn btn-success">Finalizar</button>
                      <input type="button" class= "btn btn-info" value="Imprimir horario" onClick="window.print()">                    </center>
                  </div>
              </div>
          </div>
        
        `;
        $("#content-container").html(htmlHorario);

    }

    function generarTabla() {
        let htmlHorario = `
        
        
        `;
    }

    function validar() {

        let isValid = true;

        if (valueNombre == "" || valueNombre == null || valueNombre == undefined) {
            isValid = false
            $("#name").addClass("input-error");
        } else {
            $("#name").removeClass("input-error");
        }

        if (valueProvincia == "" || valueProvincia == null || valueProvincia == undefined) {
            isValid = false
            $("#provincia").addClass("input-error");
        } else {
            $("#provincia").removeClass("input-error");
        }

        if (valueCiudad == "" || valueCiudad == null || valueCiudad == undefined) {
            isValid = false
            $("#ciudad").addClass("input-error");
        } else {
            $("#ciudad").removeClass("input-error");
        }

        if (valuesector == "" || valuesector == null || valuesector == undefined) {
            isValid = false
            $("#sector").addClass("input-error");
        } else {
            $("#sector").removeClass("input-error");
        }
        if (valueCalle == "" || valueCalle == null || valueCalle == undefined) {
            isValid = false
            $("#calle").addClass("input-error");
        } else {
            $("#calle").removeClass("input-error");
        }

        if (valueCarrera == "" || valueCarrera == null || valueCarrera == undefined) {
            isValid = false
            $("#carrera").addClass("input-error");
        } else {
            $("#carrera").removeClass("input-error");
        }
        return isValid;
    }

    function validarBox() {
        let isValid = true;

        let checkedRadio = $("#radio-container input[type='radio']:checked");

        if (checkedRadio.length <= 0) {
            isValid = false;
            $("#radio-container").addClass("input-error");
        } else {
            $("#radio-container").removeClass("input-error");
        }

        let checkedRadio2 = $("#radio-container2 input[type='radio']:checked");
        if (checkedRadio2.length <= 0) {
            isValid = false;
            $("#radio-container2").addClass("input-error");
        } else {
            $("#radio-container2").removeClass("input-error");

        }


        let checkedRadio3 = $("#radio-container3 input[type='radio']:checked");

        if (checkedRadio3.length <= 0) {
            isValid = false;
            $("#radio-container3").addClass("input-error");
        } else {
            $("#radio-container3").removeClass("input-error");

        }

        return isValid;

    }

});