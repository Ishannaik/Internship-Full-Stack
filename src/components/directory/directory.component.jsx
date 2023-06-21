import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "medicines",
    imageUrl: "https://static.toiimg.com/photo/94219075.cms",
    route: "shop/medicines",
  },
  {
    id: 2,
    title: "personal care",
    imageUrl:
      "https://img.freepik.com/free-photo/flat-lay-natural-self-care-products-composition_23-2148990019.jpg?w=2000",
    route: "shop/personal-care",
  },
  {
    id: 3,
    title: "health supplements",
    imageUrl:
      "https://images.pexels.com/photos/3850790/pexels-photo-3850790.jpeg?cs=srgb&dl=pexels-ready-made-3850790.jpg&fm=jpg",
    route: "shop/health-supplements",
  },
  {
    id: 4,
    title: "medical devices",
    imageUrl: "https://wallpaperaccess.com/full/740143.jpg",
    route: "shop/medical-devices",
  },
  {
    id: 5,
    title: "hygiene products",
    imageUrl:
      "https://wallpapercrafter.com/desktop/27241-toothbrush-toothpaste-hygiene-4k.jpg",
    route: "shop/hygiene-products",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
