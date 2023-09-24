import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Card = ({ data }) => {
    const { id, Picture, Title, Category, Color_for_text, category_bg, card_bg } = data;

    return (
        <NavLink to={`/CardDetails/${id}`}>
            <div style={{ backgroundColor: card_bg }} className="card bg-base-100 shadow-xl">
                <figure><img src={Picture} alt="img" /></figure>
                <div className="pl-2 mt-2 pb-2">
                    <button style={{ backgroundColor: category_bg, padding: '5px', color: Color_for_text }} className='rounded'>{Category}</button>
                    <p style={{ color: Color_for_text }} className='font-semibold text-lg'>{Title}</p>
                </div>
            </div>
        </NavLink>
    );
};

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        Picture: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Category: PropTypes.string.isRequired,
        Color_for_text: PropTypes.string.isRequired,
        category_bg: PropTypes.string.isRequired,
        card_bg: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
