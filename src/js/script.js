//--------------- IMPORTS ---------------//
//import /* ClassName */ from /* "./filename" */;
//import { /* variables you want to import */ } from /* "./filename" */;


//--------------- CODE ---------------//

//IMPORT CLASSES
//let className = new ClassName(param1Value, param2Value);

//UPDATE EVERY OBJECTS
let update = function() {
  //className.update();
  //webglClass.render();

  requestAnimationFrame(update);
};


window.onbeforeunload = function() {
  //Code goes here
};

window.onload = function() {

  update();

  //Code goes here
};


//--------------- EXPORTS ---------------//
//export {/* variables you want to export */};
//export default /* class you want to export */;