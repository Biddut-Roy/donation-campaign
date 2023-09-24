

const Banner = () => {

 
    return (
        <div className=" h-[400px] bg-slate-400">
           <div className="  text-center py-[150px] ">
               <h1 className="text-4xl font-bold mb-5">I Grow By Helping People In Need</h1>
                <form action="">
                    <input type="text" placeholder="Search Here..."/><button className="btn btn-secondary">Search</button>
                </form>
           </div>
        </div>
    );
};

export default Banner;