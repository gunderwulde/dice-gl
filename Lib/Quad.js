function Quad() {
    this.blurShader = new Shader("Blur.shader",true);
    var vertices = [
        -1,1,0,
        -1,-1,0,
        1,-1,0,
        1,1,0 
      ];
     
      this.positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

      var indices = [3,2,1,1,3,0];
      this.indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
}

Quad.prototype.Draw = function (val) {
    this.blurShader.setColor(0,0,0,0.25);
    this.blurShader.Use(gl);
    this.blurShader.BindBuffers(this);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    gl.enable(gl.DEPTH_TEST);
    gl.disable(gl.BLEND);
  }