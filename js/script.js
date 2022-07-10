const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const piece = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
const material = new THREE.MeshBasicMaterial({
  vertexColors: true
});
const positionAttribute = piece.getAttribute('position');
const colors = [];

const color = new THREE.Color();

if (sessionStorage.getItem("colors_added") == null) {
    for (let i = 0; i < positionAttribute.count; i += 6) {
        color.setHex(0xFFFFFF * Math.random());
        
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        
        sessionStorage.setItem(`${i} r`, color.r);
        sessionStorage.setItem(`${i} g`, color.g);
        sessionStorage.setItem(`${i} b`, color.b);
    }
    sessionStorage.setItem("colors_added", true);
} else {
    for (let i = 0; i < positionAttribute.count; i += 6) {
        color.r = sessionStorage.getItem(`${i} r`);
        color.g = sessionStorage.getItem(`${i} g`);
        color.b = sessionStorage.getItem(`${i} b`);
        
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
    }
}

// define the new attribute
piece.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
const cube = new THREE.Mesh(piece, material);

// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

x = 0
y = 0

maxX = 45
maxY = 45

function animate() {
    requestAnimationFrame( animate );

    width = document.body.clientWidth
    height = document.body.clientHeight

    cube.rotation.y = x/width - 0.5;
    cube.rotation.x = y/height - 0.5;

    renderer.render( scene, camera );
};

onmousemove = function(e){x = e.clientX;y = e.clientY}

animate();