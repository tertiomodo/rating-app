export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2 style={{ color: "#3d78ff" }}>About layout (app/about/layout.tsx)</h2>
      {children}
    </div>
  );
}
