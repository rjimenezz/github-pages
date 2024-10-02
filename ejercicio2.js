
AFRAME.registerComponent('crear-cubo', {
  
    init: function () {
        var entity = this.el;
        //var sceneEl = this.sceneEl;
        entity.addEventListener('click', function () {
            console.log('click esfera');
            var cuboNuevo = document.createElement('a-entity');
            cuboNuevo.setAttribute('geometry', {
                primitive: 'box',
                height: 1,
                width: 1
            });
            cuboNuevo.setAttribute('material', 'color', 'red');
            cuboNuevo.setAttribute('position', '0 1.5 -3');
            this.sceneEl.appendChild(cuboNuevo);
        });
    }
});