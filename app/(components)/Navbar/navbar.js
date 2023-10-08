import Image from "next/image";
import profileImg from "../../../public/images/IbTaSaM.jpg";

const Navbar = () => {
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#3c6e71]">
              Student DashBoard
            </span>
          </a>
          <div class="flex items-center md:order-2">
            <button
              type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span class="sr-only">Open user menu</span>
              <Image
                class="w-8 h-8 rounded-full"
                src={profileImg}
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
