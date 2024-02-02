import {Helmet} from "react-helmet-async";

const PageTitle: React.FC<{title: string}> = ({title}) => {
  return (
    <Helmet>
      <title>{title} | SoCio</title>
    </Helmet>
  );
};
export default PageTitle;
