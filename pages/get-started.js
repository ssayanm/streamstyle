import Script from "next/script";
import HubspotContactForm from "../components/HubspotContactForm";

const getStarted = () => {
  return (
    <div>
      <HubspotContactForm
        region="eu1"
        portalId="25472727"
        formId="2e48dd4d-3794-438e-8ee3-5f7a00abf1dc"
      />
    </div>
  );
};
export default getStarted;
