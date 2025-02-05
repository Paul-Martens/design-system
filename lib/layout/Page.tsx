import './Page.css';

interface PageProps {
  children?: React.ReactNode;
}

function Page({ children }: PageProps) {
  return <main className="Page">{children}</main>;
}

export { Page };
