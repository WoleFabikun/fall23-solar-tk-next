import Chat from "@/components/Chat";
import Setup from "@/components/Setup";
import { ProfileForm } from "@/components/UserForm";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-between">
      <ProfileForm/>
    </main>
  );
}
