import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export const Header = () => {
  return (
    <div className="flex h-[64px] w-full items-center justify-between bg-theme-primary px-[24px] py-[12px] text-white">
      <div className="flex items-center gap-[8px]">
        <img alt="アイコン" src="/icon.png" className="size-[36px]" />
        <h1 className="font-bold text-[32px]">Shirotora</h1>
      </div>
      <div className="flex items-center gap-[16px]">
        <a
          className="flex h-[24px] items-center gap-[8px] text-[16px] hover:underline hover:underline-offset-4"
          href="https://github.com/tosuri13/shirotora"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub className="size-[24px] fill-white" />
          GitHub
        </a>
        <a
          className="flex h-[24px] items-center gap-[8px] text-[16px] hover:underline hover:underline-offset-4"
          href="https://x.com/tosuri13"
          target="_blank"
          rel="noreferrer"
        >
          <SiX className="size-[20px] fill-white" />
          Twitter
        </a>
      </div>
    </div>
  );
};
