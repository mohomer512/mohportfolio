import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 text-[24px] font-extrabold tracking-tight text-white">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-base font-black text-primary">
        MO
      </span>
      <span>
        Moh<span className="text-accent">Dev</span>
      </span>
    </Link>
  );
}

export default Logo;
