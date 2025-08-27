
import Link from "next/link";
import { getFooterData } from "@/lib/data";

export default function Footer() {
  const { copyright, poweredBy } = getFooterData();
  return (
    <footer className="mt-auto border-t py-6 md:py-0">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row">
        <p>{copyright}</p>
        <div className="flex items-center gap-4">
            <Link href={poweredBy.href} className="hover:text-foreground">
                {poweredBy.text}
            </Link>
        </div>
      </div>
    </footer>
  );
}
