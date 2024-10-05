AFRAME.registerComponent('crear-entidad', {
    init: function () {
      var entity = this.el;
      var childCount = 0;
  
      entity.addEventListener('click', function () {
        var newEntity = document.createElement('a-entity');
        
        var geometry = entity.getAttribute('geometry');
        var material = entity.getAttribute('material');
        newEntity.setAttribute('geometry', geometry);
        newEntity.setAttribute('material', material);
        // Obtener la posición de la entidad padre
        //var parentPosition = entity.getAttribute('position');
        //var parentPosition = entity.object3D.position;
        var parentWorldPosition = new THREE.Vector3();
        entity.object3D.getWorldPosition(parentWorldPosition);
        
        var newX = parentWorldPosition.x;
        var newY = parentWorldPosition.y + (childCount+2); // Siempre añade 2 unidades a la altura
        var newZ = parentWorldPosition.z;
        
        newEntity.setAttribute('position', `${newX} ${newY} ${newZ}`);
        
        entity.sceneEl.appendChild(newEntity);
        
        childCount++;
      });
    }
  });
  
   