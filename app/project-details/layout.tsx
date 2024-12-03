export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      {children}
    </section>
  );
}
