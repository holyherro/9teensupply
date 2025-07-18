import { Card } from "../ui/card";
import CategoryIcon from "./CategoryIcon";
import Each from "@/utils/Each";
import { categories } from "@/constant";

export default function Categories() {
  return (
    <Card className="mt-4 overflow-hidden mb-4 animate-show-from-bottom">
      <h1 className="w-72 text-[1.2rem] h-14 px-4 bg-slate-800 flex items-center text-white rounded-tr-full rounded-br-full">Kategori</h1>

      <div className="p-4 flex flex-wrap items-center gap-2">
        <Each of={categories} render={({ icon, label, href }) => 
          <CategoryIcon icon={icon} label={label} href={href} />
        }/>
      </div>
    </Card>
  )
}
