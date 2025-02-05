import './Heading.css';

interface HeadingProps {
  children?: React.ReactNode;
}

function Heading({ children }: HeadingProps) {
  return <h1 className="Heading">{children}</h1>;
}

export { Heading };
