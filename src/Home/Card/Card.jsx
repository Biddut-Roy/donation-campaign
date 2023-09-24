import PropTypes from 'prop-types';

const Card = ({ data }) => {
    const {id , Picture ,Title, Category} = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={Picture} alt="img" /></figure>
        <div className="card-body">
          <h2 className="card-title">{Category}</h2>
          <p>{Title}</p>
        </div>
      </div>
    );
};

export default Card;

Card.prototype = {
    data: PropTypes.object.isRequired,
}