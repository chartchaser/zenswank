import Link from "next/link";

interface ProductButtonProps {
  name: string;
  children: React.ReactNode;
}

export default function ProductButton({ name, children }: ProductButtonProps) {
  return (
    <Link href={`/curated-gift-boxes/${name}`}>
      {children}
    </Link>
  );
}
