AFRAME.registerComponent('crear-entidad', {
  init: function () {
    var entity = this.el;
    //var parentPosition = entity.getAttribute('position');
    entity.addEventListener('click', function () {
      var newEntity = document.createElement('a-entity');
      
      var geometry = entity.getAttribute('geometry');
      var material = entity.getAttribute('material');
      var scale = entity.getAttribute('scale');
      newEntity.setAttribute('geometry', geometry);
      newEntity.setAttribute('material', material);
      newEntity.setAttribute('scale', scale);
      //newEntity.setAttribute('crear-entidad', '');
      
      //console.log(parentPosition);
      // Conteo de los hijos
      var childCount = entity.children.length;
      var newY;
      //console.log(scale.y);
      if (childCount === 0) {
        // Si es el primer hijo, colocarlo encima del padre
        newY = scale.y +1; // La primera vez se suma respecto de la posición del padre
      } else {
        // Si ya hay hijos, colocarlo encima del último hijo
        var lastChild = entity.children[childCount - 1];
        var lastChildY = lastChild.getAttribute('position').y;
        newY = lastChildY + scale.y +1; //Las demas veces si coge la posición especificada
      }
      //console.log(newY);
      newEntity.setAttribute('position', `0 ${newY} 0`);
      console.log(newEntity.getAttribute('position'))
      // Añadir la nueva entidad como hija de la entidad clicada
      entity.appendChild(newEntity);
    });
  }
});
