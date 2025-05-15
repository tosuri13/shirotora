import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export const Header = () => {
  return (
    <div className="flex h-[40px] w-full items-center justify-between bg-theme-primary px-[12px] py-[12px] text-white lg:h-[64px] lg:px-[24px]">
      <div className="flex items-center gap-[6px] lg:gap-[8px]">
        <img
          alt="アイコン"
          src="/icon.png"
          className="size-[24px] lg:size-[36px]"
        />
        <h1 className="font-bold text-[20px] lg:text-[32px]">Shirotora</h1>
      </div>
      <div className="flex items-center gap-[8px] lg:gap-[16px]">
        <a
          className="flex h-[24px] items-center gap-[6px] text-[12px] hover:underline hover:underline-offset-4 lg:gap-[8px] lg:text-[16px]"
          href="https://github.com/tosuri13/shirotora"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub className="size-[18px] fill-white lg:size-[24px]" />
          GitHub
        </a>
        <a
          className="flex h-[24px] items-center gap-[4px] text-[12px] hover:underline hover:underline-offset-4 lg:gap-[8px] lg:text-[16px]"
          href="https://x.com/tosuri13"
          target="_blank"
          rel="noreferrer"
        >
          <SiX className="size-[16px] fill-white lg:size-[20px]" />
          Twitter
        </a>
      </div>
    </div>
  );
};
