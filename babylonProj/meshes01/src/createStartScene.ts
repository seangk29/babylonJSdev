//import "@babylonjs/core/Debug/debugLayer";
//import "@babylonjs/inspector";
import {
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    PointLight,
    SpotLight,
    DirectionalLight,
    MeshBuilder,
    Mesh,
    Light,
    Camera,
    Engine,
    StandardMaterial, 
    Color3,
    ShadowGenerator,
    ThinAnaglyphPostProcess,
    SceneComponentConstants,
    Material,
    grainPixelShaderWGSL,
    Texture,
  } from "@babylonjs/core";



function createPointShadows(light: PointLight, sphere: Mesh ,box: Mesh){
    const shadower = new ShadowGenerator(1024, light);
    const sm : any = shadower.getShadowMap();
    sm.renderList.push(sphere, box);

    shadower.setDarkness(0.2);
    shadower.useBlurExponentialShadowMap = true;
    shadower.blurScale = 4;
    shadower.blurBoxOffset = 1;
    shadower.useKernelBlur = true;
    shadower.blurKernel = 64;
    shadower.bias = 0;
    return shadower;
}

function createDirectShadows(light: DirectionalLight, sphere: Mesh ,box: Mesh){
    const shadower = new ShadowGenerator(1024, light);
    const sm : any = shadower.getShadowMap();
    sm.renderList.push(sphere, box);

    shadower.setDarkness(0.2);
    shadower.useBlurExponentialShadowMap = true;
    shadower.blurScale = 4;
    shadower.blurBoxOffset = 1;
    shadower.useKernelBlur = true;
    shadower.blurKernel = 64;
    shadower.bias = 0;
    return shadower;
}



function getMaterial(scene: Scene)
{

scene.ambientColor = new Color3(1, 1, 1);

const myMaterial = new StandardMaterial("myMaterial", scene);
myMaterial.diffuseColor = new Color3(1, 0, 1);
myMaterial.specularColor = new Color3(0.5, 0.6, 0.87);
myMaterial.emissiveColor = new Color3(1, 0.4, 0.5);
myMaterial.ambientColor = new Color3(0.23, 0.98, 0.53);
myMaterial.ambientTexture = new Texture("assets/textures/grass.png", scene);
return myMaterial;

}


//mesh.material = myMaterial;

  function createSphere(scene: Scene) {
    const sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 2, diameterY: 3,  segments: 5 },
      scene,
    );
    
    sphere.position.x = 0;
    sphere.position.y = 1;
    return sphere;
  }
  
  
  function createBox(scene: Scene, myMaterial: any) {
    const box = MeshBuilder.CreateBox("box",{size: 1}, scene);
    box.position.x = 3;
    box.position.y = 1;
    box.material = myMaterial;
    return box;
  }

  

  function createHemisphericLight(scene: Scene ){
    const light:HemisphericLight = new HemisphericLight("light", new Vector3(1, 10, 0),scene);
    light.intensity = 0.3;
    light.diffuse = new Color3(1, 0, 0);
    light.specular = new Color3(0, 1, 0);
    light.groundColor = new Color3(0, 1, 0);
    return light;
}

function createPointLight(scene: Scene ){
    const light = new PointLight("light", new Vector3(-1, 1, 0),scene);
    light.position = new Vector3(5, 20, 10);
    light.intensity = 0.3;
    light.diffuse = new Color3(0.5, 1, 1);
    light.specular = new Color3(0.8, 1, 1);
    return light;
}

function createDirectionalLight(scene: Scene ){
    const light = new DirectionalLight("light", new Vector3(-0.2, -0.5, -0.2),scene);
    light.position = new Vector3(20, 40, 20);
    light.intensity = 0.7;
    light.diffuse = new Color3(1, 0, 0);
    light.specular = new Color3(0, 1, 0);
    return light;
}

function createSpotLight(scene: Scene ){
    const light = new SpotLight("light", new Vector3(1, 5, -3), 
        new Vector3(0, 0, 1), Math.PI / 3, 20, scene);
    light.intensity = 0.5;
    light.diffuse = new Color3(1, 0, 0);
    light.specular = new Color3(0, 1, 0);
    return light;
}


  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    return light;
  }

  function createCylinder(scene: Scene)
  {
    const cylinder = MeshBuilder.CreateCylinder("cylinder", {diameter: 1, height: 2, arc: 0.5 }, scene);
    cylinder.position.x = 5;
    cylinder.position.y = 1;
    return cylinder;
  }

  function createCone(scene: Scene)
  {
    const cone = MeshBuilder.CreateCylinder("cylinder", {diameterTop: 0, diameterBottom: 1, height: 2 }, scene);
    cone.position.x = 7;
    cone.position.y = 1;
    return cone;
  }

   function createTriangle(scene: Scene)
  {
    const triangle = MeshBuilder.CreateCylinder("cylinder", {diameter: 1, height: 2, tessellation: 3}, scene);
    triangle.position.x = 9;
    triangle.position.y = 1;
    return triangle;
  }
  
  function createCapsule(scene: Scene)
  {
    const capsule = MeshBuilder.CreateCapsule("capsule", {radius: 0.5, height: 2, tessellation: 3, subdivisions: 4}, scene);
    capsule.position.x = -3;
    capsule.position.y = 1;
    return capsule;
  }


  
  function createGround(scene: Scene){
    let ground = MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
    var groundMaterial = new StandardMaterial("groundMaterial", scene);
    groundMaterial.backFaceCulling = false;
    ground.material = groundMaterial;
    ground.receiveShadows = true;
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
      hemiLight?: HemisphericLight;
      direct?: DirectionalLight,
      point?: PointLight;
      spot?: SpotLight,
      sphere?: Mesh;
      cylinder?: Mesh;
      cone?: Mesh;
      triangle?: Mesh;
      capsule?: Mesh;
      ground?: Mesh;
      camera?: Camera;
    }
  
    let that: SceneData = { scene: new Scene(engine) };
    //that.scene.debugLayer.show();
  
    
    const mat1 = getMaterial(that.scene);
    that.box = createBox(that.scene, mat1);
    that.hemiLight = createHemisphericLight(that.scene);
    that.light = createLight(that.scene);
    that.point = createPointLight(that.scene);
    that.spot = createSpotLight(that.scene);
    that.sphere = createSphere(that.scene);
    that.cylinder = createCylinder(that.scene);
    that.cone = createCone(that.scene);
    that.triangle = createTriangle(that.scene);
    that.capsule = createCapsule(that.scene);
    that.direct = createDirectionalLight(that.scene);
    that.ground = createGround(that.scene);
    that.camera = createArcRotateCamera(that.scene);
    createPointShadows(that.point, that.box, that.sphere);
    createDirectShadows(that.direct, that.box, that.sphere);
    return that;
  }
