"use client"

import Chat from "@/components/Chat";
import Setup from "@/components/Setup";
import { ProfileForm } from "@/components/ProfileForm";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');

  return (
    <main className="h-screen w-full flex flex-col items-center justify-between">
      <Setup latitude={latitude} longitude={longitude} />
    </main>
  );
}
