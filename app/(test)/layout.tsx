interface LayoutProps {
  children: React.ReactNode;
}

function LayoutPage({ children }: LayoutProps) {
  return <div className="max-w-[1600px] bg-sky-600 mx-auto">{children}</div>;
}

export default LayoutPage;
