import NavBar from "@/components/NavBar";
import HeaderNormal from "@/components/header/HeaderNormal";


const TermsAndServices = () => {
    return ( 
        
        <>
        <HeaderNormal />
        <div className="py-5 px-4 h-dvh">
        <h1 className="text-2xl text-center font-bold pt-5 pb-5 text-[#0097B2] dark:text-[#FFDE59]">Terms and Policy</h1>
        <p className="text-sm mb-2">
          Please read these terms and conditions carefully before using our
          services.
        </p>
        <h2 className="text-xl font-bold mt-4 mb-2">Terms of Service</h2>
        <p className="text-sm mb-2">
          By using our services, you agree to be bound by these terms and
          conditions.
        </p>
        <h2 className="text-xl font-bold mb-2">Privacy Policy</h2>
        <p className="text-sm mb-2">
          Our privacy policy outlines how we collect, use, and disclose your
          personal information.
        </p>
        <h2 className="text-xl font-bold mb-2">Security</h2>
        <p className="text-sm mb-2">
          We take the security of your personal and financial information
          seriously. Learn more about our security measures.
        </p>
        <h2 className="text-xl font-bold mb-2">Changes to Terms and Policy</h2>
        <p className="text-sm mb-2">
          We reserve the right to update or modify these terms and policies at any
          time. Please review this page periodically for changes.
        </p>
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <p className="text-sm">
          If you have any questions about our terms and policies, please contact
          us.
        </p>
      </div>
      <NavBar />
      </>
     );
}
 
export default TermsAndServices;