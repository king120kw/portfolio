import React from 'react';

export const Quote: React.FC = () => {
    return (
        <div className="bg-[#ECF1F5] py-24 px-5 relative">
            <img
                src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_58/v1499773465/icon_quote_w2o0dz.svg"
                className="h-8 w-8 mb-8 opacity-30 mx-auto"
                alt="quotation marks"
            />
            <h3 className="font-['Roboto_Condensed'] text-[clamp(1.5rem,4vw,2.5rem)] font-light tracking-[0.15em] text-[#1a2332] my-8 leading-relaxed">
                Building sustainable futures.<br />One community at a time.
            </h3>
            <p className="text-base text-[#8b9db0]">Let's create lasting impact together</p>
        </div>
    );
};
