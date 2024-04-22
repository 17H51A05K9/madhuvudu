import {
  NewspaperIcon,
  GlobeAltIcon,
  UserGroupIcon,
  FilterIcon,
  BadgeCheckIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/6206720.jpg";
import benefitTwoImg from "../public/img/19197628.jpg";

const benefitOne = {
  title: "Expertise in the export process",
  desc: " We have lot's of experience exporting goods, so we know the ins and outs of the process.We can help you navigate the complex regulations and paperwork involved, and we can ensure that your goods are exported safely and efficiently.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Wide network of suppilers",
      desc: "We have relationships with many suppliers across India, we can help you find the products you need at the best possible prices",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Hassle free Paperwork",
      desc: "We'll handle all the complex paperwork that needs to be done, for you.",
      icon: <NewspaperIcon />,
    },
    {
      title: "Personalized service",
      desc: "We work with each client individually to understand their specific needs and requirements. We'll work with you to develop a custom export plan that meets your needs.",
      icon: <UserGroupIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Unmatched quality",
  desc: "We understand that the quality of goods is important to our clients. We are committed to providing our clients with the highest quality goods possible. We believe that our focus on quality is one of the things that makes us the best choice for exporting goods.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "We work with only the best suppliers.",
      desc: "We have a strict quality control process that we put all of our suppliers through. We only work with suppliers who meet our high standards for quality.",
      icon: <FilterIcon />,
    },
    {
      title: "We inspect all of our goods before they are shipped.",
      desc: "We have a team of inspectors who carefully inspect all of our goods before they are shipped. This ensures that only the highest quality goods are imported.",
      icon: <BadgeCheckIcon />,
    },
    {
      title: "We offer a satisfaction guarantee.",
      desc: "We are so confident in the quality of our goods that we offer a satisfaction guarantee. If you are not satisfied with your goods, you can return them for a full refund.",
      icon: <EmojiHappyIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
