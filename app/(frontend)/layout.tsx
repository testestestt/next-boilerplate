import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { Toaster } from "sonner";
import DisableDraftMode from "@/components/components/DisableDraftMode";
import "../main.css";

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <main className="antialiased bg-white text-black">
      {children}
      <Toaster />
        {isDraftMode && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      <SanityLive />
    </main>
  );
}
