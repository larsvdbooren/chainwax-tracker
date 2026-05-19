import { bikes } from "./mock-data";

interface Bike {
  id: string;
  name: string;
  maxChainDistance: number;
  maxRotationDistance: number;
  activityType: string[];
  activeChainId: string;
  chains: Chain[];
}

interface Chain {
  id: string;
  name: string;
  totalDistance: number;
  rotationDistance: number;
  rotations: number;
  maxChainDistance: number;
  maxRotationDistance: number;
  waxAlert: number;
}

export type { Bike, Chain };
