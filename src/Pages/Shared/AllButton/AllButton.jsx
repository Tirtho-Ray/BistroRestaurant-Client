import { NavLink } from "react-router-dom";

const AllButton = ({ button,title }) => {
  return (
    <NavLink to={`/shop`}>
      <div className="mb-2 md:mb-4 lg:mb-6">
        <button className="btn btn-outline border-0 border-b-4 lg:mt-3">
          {button}
        </button>
      </div>
    </NavLink>
  );
};

export default AllButton;
