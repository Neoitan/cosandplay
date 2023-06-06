import Header from "../../components/Header";
import "./Conventions.scss";

const Conventions = () => {
  return (
    <div className="bodyconv">
      <div className="body">
        <Header selectedTabIndex={1} />
        <div className="activities"></div>
      </div>
    </div>
  );
};

export default Conventions;
