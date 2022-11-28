import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-4/5 mx-auto mb-20 flex-wrap ">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Mobile Store</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">A good phone should last you for at least several years, have a great camera, a nice screen, long battery life, and be fast enough to do all the work and social networking. So to help you figure out the best, we rounded up the best phone to buy in 2022. From its battery life to camera performance, each phone is remarkable.</p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34863.jpg?size=338&ext=jpg&uid=R69159675&ga=GA1.2.1652099493.1669227796&semt=sph" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34869.jpg?size=626&ext=jpg&uid=R69159675&ga=GA1.2.1652099493.1669227796&semt=sph" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://img.freepik.com/free-vector/realistic-shopping-online-landing-page_52683-37487.jpg?size=626&ext=jpg&uid=R69159675&ga=GA1.2.1652099493.1669227796&semt=sph" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1569040029205-a03a8b455808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                        </div>
                    </div>
                </div>
            </div>
            <Helmet>
                <title>Login</title>
            </Helmet>
        </section>
    );
};

export default AboutUs;