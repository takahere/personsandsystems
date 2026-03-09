export interface SectionData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  sceneConfig: SceneConfig;
}

export interface SceneConfig {
  cameraPosition: [number, number, number];
  objectType: "box" | "sphere" | "torus";
  objectColor: string;
  objectRotation: [number, number, number];
  ambientIntensity: number;
}

export interface SceneProps {
  activeIndex: number;
}

export interface OverlayProps {
  sections: SectionData[];
  activeIndex: number;
  onSectionChange: (index: number) => void;
}

export interface SectionItemProps {
  section: SectionData;
  isActive: boolean;
}
