import { Item } from "./Item";

export const ItemList = ({ items }) =>
  items.map((item) => {
    return <Item key={item.id} item={item} />;
  });
