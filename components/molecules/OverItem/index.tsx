interface OverItemProps {
  image: string;
  game: string;
  category: "Mobile" | "Desktop" | "Other Category";
  item: string;
  price: string;
  status: "Pending" | "Success" | "Processing" | "Cancel";
}
export default function OverItem(props: OverItemProps) {
  const { image, game, category, item, price, status } = props;
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={image}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {game}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">Rp {price}</p>
      </td>
      <td>
        <div>
          <span className="float-start icon-status pending"></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
