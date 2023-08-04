import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Testimonial from './Testimonial';

function Coursel() {
    const testemonials = [
        <Testimonial Name='Reshmi Perin' Designation='CEO of Astrolight' Review='This was an urgent work. Waris readily agreed and finished it in few hours time. He understood very clearly my requirements. I am very happy with the end product. Will definitely contact him for future work.' Picture="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6a954a643e03e04261891476536ae690-876069711689735722105/JPEG_20230719_083201_267975137248450399.jpg" />,
        <Testimonial Name='Jake Bolling' Designation='Digital Marketer' Review='The seller got the job done as described. Unfortunately, it took longer than expected, but he did have the first draft in by the deadline.' Picture='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/21051244f3146fda85adea627ad46845-1512418889985/f91c6a25-718f-4c1b-a895-7e78454a170b.jpg' />,
        <Testimonial Name='Denmark' Designation='HR Manager at Innergy' Review='Quick turnaround. Very flexible. Second project with Warls and it went just as great as the last one.' Picture='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e42f1506669c561866d3dc67e389c516-1504022255532/cf5469b9-8171-4b9a-b594-9e519d9808aa.png' />,
    ]
    return (
        <>
            <div className="box">
                <Carousel useKeyboardArrows={true}>
                    {testemonials.map((URL, index) => (
                        <div className="slide">
                            {URL}
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default Coursel