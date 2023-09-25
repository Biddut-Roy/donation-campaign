import PropTypes from 'prop-types';

const Banner = ( {clickHandel}) => {

 
    return (
        <div className=" h-[400px] bg-slate-400">
           <div className="  text-center py-[150px] ">
               <h1 className="text-4xl font-bold mb-5">I Grow By Helping People In Need</h1>
                <form onSubmit={clickHandel} action="" >
                    <input className=" py-1" type="text" name="search" placeholder="Search Here..."/><button className=" bg-[#FF444A] rounded-r-md px-1 py-1">Search</button>
                </form>
           </div>
        </div>
    );
};

Banner.propTypes = {
    clickHandel: PropTypes.func.isRequired,
}

export default Banner;