const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    
    vec3 color1 = vec3(250.0 / 255.0, 237.0 / 255.0, 203.0 / 255.0); 
    vec3 color2 = vec3(170.0 / 255.0, 139.0 / 255.0, 57.0 / 255.0);

    // Calculate the gradient color based on vUv
    vec3 gradientColor = mix(color1, color2, vUv.y);

    gl_FragColor = vec4(gradientColor, 1.0);
}

`;

export default fragmentShader;

/*

BLUE (C6DEF1 and 003C6B)
vec3 color1 = vec3(198.0 / 255.0, 222.0 / 255.0, 241.0 / 255.0); 
vec3 color2 = vec3(0.0 / 255.0, 60.0 / 255.0, 107.0 / 255.0);

GREEN (C9E4DE and 005240)
vec3 color1 = vec3(201.0 / 255.0, 228.0 / 255.0, 222.0 / 255.0);
vec3 color2 = vec3(0.0 / 255.0, 82.0 / 255.0, 64.0 / 255.0);

PURPLE (EDE6F7 and 8E6EBB)
vec3 color1 = vec3(237.0 / 255.0, 230.0 / 255.0, 247.0 / 255.0); 
vec3 color2 = vec3(142.0 / 255.0, 110.0 / 255.0, 187.0 / 255.0);

Orange (FFE3CF and CB7940)
vec3 color1 = vec3(255.0 / 255.0, 227.0 / 255.0, 207.0 / 255.0); 
vec3 color2 = vec3(203.0 / 255.0, 121.0 / 255.0, 64.0 / 255.0);

Yellow (FAEDCB and AA8B39)
vec3 color1 = vec3(250.0 / 255.0, 237.0 / 255.0, 203.0 / 255.0); 
vec3 color2 = vec3(170.0 / 255.0, 139.0 / 255.0, 57.0 / 255.0);

Pink (F2C6DE and 89004B)
vec3 color1 = vec3(242.0 / 255.0, 198.0 / 255.0, 222.0 / 255.0); 
vec3 color2 = vec3(137.0 / 255.0, 0.0 / 255.0, 75.0 / 255.0);

Red (FFC6C6 and A50000)
vec3 color1 = vec3(255.0 / 255.0, 198.0 / 255.0, 198.0 / 255.0); 
vec3 color2 = vec3(165.0 / 255.0, 0.0 / 255.0, 0.0 / 255.0);
*/