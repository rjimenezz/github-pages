AFRAME.registerComponent('crear-entidad', {
    init: function () {
      var entity = this.el;
      entity.addEventListener('click', function () {
        console.log('click entidad');
        var newEntity = entity.cloneNode(true);
        
        // Obtener la posición actual de la entidad
        var currentPosition = entity.getAttribute('position');
      
        // Calcular la nueva posición relativa a la entidad actual
        var newX = currentPosition.x + 2;
        var newY = currentPosition.y- 2;
        var newZ = currentPosition.z + 2;
      
        newEntity.setAttribute('position', `${newX} ${newY} ${newZ}`);
        
        // Eliminar el componente crear-entidad del clon para evitar creación infinita
        newEntity.removeAttribute('crear-entidad');
        
        // Añadir la nueva entidad a la entidad clickeada
        entity.appendChild(newEntity);
      });
    }
  });
  