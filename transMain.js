  'use strict';

  // Global variables that are set and used
  // across the application
  let gl, program;
  
  // Global declarations of objects that you will be drawing
  var myTeapot = null;
  var myCube = null;
  var myCone = null;
  var myCube1 = null;
  var myCube2 = null;
  var myCube3 = null;
  var myCube4 = null;
  var myCube5 = null;
  var myCube6 = null;
  var myCube7 = null;
  var myCube8 = null;
  var myCube9 = null;

//
// A function that creates shapes to be drawn and creates a VAO for each
//
// We start you out with an example for the teapot.
//
function createShapes() {

    myTeapot = new Teapot();
    myTeapot.VAO = bindVAO (myTeapot);

    myCube = new Cube(3);
    myCube.VAO = bindVAO (myCube);

    myCone = new Cone(3, 3);
    myCone.VAO = bindVAO (myCone);

    myCube1 = new Cube(3);
    myCube1.VAO = bindVAO (myCube1);

    myCube2 = new Cube(3);
    myCube2.VAO = bindVAO (myCube2);

    myCube3 = new Cube(3);
    myCube3.VAO = bindVAO (myCube3);

    myCube4 = new Cube(3);
    myCube4.VAO = bindVAO (myCube4);

    myCube5 = new Cube(3);
    myCube5.VAO = bindVAO (myCube5);

    myCube6 = new Cube(3);
    myCube6.VAO = bindVAO (myCube6);

    myCube7 = new Cube(3);
    myCube7.VAO = bindVAO (myCube7);

    myCube8 = new Cube(3);
    myCube8.VAO = bindVAO (myCube8);

    myCube9 = new Cube(3);
    myCube9.VAO = bindVAO (myCube9);
}


//
// Set up your camera and your projection matrices
//
function setUpCamera() {
    
    // set up your projection
    // defualt is orthographic projection
    let projMatrix = glMatrix.mat4.create();
    glMatrix.mat4.ortho(projMatrix, -5, 5, -5, 5, 1.0, 300.0);
    gl.uniformMatrix4fv (program.uProjT, false, projMatrix);

    
    // set up your view
    // defaut is at (0,0,-5) looking at the origin
    let viewMatrix = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(viewMatrix, [-4, -2, -15], [2, 1.5, 2], [0, 1, 0]);
    var translateVec = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec, 0, 0, -4)
    glMatrix.mat4.translate(viewMatrix, viewMatrix, translateVec);
    gl.uniformMatrix4fv (program.uViewT, false, viewMatrix);
}


//
// Use this function to draw all of your shapes.
// Recall that VAOs should have been set up the call to createShapes()
// You'll have to provide a Model Matrix for each shape to be drawn that
// places the object in the world.
//
// An example is shown for placing the teapot
//
function drawShapes() {

    var scaleVec1 = glMatrix.vec3.create()
    glMatrix.vec3.set(scaleVec1, 2.5, 0.3, 2.5)

    var scaleVec2 = glMatrix.vec3.create()
    glMatrix.vec3.set(scaleVec2, 1, 3, 1)

    let modelMatrix = glMatrix.mat4.create();
    
    // drawing the teapot rotating around Y  180 degrees
    glMatrix.mat4.rotateY (modelMatrix,  modelMatrix, radians(180.0))
    
    // send the model matrix to the shader and draw.
    gl.uniformMatrix4fv (program.uModelT, false, modelMatrix);
    gl.bindVertexArray(myTeapot.VAO);
    gl.drawElements(gl.TRIANGLES, myTeapot.indices.length, gl.UNSIGNED_SHORT, 0);

    let cube1_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cube1_position,  cube1_position, radians(-15))
    glMatrix.mat4.rotateZ (cube1_position,  cube1_position, radians(5))
    // scale
    glMatrix.mat4.scale(cube1_position, cube1_position, scaleVec1)
    var translateVec1 = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec1, 0, -0.8, 0)
    glMatrix.mat4.translate(cube1_position, cube1_position, translateVec1);
    gl.uniformMatrix4fv (program.uModelT, false, cube1_position);
    gl.bindVertexArray(myCube1.VAO);
    gl.drawElements(gl.TRIANGLES, myCube1.indices.length, gl.UNSIGNED_SHORT, 0);

    let cube2_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cube2_position,  cube2_position, radians(-15))
    glMatrix.mat4.rotateZ (cube2_position,  cube2_position, radians(5))
    // scale
    glMatrix.mat4.scale(cube2_position, cube2_position, scaleVec2)
    var translateVec1 = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec1, 0, -0.6, 0)
    glMatrix.mat4.translate(cube2_position, cube2_position, translateVec1);
    gl.uniformMatrix4fv (program.uModelT, false, cube2_position);
    gl.bindVertexArray(myCube2.VAO);
    gl.drawElements(gl.TRIANGLES, myCube2.indices.length, gl.UNSIGNED_SHORT, 0);

    let cube3_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cube3_position,  cube3_position, radians(-15))
    glMatrix.mat4.rotateZ (cube3_position,  cube3_position, radians(5))
    // scale
    glMatrix.mat4.scale(cube3_position, cube3_position, scaleVec1)
    var translateVec1 = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec1, 0, -11, 0)
    glMatrix.mat4.translate(cube3_position, cube3_position, translateVec1);
    gl.uniformMatrix4fv (program.uModelT, false, cube3_position);
    gl.bindVertexArray(myCube3.VAO);
    gl.drawElements(gl.TRIANGLES, myCube3.indices.length, gl.UNSIGNED_SHORT, 0);

    // draw cube
    let cube_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cube_position,  cube_position, radians(-15))
    glMatrix.mat4.rotateZ (cube_position,  cube_position, radians(5))
    // scale
    var scaleVec = glMatrix.vec3.create()
    glMatrix.vec3.set(scaleVec, 1, 1, 1)
    glMatrix.mat4.scale(cube_position, cube_position, scaleVec)
    // translation
    var translateVec = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec, 4, 0.5, 0)
    glMatrix.mat4.translate(cube_position, cube_position, translateVec);
    gl.uniformMatrix4fv (program.uModelT, false, cube_position);
    gl.bindVertexArray(myCube.VAO);
    gl.drawElements(gl.TRIANGLES, myCube.indices.length, gl.UNSIGNED_SHORT, 0);

    let cube4_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cube4_position,  cube4_position, radians(-15))
    glMatrix.mat4.rotateZ (cube4_position,  cube4_position, radians(5))
    // scale
    glMatrix.mat4.scale(cube4_position, cube4_position, scaleVec1)
    var translateVec1 = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec1, 1.6, -0.8, 0)
    glMatrix.mat4.translate(cube4_position, cube4_position, translateVec1);
    gl.uniformMatrix4fv (program.uModelT, false, cube4_position);
    gl.bindVertexArray(myCube4.VAO);
    gl.drawElements(gl.TRIANGLES, myCube4.indices.length, gl.UNSIGNED_SHORT, 0);

    let cube5_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cube5_position,  cube5_position, radians(-15))
    glMatrix.mat4.rotateZ (cube5_position,  cube5_position, radians(5))
    // scale
    glMatrix.mat4.scale(cube5_position, cube5_position, scaleVec2)
    var translateVec1 = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec1, 4, -0.6, 0)
    glMatrix.mat4.translate(cube5_position, cube5_position, translateVec1);
    gl.uniformMatrix4fv (program.uModelT, false, cube5_position);
    gl.bindVertexArray(myCube5.VAO);
    gl.drawElements(gl.TRIANGLES, myCube5.indices.length, gl.UNSIGNED_SHORT, 0);

    let cube6_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cube6_position,  cube6_position, radians(-15))
    glMatrix.mat4.rotateZ (cube6_position,  cube6_position, radians(5))
    // scale
    glMatrix.mat4.scale(cube6_position, cube6_position, scaleVec1)
    var translateVec1 = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec1, 1.6, -11, 0)
    glMatrix.mat4.translate(cube6_position, cube6_position, translateVec1);
    gl.uniformMatrix4fv (program.uModelT, false, cube6_position);
    gl.bindVertexArray(myCube6.VAO);
    gl.drawElements(gl.TRIANGLES, myCube6.indices.length, gl.UNSIGNED_SHORT, 0);


    // draw cone
    let cone_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cone_position,  cone_position, radians(-15))
    glMatrix.mat4.rotateZ (cone_position,  cone_position, radians(5))
    // scale
    var scaleVec = glMatrix.vec3.create()
    glMatrix.vec3.set(scaleVec, 1, 1.5, 1)
    glMatrix.mat4.scale(cone_position, cone_position, scaleVec)
    // translation
    var translateVec = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec, -4, 0.5, 0)
    glMatrix.mat4.translate(cone_position, cone_position, translateVec);
    gl.uniformMatrix4fv (program.uModelT, false, cone_position);
    gl.bindVertexArray(myCone.VAO);
    gl.drawElements(gl.TRIANGLES, myCone.indices.length, gl.UNSIGNED_SHORT, 0);

    let cube7_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cube7_position,  cube7_position, radians(-15))
    glMatrix.mat4.rotateZ (cube7_position,  cube7_position, radians(5))
    // scale
    glMatrix.mat4.scale(cube7_position, cube7_position, scaleVec1)
    var translateVec1 = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec1, -1.6, -0.8, 0)
    glMatrix.mat4.translate(cube7_position, cube7_position, translateVec1);
    gl.uniformMatrix4fv (program.uModelT, false, cube7_position);
    gl.bindVertexArray(myCube7.VAO);
    gl.drawElements(gl.TRIANGLES, myCube7.indices.length, gl.UNSIGNED_SHORT, 0);

    let cube8_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cube8_position,  cube8_position, radians(-15))
    glMatrix.mat4.rotateZ (cube8_position,  cube8_position, radians(5))
    // scale
    glMatrix.mat4.scale(cube8_position, cube8_position, scaleVec2)
    var translateVec1 = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec1, -4, -0.6, 0)
    glMatrix.mat4.translate(cube8_position, cube8_position, translateVec1);
    gl.uniformMatrix4fv (program.uModelT, false, cube8_position);
    gl.bindVertexArray(myCube8.VAO);
    gl.drawElements(gl.TRIANGLES, myCube8.indices.length, gl.UNSIGNED_SHORT, 0);

    let cube9_position = glMatrix.mat4.create();
    glMatrix.mat4.rotateX (cube9_position,  cube9_position, radians(-15))
    glMatrix.mat4.rotateZ (cube9_position,  cube9_position, radians(5))
    // scale
    glMatrix.mat4.scale(cube9_position, cube9_position, scaleVec1)
    var translateVec1 = glMatrix.vec3.create();
    glMatrix.vec3.set(translateVec1, -1.6, -11, 0)
    glMatrix.mat4.translate(cube9_position, cube9_position, translateVec1);
    gl.uniformMatrix4fv (program.uModelT, false, cube9_position);
    gl.bindVertexArray(myCube9.VAO);
    gl.drawElements(gl.TRIANGLES, myCube9.indices.length, gl.UNSIGNED_SHORT, 0);
}

///////////////////////////////////////////////////////////////////
//
//   You shouldn't have to edit below this line
//
///////////////////////////////////////////////////////////////////

  // Given an id, extract the content's of a shader script
  // from the DOM and return the compiled shader
  function getShader(id) {
    const script = document.getElementById(id);
    const shaderString = script.text.trim();

    // Assign shader depending on the type of shader
    let shader;
    if (script.type === 'x-shader/x-vertex') {
      shader = gl.createShader(gl.VERTEX_SHADER);
    }
    else if (script.type === 'x-shader/x-fragment') {
      shader = gl.createShader(gl.FRAGMENT_SHADER);
    }
    else {
      return null;
    }

    // Compile the shader using the supplied shader code
    gl.shaderSource(shader, shaderString);
    gl.compileShader(shader);

    // Ensure the shader is valid
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  }

  // Create a program with the appropriate vertex and fragment shaders
  function initProgram() {
    const vertexShader = getShader('vertex-shader');
    const fragmentShader = getShader('fragment-shader');

    // Create a program
    program = gl.createProgram();
    // Attach the shaders to this program
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Could not initialize shaders');
    }

    // Use this program instance
    gl.useProgram(program);
    // We attach the location of these shader values to the program instance
    // for easy access later in the code
    program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    program.aBary = gl.getAttribLocation(program, 'bary');
    program.uModelT = gl.getUniformLocation (program, 'modelT');
    program.uViewT = gl.getUniformLocation (program, 'viewT');
    program.uProjT = gl.getUniformLocation (program, 'projT');
  }

  // creates a VAO and returns its ID
  function bindVAO (shape) {
      //create and bind VAO
      let theVAO = gl.createVertexArray();
      gl.bindVertexArray(theVAO);
      
      // create and bind vertex buffer
      let myVertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, myVertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shape.points), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(program.aVertexPosition);
      gl.vertexAttribPointer(program.aVertexPosition, 4, gl.FLOAT, false, 0, 0);
      
      // create and bind bary buffer
      let myBaryBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, myBaryBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shape.bary), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(program.aBary);
      gl.vertexAttribPointer(program.aBary, 3, gl.FLOAT, false, 0, 0);
      
      // Setting up the IBO
      let myIndexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(shape.indices), gl.STATIC_DRAW);

      // Clean
      gl.bindVertexArray(null);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      
      return theVAO;
    
  }

  
  // We call draw to render to our canvas
  function draw() {
    // Clear the scene
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      
    // draw your shapes
    drawShapes();

    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  }

  // Entry point to our application
  function init() {
      
    // Retrieve the canvas
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) {
      console.error(`There is no canvas with id ${'webgl-canvas'} on this page.`);
      return null;
    }


    // Retrieve a WebGL context
    gl = canvas.getContext('webgl2');
    if (!gl) {
        console.error(`There is no WebGL 2.0 context`);
        return null;
      }
      
    // Set the clear color to be black
    gl.clearColor(0, 0, 0, 1);
      
    // some GL initialization
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    
    gl.cullFace(gl.BACK);
    gl.frontFace(gl.CCW);
    gl.clearColor(0.0,0.0,0.0,1.0)
    gl.depthFunc(gl.LEQUAL)
    gl.clearDepth(1.0)

    // Read, compile, and link your shaders
    initProgram();
    
    // create and bind your current object
    createShapes();
    
    // set up your camera
    setUpCamera();
    
    // do a draw
    draw();
  }
