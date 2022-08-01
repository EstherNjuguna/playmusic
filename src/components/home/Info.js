import React from "react";
import { Col } from "reactstrap";

const MEMBERS = [


  {
    name: "Adam Levine",
    Role: "Vocals",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/AdamLevine2011.jpg/800px-AdamLevine2011.jpg",
  },

  {
    name: "James Valentine",
 Role:  "Lead Guitarist",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://cdn.mos.cms.futurecdn.net/hnpcVEXpbdzJ2ig9wXEUTo-970-80.jpg.webp",
  },
  {
    name: "P J Morton",
  Role:"Keyboard instruments",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ665qnWfof_YtJ7L9O_6z-nogFKLHp4Qxz53Cz4Bm73nYRKXLn",
  },
  {
    name: "Mickey Madden",
    Role: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "http://wrightsonwood.com/wp-content/uploads/2012/10/michael-madden.jpg",
  },
  {
    name: "Jesse Carmichael",
    Role: "Instruments",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://m.media-amazon.com/images/I/71kOdoQru4L._AC_SL1240_.jpg",
  },
]


const OurMembers = () => {
  return (
    <>
      {MEMBERS.map((item, index) => (
        <Col  key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt={item.name} style={{height: '200px',width:'200px'}}  />

            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.Role}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
