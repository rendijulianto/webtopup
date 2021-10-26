import CategoryCard from "../../components/molecules/CategoryCard";
import OverItem from "../../components/molecules/OverItem";
import MemberNavbar from "../../components/organisms/MemberNavbar";

export default function OverView() {
  return (
    <>
      <section className="overview overflow-auto">
        <MemberNavbar menu="overview" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
            <div className="top-up-categories mb-30">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Top Up Categories
              </p>
              <div className="main-content">
                <div className="row">
                  <CategoryCard
                    name1="Game"
                    name2="Desktop"
                    total="15.000.000"
                    icon="/icon/gameDesktop.svg"
                  />
                  <CategoryCard
                    name1="Game"
                    name2="Mobile"
                    total="18.000.000"
                    icon="/icon/gameMobile.svg"
                  />
                  <CategoryCard
                    name1="Other"
                    name2="Categories"
                    total="80.000.000"
                    icon="/icon/otherCategories.svg"
                  />
                </div>
              </div>
            </div>
            <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
              </p>
              <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                  <thead>
                    <tr className="color-palette-1">
                      <th className="text-start" scope="col">
                        Game
                      </th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <OverItem
                      image="/img/overview-4.png"
                      game="Mobile Legend"
                      category="Mobile"
                      item="Mobile Legend Diamon 4"
                      price="10.000.000"
                      status="Pending"
                    />
                    <OverItem
                      image="/img/overview-4.png"
                      game="Mobile Legend"
                      category="Mobile"
                      item="Mobile Legend Diamon 4"
                      price="10.000.000"
                      status="Pending"
                    />
                    <OverItem
                      image="/img/overview-4.png"
                      game="Mobile Legend"
                      category="Mobile"
                      item="Mobile Legend Diamon 4"
                      price="10.000.000"
                      status="Pending"
                    />
                    <OverItem
                      image="/img/overview-4.png"
                      game="Mobile Legend"
                      category="Mobile"
                      item="Mobile Legend Diamon 4"
                      price="10.000.000"
                      status="Pending"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
