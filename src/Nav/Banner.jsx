import PropTypes from 'prop-types';

const Banner = ( {clickHandel}) => {

 
    return (
        <div className=' w-full'>
            <div className=' relative'>
                <img className=' w-full h-[400px]' src={"https://i.ibb.co/HT9FjMq/african-american-man-speaking-to-group-970x580-resized.jpg"} alt="banner-img" />

                <div className=' bg-zinc-600 absolute bottom-0 opacity-90  w-full'>
                <div className=" h-[400px] ">
                 <div className="  text-center py-[150px] ">
                <h1 className="text-4xl font-bold mb-5">I Grow By Helping People In Need</h1>
                    <form onSubmit={clickHandel} action="" >
                    <input className=" py-1" type="text" name="search" placeholder="Search Here..."/><button className=" bg-[#FF444A] rounded-r-md px-1 py-1">Search</button>
                </form>
           </div>
        </div>
            </div>
            </div>
           
        </div>
    );
};

Banner.propTypes = {
    clickHandel: PropTypes.func.isRequired,
}

export default Banner;