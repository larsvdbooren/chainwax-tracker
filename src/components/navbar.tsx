import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav>
      <div className="w-full border-b">
        <div className="flex gap-3">
          <Button size="sm">Profile</Button>
          <p>Last synced 4 min ago</p>
          <Button variant="ghost" size="sm">
            Sync
          </Button>
        </div>
      </div>
    </nav>
  );
}
