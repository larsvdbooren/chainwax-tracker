import Image from "next/image";
import { bikes } from "@/lib/mock-data";
import getWaxWear from "@/lib/chain-wear";
import BikeCard from "@/components/bike-card";

export default function Home() {
  const bikeElements = bikes.map((bike) => {
    const activeChain = bike.chains.find(
      (chain) => chain.id === bike.activeChainId,
    );
    if (!activeChain) return null;

    const activeChainName = activeChain.name;
    const activeChainDistance = activeChain?.rotationDistance.toFixed(2);

    const chainWear = getWaxWear(
      activeChain.rotationDistance,
      activeChain.maxRotationDistance,
    );

    const totalChainDistance = bike.chains
      .reduce((total, chain) => total + chain.totalDistance, 0)
      .toFixed(1);

    return (
      <li key={bike.id}>
        <BikeCard
          bikeName={bike.name}
          percent={chainWear.percent}
          rotationDistance={Number(activeChain.rotationDistance.toFixed(2))}
          level={chainWear.level}
        />
      </li>
    );
  });

  return (
    <div>
      <main>
        <h1 className="text-2xl font-bold">My bikes:</h1>
        <ul>{bikeElements}</ul>
      </main>
    </div>
  );
}
