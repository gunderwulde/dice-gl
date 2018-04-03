[vertex]
attribute vec3 aVertexPosition;
void main(void) {
  gl_Position = vec4(aVertexPosition, 1.0);
}

[face]
uniform highp vec4 Color;
void main(void) {
  gl_FragColor = Color;
}