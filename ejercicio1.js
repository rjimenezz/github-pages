console.log('cargado');
AFRAME.registerComponent('cambio-color', {
  
    init: function () {
        console.log('cambio Color');
        var entity = this.el;
        var color = ['blue', 'yellow', 'green', 'black', 'purple', 'pink', 'orange', 'white', 'brown', 'gray', 'cyan', 'magenta', 'silver', 'gold', 'red'];
        var posicionColor = 0;

        this.nuevoColor = function () {
            if (posicionColor == color.length) {
                posicionColor = 0;
            }
            entity.setAttribute('material', 'color', color[posicionColor]);
            posicionColor++;
        }
    this.intervalo= setInterval(this.nuevoColor, 2000);
    }
  
    
  });
