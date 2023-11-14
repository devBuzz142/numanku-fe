import KUKI_OUTTER_0 from '../assets/kuki_images/kuki_outter_0.png';
import KUKI_OUTTER_1 from '../assets/kuki_images/kuki_outter_1.png';
import KUKI_OUTTER_2 from '../assets/kuki_images/kuki_outter_2.png';
import KUKI_INNER_0 from '../assets/kuki_images/kuki_inner_0.png';
import KUKI_INNER_1 from '../assets/kuki_images/kuki_inner_1.png';
import KUKI_INNER_2 from '../assets/kuki_images/kuki_inner_2.png';

export const TEMP_KUKIES = (number = 40) => {
  return Array.from(Array(number), (_, idx) => ({
    id: idx,
    writer: `작성자${idx}`,
    content: `쿠키${idx}`,
    isPublic: Math.random() > 0.5,
    isAnonymous: Math.random() > 0.5,
    isLiked: false,
    likeCount: Math.floor(Math.random() * 100),
    outterImage: Math.floor(Math.random() * 3),
    innerImage: Math.floor(Math.random() * 3),
    left: Math.floor(Math.random() * 600) + 20,
  }));
};

export const KUKI_IMAGES = {
  outter: [KUKI_OUTTER_0, KUKI_OUTTER_1, KUKI_OUTTER_2],
  inner: [KUKI_INNER_0, KUKI_INNER_1, KUKI_INNER_2],
};
