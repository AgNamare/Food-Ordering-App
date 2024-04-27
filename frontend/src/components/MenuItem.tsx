import { MenuItem as menuType } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cartItem as CartItem } from "@/pages/DetailPage";

type Props = {
  menuItem: menuType;
  addToCart: ()=> void;
  removeFromCart: (cartItem:CartItem) => void
}
const MenuItem = ({menuItem, addToCart}:Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        Ksh {menuItem.price}
      </CardContent>
    </Card>
  )
}

export default MenuItem
