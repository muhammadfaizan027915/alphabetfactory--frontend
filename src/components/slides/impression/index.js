import { useState } from "react";

const images = [
  {
    id: 1,
    src: 'https://www.bwallpaperhd.com/wp-content/uploads/2021/01/EdinburghSkyline-1366x768.jpg',
    description: "Management Sciences",
  },
  {
    id: 2,
    src: 'https://th.bing.com/th/id/R.3a1ea55f036ad24c9213505352c2d629?rik=tbef6ff%2bgNvd7A&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fporsche-911-rear-4k-hu.jpg&ehk=KToeObs6%2fVoJ4z2K6P43St76w%2bxfsXkt5CtxZYAaX6k%3d&risl=&pid=ImgRaw&r=0',
    description: "Medical Sciences",
  },
  {
    id: 3,
    src: 'https://www.bwallpaperhd.com/wp-content/uploads/2021/01/EdinburghSkyline-1366x768.jpg',
    description: "Islamic Studies",
  },
  {
    id: 4,
    src: 'https://www.bwallpaperhd.com/wp-content/uploads/2021/01/EdinburghSkyline-1366x768.jpg',
    description: "Computer Sciences",
  },

  {
    id: 5,
    src: 'https://www.bwallpaperhd.com/wp-content/uploads/2021/01/EdinburghSkyline-1366x768.jpg',
    description: "Computer Sciences",
  },

  {
    id: 6,
    src: 'https://www.bwallpaperhd.com/wp-content/uploads/2021/01/EdinburghSkyline-1366x768.jpg',
    description: "Computer Sciences",
  },

  {
    id: 7,
    src: 'https://www.bwallpaperhd.com/wp-content/uploads/2021/01/EdinburghSkyline-1366x768.jpg',
    description: "Computer Sciences",
  },
];

const Impression = ({slideAnimation}) => {
  const [image, setImage] = useState(images[0]);
  const onclickImage = ({ target: { id } }) => {
    setImage(images.find((image) => image.id === Number(id)));
  };

  return (
    <div className={`${slideAnimation} min-h-[786px] bg-white p-4 md:p-8`}>
      <h1 className="text-4xl font-bold">Impression</h1>
      <div className={`mt-4 max-h-[500px] overflow-hidden relative`} >
        <img src={image.src} className="object-cover" />
        <p className="w-full p-2 bg-black text-center text-white font-bold bg-opacity-60 absolute left-0 bottom-0">
          {image?.description}
        </p>
      </div>
      <div className="mt-4 overflow-x-auto whitespace-nowrap text-center">
        {images.map((image) => (
          <button
            key={image.id}
            id={image.id}
            onClick={onclickImage}
            className={`h-16 w-28 md:h-20 md:w-40 mx-1 bg-cover`}
            style={{backgroundImage: `url(${image.src})`}}
          >
          </button>
        ))}
      </div>
    </div>
  );
};

export default Impression;
