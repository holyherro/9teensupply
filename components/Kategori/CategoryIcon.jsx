import Link from "next/link";

export default function CategoryIcon({ icon, label, href }) {
  return (
    <Link href={href} className="h-24 w-24 flex flex-col items-center justify-center gap-1 p-2 bg-card rounded-xl border text-card-foreground shadow">
      {icon}

      <p className="text-[.8rem] text-center">{label}</p>
    </Link>
  )
}
