import { logout } from "@/functions/fetches/logout";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import Toggle from "./Toggle";
import imageSettings from "@/assets/img/settings.png";
import imageQuestion from "@/assets/img/question.png";
import imageLogout from "@/assets/img/logout.png";
import imageNext from "@/assets/img/next.png";
import imageNightMode from "@/assets/img/night-mode.png";
import { useContext } from "react";
import { mainContext } from "@/context/mainProvider";

const SettingsForm = () => {
  const {user, setUser, setSaldo} = useContext(mainContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const goToEditUser = () => {
    navigate("/edit-profile");
  };

  const goToFaq = () => {
    navigate("/faq");
  };

  const goToTermsAndServices = () => {
    setUser(undefined)
    setSaldo(undefined)
    navigate("/terms-and-services");
  };

  return (
    <>
      <div className="px-2 flex flex-col">
        <div className="pb-6 flex flex-col bg-card rounded-lg ">
          <div className="text-lg border h-12 items-center rounded-md flex justify-between bg-accent text-primary-foreground hover:bg-primary/90">
            <div className="flex items-center mx-4">
              <img
                src={imageNightMode}
                className="w-6 h-6 mr-2"
                alt="Night Mode"
              />
              <p className="text-foreground">Darkmode</p>
            </div>
            <div className="mr-2">
              <Toggle />
            </div>
          </div>
        </div>

        <div className=" flex flex-col">
          <Button
            onClick={goToEditUser}
            className="text-lg border h-12 justify-between"
            variant='likeCard'
          >
            <div className="flex items-center">
              <img src={imageSettings} className="w-6 h-6 mr-2"/>
              Edit Profile
            </div>
            <img src={imageNext} className="w-6 h-6"/>
          </Button>
        </div>

        <div className=" flex flex-col">
          <Button onClick={goToFaq} className="text-lg border h-12 justify-between" variant='likeCard'>
            <div className="flex items-center">
              <img src={imageQuestion} className="w-6 h-6 mr-2"/>
              <p>FAQ</p> 
            </div>
            <img src={imageNext} className="w-6 h-6"/>
          </Button>
        </div>

        <div className="mb-8  flex flex-col">
          <Button onClick={goToTermsAndServices} className="text-lg border h-12 justify-between" variant='likeCard'>
            <div className="flex items-center">
              <img src={imageQuestion} className="w-6 h-6 mr-2"/> 
              <p>Terms and Services</p>
            </div>
            <img src={imageNext} className="w-6 h-6"/>
          </Button>
        </div>

        <div className="mb-8  flex flex-col">
          <Button
            onClick={handleLogout}
            className="text-lg border h-12 justify-between"
            variant='likeCard'
          >
            <div className="flex items-center">
              <img src={imageLogout} className="w-6 h-6 mr-2"/> 
              <p>Logout</p>
            </div>
            <img src={imageNext} className="w-6 h-6"/>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SettingsForm;

