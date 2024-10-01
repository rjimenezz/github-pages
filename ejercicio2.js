AFRAME.registerComponent('crear-cubo', {
  
    init: function () {
        var entity = this.el;
        
        entity.addEventListener('click', function () {
            console.log('click esfera');
        });
    }
});
