import Marquee from "react-fast-marquee";
const AutoSlider = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex mt-2">
                <button className="btn btn-outline"> News </button>
                <Marquee className="ml-5 gap-2 text-slate-400 h-auto font-semibold" pauseOnHover={true} speed={100}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur architecto obcaecati cumque praesentium minus voluptates nobis ipsam iusto aliquid iure recusandae minima ab ex nulla voluptate, nesciunt doloremque animi aut.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis laudantium modi quisquam at dolores vero quos eveniet. Impedit necessitatibus eius, quasi numquam id aut nihil reprehenderit corporis non cupiditate.</p>
                </Marquee>
            </div>
        </div>
    );
};

export default AutoSlider;