// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";
import {
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    Color3,
    StandardMaterial,
    Mesh,
    Light,
    Camera,
    Engine,
    Texture,
    GroundMesh,
    SceneLoaderAnimationGroupLoadingMode
  } from "@babylonjs/core";

  
  function getMaterial(scene: Scene)
  {
  
  scene.ambientColor = new Color3(1, 1, 1);
  
  const myMaterial = new StandardMaterial("myMaterial", scene);
  myMaterial.diffuseColor = new Color3(1, 0, 1);
  myMaterial.specularColor = new Color3(0.5, 0.6, 0.87);
  myMaterial.emissiveColor = new Color3(1, 0.4, 0.5);
  myMaterial.ambientColor = new Color3(0.23, 0.98, 0.53);
  myMaterial.ambientTexture = new Texture("./assets/wood.jpg", scene);
  return myMaterial;
  
  }

   function getMaterial1(scene: Scene)
  {
  
  scene.ambientColor = new Color3(1, 1, 1);
  
  const myMaterial1 = new StandardMaterial("myMaterial1", scene);
  myMaterial1.diffuseColor = new Color3(1, 0, 1);
  myMaterial1.specularColor = new Color3(0.5, 0.6, 0.87);
  myMaterial1.emissiveColor = new Color3(1, 0.4, 0.5);
  myMaterial1.ambientColor = new Color3(0.23, 0.98, 0.53);
  myMaterial1.ambientTexture = new Texture("./assets/minecraftGrass.webp", scene);
  return myMaterial1;
  
  }


  function createBox(scene: Scene, myMaterial1: any) {
    let box = MeshBuilder.CreateBox("box",{size: 1}, scene);
    box.position.y = 3;
    box.material = myMaterial1;
    return box;
  }

   function createBox1(scene: Scene, myMaterial: any) {
    let box = MeshBuilder.CreateBox("box",{size: 3}, scene);
    box.position.y = 3;
    box.position.x = 4;
    box.material = myMaterial;
    return box;
  }

  function createBox2(scene: Scene, myMaterial: any) {
    let box = MeshBuilder.CreateBox("box",{size: 3}, scene);
    box.position.y = 3;
    box.position.x = -4;
    box.material = myMaterial;
    return box;
  }

  
  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    return light;
  }
  
  function createSphere(scene: Scene, myMaterial: any) {
    let sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 2, segments: 32 },
      scene,
    );
    sphere.position.y = 1;
    sphere.material = myMaterial;
    return sphere;
  }
  
  function createGround(scene: Scene, myMaterial1: any) {
    let ground = MeshBuilder.CreateGround(
      "ground",
      { width: 10, height: 10 },
      scene,
      
    );
    ground.material = myMaterial1;
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
      box?: Mesh;
      light?: Light;
      sphere?: Mesh;
      ground?: Mesh;
      camera?: Camera;
    }
  
    let that: SceneData = { scene: new Scene(engine) };
    // that.scene.debugLayer.show();
   
    const mat1 = getMaterial1(that.scene);
    const mat2 = getMaterial(that.scene);
    
    that.box = createBox(that.scene, mat1);
    that.box = createBox1(that.scene, mat2);
    that.box = createBox2(that.scene, mat2);
    that.light = createLight(that.scene);
    that.sphere = createSphere(that.scene, mat1);
    that.ground = createGround(that.scene, mat2);
    that.camera = createArcRotateCamera(that.scene);
    
    return that;
  }
