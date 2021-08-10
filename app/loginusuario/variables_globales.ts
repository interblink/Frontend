/* COMO GUARDAR DATOS EN UNA VARIABLE GLOBAL

1) Ya encontré la solución, escribir en el index.html una variable ->

<script type="text/javascript">
      var hola = 'algo';
  </script>

2) Luego acceder desde cualquier componente.ts -> Para mi caso lo usé al iniciar el componente y cambiar el valor:

ngOnInit() {
    let rootVar = window['hola'];
    rootVar += ' adios';
    window['hola'] = rootVar;
    console.log(window['copia_usuario']); //imprime lo que esta guardado en la varibale global
}

Recoges la variable, se le añade un nuevo valor y ya está disponible con F12 -> console -> nombre de la variable.

*/

export class GlobalConstants {

    public static username1: string = "username1";
    


}












