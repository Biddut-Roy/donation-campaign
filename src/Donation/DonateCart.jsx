import PropTypes from 'prop-types';

const DonateCart = ({ donate }) => {

    const { Picture, Title, Category, Color_for_text, category_bg, card_bg , Price } = donate;


    return (
        <div className=" mt-4">
        <div style={{backgroundColor: card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border shadow-md">
<div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
<img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
  alt="image"
  className="h-full w-full object-cover"
/>
</div>
<div className="p-6">
<button style={{color:Color_for_text, backgroundColor: category_bg}} className="mb-4 block font-sans text-base font-semibold uppercase antialiased px-1 py-1 ">
  {Category}
  </button>
<h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
  {Title}
</h4>
<p style={{ color: Color_for_text}} className="mb-8 block font-sans text-base font-normal leading-relaxed  antialiased">
 {Price}
</p>
<a className="inline-block" href="#">
  <button style={{backgroundColor: Color_for_text}}
    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
  >
    View Details
  </button>
</a>
</div>
</div>
    </div>
    );
};

DonateCart.propTypes = {
    donate: PropTypes.shape({
        Picture: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Category: PropTypes.string.isRequired,
        Color_for_text: PropTypes.string.isRequired,
        category_bg: PropTypes.string.isRequired,
        card_bg: PropTypes.string.isRequired,
        Price: PropTypes.number.isRequired
    }).isRequired,
};

export default DonateCart;