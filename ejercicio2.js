AFRAME.registerComponent('crear-cubo', {
  
    init: function () {
    console.log('crear cubo');
    var entity = this.el;
    entity.addEventListener('click', function () {
        console.log('Esfera clicada!');
  
    
    })}})
