import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
      <div className="p-5">
        <div className="w-full flex gap-x-5 justify-end">
          <UserButton />
          <ThemeToggle />
        </div>
        <h1 className="font-bold text-blue-500 font-barlow">Home Page</h1>
      </div>
  );
}
