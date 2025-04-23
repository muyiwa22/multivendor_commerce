import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
      <div className="p-5">
        <div className="w-full flex justify-end">
          <ThemeToggle />
        </div>
        <h1 className="font-bold text-blue-500 font-barlow">Hello</h1>
        <Button  variant="destructive">Click Here</Button>
      </div>
  );
}
