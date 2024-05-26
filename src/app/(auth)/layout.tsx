export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-center bg-primary-50 bg-dotted-pattern absolute left-0 top-0 z-[-1] min-h-screen w-full bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
}
