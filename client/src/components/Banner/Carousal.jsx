import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousal = ({ brand }) => {
  const [campaignsData, setCampaignsData] = useState();
  // console.log("brand in caro ", brand);

  useEffect(() => {
    fetch(`https://server-assignment-10-delta.vercel.app/campaigns/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        setCampaignsData(data[0].slides);
      });
  }, []);

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        {campaignsData &&
          campaignsData.map((campaign, idx) => (
            <SwiperSlide key={idx}>
              <img className='mx-auto' src={campaign} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

Carousal.propTypes = {
  brand: PropTypes.string,
};
export default Carousal;
