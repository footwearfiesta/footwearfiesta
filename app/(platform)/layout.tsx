import { Header } from "@/components/header";

interface LayoutProps {
  children: React.ReactNode;
}

function LayoutPage({ children }: LayoutProps) {
  return (
    <div className="max-w-[1200px] bg-sky-300 mx-auto">
      <Header />
      {children}
    </div>
  );
}

export default LayoutPage;
