import Image from "next/image";
import MenuItem from "../../molecules/MenuItem";
interface MemberNavbarProps {
  menu: string;
}
export default function MemberNavbar(props: MemberNavbarProps) {
  const { menu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <div className="user text-center pb-50 pe-30">
          <img
            src="/img/avatar-1.png"
            width="90"
            height="90"
            className="img-fluid mb-20"
          />
          <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
          <p className="color-palette-2 m-0">shayna@anne.com</p>
        </div>
        <div className="menus">
          <MenuItem
            name="Overview"
            image="/icon/overview.svg"
            href="/member/"
            active={menu == "overview" ? true : false}
          />
          <MenuItem
            name="Transactions"
            image="/icon/transaction.svg"
            href="/member/transactions"
            active={menu == "transactions" ? true : false}
          />

          <MenuItem
            name="Messages"
            image="/icon/message.svg"
            href="#"
            active={menu == "messages" ? true : false}
          />
          <MenuItem
            name="Card"
            image="/icon/card.svg"
            href="#"
            active={menu == "card" ? true : false}
          />
          <MenuItem
            name="Rewards"
            image="/icon/reward.svg"
            href="#"
            active={menu == "rewards" ? true : false}
          />

          <MenuItem
            name="Settings"
            image="/icon/setting.svg"
            href="/member/edit-profile"
            active={menu == "edit-profile" ? true : false}
          />
          <MenuItem
            name="Log Out"
            image="/icon/logout.svg"
            href="/member/edit-profile"
            active={menu == "logout" ? true : false}
          />
        </div>
        <div className="sidebar-footer pt-73 pe-30">
          <div className="footer-card">
            <div className="d-flex justify-content-between mb-20">
              <img src="/icon/topup.svg" height={50} width={50} />
              <p className="fw-medium color-palette-1">
                Top Up &<br />
                Be The Winner
              </p>
            </div>
            <a
              className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill"
              href="#"
              role="button"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
