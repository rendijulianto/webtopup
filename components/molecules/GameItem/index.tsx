import Image from "next/image";
import Link from "next/link";
interface GameItemProps {
  thumbnail: string;
  icon: string;
  name: string;
  href: string;
  type: "Mobile" | "Desktop";
}

export default function GameItem(props: GameItemProps) {
  const { thumbnail, icon, name, type, href } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href={`/detail/${href}`}>
        <a>
          <div className="blur-sharp">
            <Image
              src={`/img/${thumbnail}`}
              className="thumbnail"
              width="205"
              height="270"
              alt=""
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <img src={`/icon/${icon}`} width="54" height="60" />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{name}</p>
                <p className="fw-light text-white m-0">{type}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
