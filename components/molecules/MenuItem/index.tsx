import Link from "next/link";
import Image from "next/image";
interface MenuITemProps {
  name: string;
  image: string;
  href: string;
  active: boolean;
}
export default function MenuItem(props: MenuITemProps) {
  const { name, image, href, active = false } = props;

  return (
    <div className={"item mb-30 " + (active ? "active" : "")}>
      <img src={image} width={25} height={25} />
      <p className="item-title m-0 ">
        <Link href={href}>
          <a
            style={{ marginLeft: 15 }}
            className="text-lg text-decoration-none"
          >
            {name}
          </a>
        </Link>
      </p>
    </div>
  );
}
