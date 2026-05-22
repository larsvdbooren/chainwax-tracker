"use client";

import Image from "next/image";
import { bikes } from "@/lib/mock-data";
import getWaxWear from "@/lib/chain-wear";
import BikeCard from "@/components/bike-card";
import Container from "@/components/container";
import { ArrowUpDown, LayoutGrid, List, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

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

  type ViewType = "list" | "grid";
  const [view, setView] = useState<ViewType>("list");

  return (
    <Container>
      <div className="pt-16">
        <main className="bg-gray-50 rounded-2xl p-1 pt-3">
          <div className="w-full flex justify-between items-center pl-2 mb-4">
            <h1 className="text-2xl font-semibold">Your bikes</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      {" "}
                      <span className="text-sm">Order</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40" align="start">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>{"Km > km"}</DropdownMenuItem>
                      <DropdownMenuItem>{"A-z"}</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  size="icon-sm"
                  variant={view === "grid" ? "outline" : "ghost"}
                  onClick={() => setView("grid")}
                >
                  <LayoutGrid />
                </Button>
                <Button
                  size="icon-sm"
                  variant={view === "list" ? "outline" : "ghost"}
                  onClick={() => setView("list")}
                >
                  <List />
                </Button>
              </div>
              <Button>
                <Plus />
                Add bike
              </Button>
            </div>
          </div>
          <ul>{bikeElements}</ul>
        </main>
      </div>
    </Container>
  );
}
