import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};

const SORT_OPTIONS = [
  {
    label: "Best match",
    value: "best",
  },
  {
    label: "Delivery price",
    value: "deliveryPrice",
  },
  {
    label: "Estimated Delivery Time",
    value: "estimatedDeliveryTime",
  },
];

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {
  const selectedSortLabel =
    SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
    SORT_OPTIONS[0].label;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Button variant="outline" className="w-full">
          Sort by: {sortOption}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            {selectedSortLabel}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropdown;
