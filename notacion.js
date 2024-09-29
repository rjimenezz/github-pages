AFRAME.registerComponent('foo', {
    schema: {
      bar: {type: 'number'},
      baz: {type: 'string'}
    },
  
    init: function () {
      // Do something when component first attached.
    },
  
    update: function () {
      // Do something when component's data is updated.
    },
  
    remove: function () {
      // Do something when the component or its entity is detached.
    },
  
    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
  });

  //https://unpkg.com/<nombre del paquete npm>@<versión>/<ruta al archivo> si quieres ultima version quitar @version
  //ej:  <script src="https://unpkg.com/aframe-particle-system-component@1.0.9/dist/aframe-particle-system-component.min.js"></script> 
  //en el html en el head
