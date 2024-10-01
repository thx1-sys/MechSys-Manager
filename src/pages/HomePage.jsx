import { ViewHome } from "../components/Home/ViewHome";
import { InfoPage } from "../components/Home/InfoPage";
import { EquipmentGallery } from "../components/Section/EquipmentGallery";
import { HomeFooter } from "../components/Footer/HomeFooter";

const HomePage = () => {
  return (
    <div className="bg-[#F5F5F7] overflow-hidden">
      <ViewHome />
      <InfoPage />
      <EquipmentGallery />
      <HomeFooter />
    </div>
  );
};

export { HomePage };
