import { RefreshCcw, User } from "lucide-react";
import { Button } from "./ui/button";
import Container from "./container";

export default function Navbar() {
  return (
    <nav className="w-full border-b py-4">
      <Container>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Chain Tracking</p>
          <div className="flex gap-3 items-center">
            <p className="text-xs text-gray-500">Last synced 4 min ago</p>
            <Button variant="ghost" size="sm">
              <RefreshCcw />
              Sync
            </Button>
            <Button size="sm">
              <User />
              Profile
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
