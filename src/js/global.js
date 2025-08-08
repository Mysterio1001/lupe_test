const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("globe").appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 64, 64);
const texture = new THREE.TextureLoader().load("/src/assets/img/earth.jpg");
const material = new THREE.MeshStandardMaterial({ map: texture });
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

scene.add(new THREE.AmbientLight(0xffffff, 1));

const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

function addMarker(lat, lon) {
    const radius = 2;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    const markerGeo = new THREE.SphereGeometry(0.05, 8, 8);
    const markerMat = new THREE.MeshBasicMaterial({ color: 'red' });
    const marker = new THREE.Mesh(markerGeo, markerMat);
    marker.position.set(x, y, z);
    scene.add(marker);
}

addMarker(25.0330, 121.5654); // Taiwan
addMarker(35.6895, 139.6917); // Japan
addMarker(37.7749, -122.4194); // USA

function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.001;
    controls.update();
    renderer.render(scene, camera);
}
animate();