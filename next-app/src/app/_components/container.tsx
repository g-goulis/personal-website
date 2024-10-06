type Props = {
  children?: React.ReactNode;
};

/**
 * The main container for the page
 *
 * @param children
 * @constructor
 */
const Container = ({ children }: Props) => {
  return <div className="container mx-20">{children}</div>;
};

export default Container;
