import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import clsx from "clsx";

type BikeCardProps = {
  bikeName: string;
  percent: number;
  rotationDistance: number;
  level: string;
};

export default function BikeCard({
  bikeName,
  percent,
  rotationDistance,
  level,
}: BikeCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{bikeName}</CardTitle>
        <CardDescription>Bike overview:</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Current mileage: {rotationDistance} km</p>
        <p>Wear: {percent}%</p>
        <p className="text-green-600">Level: {level}</p>
      </CardContent>
    </Card>
  );
}
