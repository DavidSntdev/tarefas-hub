interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function ConteudoLayout({ children, className }: LayoutProps) {
  return (
    <main className={`container mx-auto max-w-[640px] flex-grow ${className}`}>
      {children}
    </main>
  );
}
