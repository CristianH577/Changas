import list from "../../json/list.json";
import CardData from "../../components/card_data";
import CarouselConstruct from "../../components/carousel";
import ListPrices from "../../components/list_prices";
import Reviews from "../../components/reviews";

function Profile() {

  return (
    <div>
      <CardData 
        personal={list[0].personal}
        occs={list[0].experience.occs}
      />

      { list[0].experience.imgs !== "" && <CarouselConstruct imgs={list[0].experience.imgs} /> }

      { list[0].experience.jobs !== "" && <ListPrices jobs={list[0].experience.jobs} /> }

      { list[0].community.values !== "" && <Reviews reviews={list[0].community.values} /> }
    </div>
  );
}

export default Profile;
