// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";
import {
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    Mesh,
    Light,
    Camera,
    Engine,
    StandardMaterial,
    Texture,
    Color3,
    CubeTexture
  } from "@babylonjs/core";

  
  function getMaterial(scene: Scene)
  {
  
  scene.ambientColor = new Color3(1, 1, 1);
  
  const myMaterial = new StandardMaterial("myMaterial", scene);
  myMaterial.diffuseColor = new Color3(1, 0, 1);
  myMaterial.specularColor = new Color3(0.5, 0.6, 0.87);
  myMaterial.emissiveColor = new Color3(1, 0.4, 0.5);
  myMaterial.ambientColor = new Color3(0.23, 0.98, 0.53);
  myMaterial.ambientTexture = new Texture("./assets/brittle.png", scene);
  return myMaterial;
  
  }

  function getMaterial1(scene: Scene)
  {
  
  scene.ambientColor = new Color3(1, 1, 1);
  
  const myMaterial = new StandardMaterial("myMaterial", scene);
  myMaterial.diffuseColor = new Color3(1, 0, 1);
  myMaterial.specularColor = new Color3(0.5, 0.6, 0.87);
  myMaterial.emissiveColor = new Color3(1, 0.4, 0.5);
  myMaterial.ambientColor = new Color3(0.23, 0.98, 0.53);
  myMaterial.ambientTexture = new Texture("./assets/giant.png", scene);
  return myMaterial;
  
  }

  function getMaterial2(scene: Scene)
  {
  
  scene.ambientColor = new Color3(1, 1, 1);
  
  const myMaterial = new StandardMaterial("myMaterial", scene);
  myMaterial.diffuseColor = new Color3(1, 0, 1);
  myMaterial.specularColor = new Color3(0.5, 0.6, 0.87);
  myMaterial.emissiveColor = new Color3(1, 0.4, 0.5);
  myMaterial.ambientColor = new Color3(0.23, 0.98, 0.53);
  myMaterial.ambientTexture = new Texture("./assets/sun.png", scene);
  return myMaterial;
  
  }

    function getMaterial3(scene: Scene)
  {
  
  scene.ambientColor = new Color3(1, 1, 1);
  
  const myMaterial = new StandardMaterial("myMaterial", scene);
  myMaterial.diffuseColor = new Color3(1, 0, 1);
  myMaterial.specularColor = new Color3(0.5, 0.6, 0.87);
  myMaterial.emissiveColor = new Color3(1, 0.4, 0.5);
  myMaterial.ambientColor = new Color3(0.23, 0.98, 0.53);
  myMaterial.ambientTexture = new Texture("./assets/dark.png", scene);
  return myMaterial;
  
  }

    function getMaterial4(scene: Scene)
  {
  
  scene.ambientColor = new Color3(1, 1, 1);
  
  const myMaterial = new StandardMaterial("myMaterial", scene);
  myMaterial.diffuseColor = new Color3(1, 0, 1);
  myMaterial.specularColor = new Color3(0.5, 0.6, 0.87);
  myMaterial.emissiveColor = new Color3(1, 0.4, 0.5);
  myMaterial.ambientColor = new Color3(0.23, 0.98, 0.53);
  myMaterial.ambientTexture = new Texture("./assets/ur.png", scene);
  return myMaterial;
  
  }
  
  function createCone(scene: Scene, myMaterial: any)
  {
    const cone = MeshBuilder.CreateCylinder("cylinder", {diameterTop: 0, diameterBottom: 5, height: 5 }, scene);
    cone.position.x = 3;
    cone.position.y = 12;
    cone.material = myMaterial;
    return cone;
  }

  function createCylinder(scene: Scene) {
    let cylinder = MeshBuilder.CreateCylinder(
      "cylinder",
      { height: 5, diameter: 3, },
      scene
    );
    cylinder.position.x = 1;
    cylinder.position.y = 4;
    cylinder.position.z = 20;
  
    var texture = new StandardMaterial("wood", scene);
    texture.ambientTexture = new Texture("./assets/wood.jpg", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    cylinder.material = texture;
    return cylinder;
  }

  
  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    return light;
  }
  
  function createSphere(scene: Scene, myMaterial2: any) {
    let sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 15, segments: 32 },
      scene,
    );
    sphere.position.x = -2;
    sphere.position.y = 2;
    sphere.material = myMaterial2;
    return sphere;
  }

   function createSphere1(scene: Scene, myMaterial: any) {
    let sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 7, segments: 32 },
      scene,
    );
    sphere.position.x = -14;
    sphere.position.y = 4;
    sphere.material = myMaterial;
    return sphere;
  }

  function createSphere2(scene: Scene, myMaterial1: any) {
    let sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 7, segments: 32 },
      scene,
    );
    sphere.position.x = -21;
    sphere.position.y = 4;
    sphere.position.z = 7;
    sphere.material = myMaterial1;

    return sphere;
  }

  function createSphere3(scene: Scene, myMaterial1: any) {
    let sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 7, segments: 32 },
      scene,
    );
    sphere.position.x = 21;
    sphere.position.y = 4;
    sphere.position.z = 7;
    sphere.material = myMaterial1;

    return sphere;
  }

   function createSphere4(scene: Scene, myMaterial1: any) {
    let sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 7, segments: 32 },
      scene,
    );
    sphere.position.x = 21;
    sphere.position.y = 4;
    sphere.position.z = -21;
    sphere.material = myMaterial1;

    return sphere;
  }




  function createSky(scene: Scene) {
    const skybox = MeshBuilder.CreateBox("skyBox", { size: 150 }, scene);
    const skyboxMaterial = new StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new CubeTexture(
      "./assets/space.png",
      scene
    );
    skyboxMaterial.reflectionTexture.coordinatesMode =
      Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
    skyboxMaterial.specularColor = new Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
    return skybox;
  }
  
  function createGround(scene: Scene) {
    let ground = MeshBuilder.CreateGround(
      "ground",
      { width: 12, height: 12 },
      scene,
    );
    return ground;
  }
  
  function createArcRotateCamera(scene: Scene) {
    let camAlpha = -Math.PI / 2,
      camBeta = Math.PI / 2.5,
      camDist = 10,
      camTarget = new Vector3(0, 0, 0);
    let camera = new ArcRotateCamera(
      "camera1",
      camAlpha,
      camBeta,
      camDist,
      camTarget,
      scene,
    );
    camera.attachControl(true);
    return camera;
  }
  
  export default function createStartScene(engine: Engine) {
    interface SceneData {
      scene: Scene;
      cylinder?: Mesh;
      cone?: Mesh;
      light?: Light;
      sphere?: Mesh;
      ground?: Mesh;
      sky?: Mesh;
      camera?: Camera;
    }
  
    let that: SceneData = { scene: new Scene(engine) };
    // that.scene.debugLayer.show();
  
    const mat = getMaterial(that.scene);
    const mat1 = getMaterial1(that.scene);
    const mat2 = getMaterial2(that.scene);
    const mat3 = getMaterial3(that.scene);
    const mat4 = getMaterial4(that.scene);
    
    that.cylinder = createCylinder(that.scene);
    that.cone = createCone(that.scene, mat);
    that.light = createLight(that.scene);
    that.sphere = createSphere(that.scene, mat2);
    that.sphere = createSphere1(that.scene, mat);
    that.sphere = createSphere2(that.scene, mat1);
    that.sphere = createSphere3(that.scene, mat3);
    that.sphere = createSphere4(that.scene, mat4);
    that.sky = createSky(that.scene);
    that.camera = createArcRotateCamera(that.scene);
    return that;
  }
