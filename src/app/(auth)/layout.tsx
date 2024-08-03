import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-center bg-primary-50 absolute left-0 top-0 z-[-1] min-h-screen w-full bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}
      <Toaster />
    </div>
  );
}
