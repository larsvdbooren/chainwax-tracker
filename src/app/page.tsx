import Image from "next/image";
import { bikes } from "@/lib/mock-data";

export default function Home() {
  const bikeElements = bikes.map((bike) => {
    const activeChain = bike.chains.find(
      (chain) => chain.id === bike.activeChainId,
    );
    const activeChainName = activeChain?.name;
    const activeChainDistance = activeChain?.rotationDistance.toFixed(2);

    let chainDistance = 0;
    const totalChainDistance = bike.chains
      .reduce((total, chain) => total + chain.totalDistance, 0)
      .toFixed(1);

    return (
      <li key={bike.id}>
        <h2 className="text-xl">Bike type: {bike.name}</h2>
        <p>Total chains: {bike.chains.length}</p>
        <p>Total distance: {totalChainDistance} km</p>
        <p>Current active chain: {activeChainName}</p>
        <p>Active chain distance: {activeChainDistance}</p>
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
