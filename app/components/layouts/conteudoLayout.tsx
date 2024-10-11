export default function ConteudoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto max-w-7xl flex-grow">{children}</main>
  );
}
