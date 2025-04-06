import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 class="h1">
              Hello I'm <br /><span className="text-accent">Nguyen Quoc Huy</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I craft responsive, user-friendly websites with modern web technologies like React, JavaScript, and CSS. Let’s build something amazing together</p>
          </div>

          <div className="flex flex-col items-center xl:flex-row gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span> Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border boder-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
