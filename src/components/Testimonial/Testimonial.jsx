
const Testimonial = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">What Our Client Says</h2>
                            <p className="dark:text-gray-600">These endorsements can highlight the benefits, quality, and reliability of a product or service, helping to persuade others to make a purchasing decision or take a desired action. Overall, testimonials serve as powerful marketing tools, offering authentic and persuasive endorsements from real customers that can influence the perceptions and decisions of others.</p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p>I couldn{`'`}t be happier with the service I received from Alex Estate. From start to finish, the team was professional, responsive, and went above and beyond to meet my needs. I highly recommend their services to anyone in need of their service!.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p>Working with [Company Name] was an absolute pleasure. Their attention to detail, prompt communication, and dedication to customer satisfaction truly set them apart. I{`'`}m thrilled with the results and would definitely work with them again in the future.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p>I{`'`}ve been a loyal customer of Alex State for years, and for good reason. Their products are top-notch, their customer service is exceptional, and they always go the extra mile to ensure I{`'`}m satisfied. I wouldn{`'`}t trust anyone else with my needs..</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p>I was hesitant to try Alex State at first, but I{`'`}m so glad I did. Not only did they exceed my expectations, but they also made the entire process seamless and stress-free. I can{`'`}t thank them enough for their professionalism and expertise. Highly recommended.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;