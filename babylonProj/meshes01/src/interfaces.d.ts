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

export interface SceneData {
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
