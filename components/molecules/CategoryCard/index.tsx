import Image from "next/image";

interface CategoryCardProps {
  name1: string;
  name2: string;
  icon: string;
  total: string;
}
export default function CategoryCard(props: CategoryCardProps) {
  const { name1, name2, total, icon } = props;
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={icon} height={60} width={60} />
          <p className="color-palette-1 mb-0 ms-12">
            {name1} <br /> {name2}
          </p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">Rp {total}</p>
        </div>
      </div>
    </div>
  );
}
