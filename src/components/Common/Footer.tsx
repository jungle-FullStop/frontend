import { Typography } from '@material-tailwind/react';
import teamLogoBlack from '@assets/image/teamLogoBlack.png';

export function Footer() {
  return (
    <footer className="w-full bg-[#f8fafdfd] p-4">
      <div className="flex flex-row flex-wrap items-center justify-center pl-4 pr-4 bg-[#f8fafdfd] text-center md:justify-between">
        <img src={teamLogoBlack} alt="logo-ct" className="w-[200px]" />
        <ul className="flex  flex-wrap items-center gap-x-8 ">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-4 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Team FullStop
      </Typography>
    </footer>
  );
}
