import GameItem from "../../molecules/GameItem";
export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem
            href="1"
            thumbnail="Thumbnail-1.png"
            icon="sm.svg"
            name="Super Mechs"
            type="Mobile"
          />
          <GameItem
            href="1"
            thumbnail="Thumbnail-2.png"
            icon="sm.svg"
            name="Call of Duty: Modern"
            type="Mobile"
          />
          <GameItem
            href="1"
            thumbnail="Thumbnail-3.png"
            icon="sm.svg"
            name="Mobile Legends"
            type="Mobile"
          />
          <GameItem
            href="1"
            thumbnail="Thumbnail-4.png"
            icon="sm.svg"
            name="Clash of Clans"
            type="Mobile"
          />
          <GameItem
            href="1"
            thumbnail="Thumbnail-5.png"
            icon="sm.svg"
            name="Valorant"
            type="Desktop"
          />
        </div>
      </div>
    </section>
  );
}
