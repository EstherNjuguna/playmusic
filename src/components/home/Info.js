import React from "react";


const MEMBERS = [


  {
    name: "Adam Levine",
    Role: "Vocals",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://images.hola.com/us/images/0270-13dcf166a152-2ca06f37cc73-1000/horizontal-1200/baby2baby-10-year-gala-presented-by-paul-mitchell-arrivals.jpg",
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
    imgUrl: "https://images.app.goo.gl/Eb3xe8jwZHefoPuo8https://static.wikia.nocookie.net/maroon5/images/9/91/Mickey_madden.jpg/revision/latest/scale-to-width-down/250?cb=20150404012342",
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
        <div  lg="3" md="3" sm="4" xs="6" key={index} className="col mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt={item.name}  />

              
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.Role}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default OurMembers;
